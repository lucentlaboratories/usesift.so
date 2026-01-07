-- Sift Database Schema Updates for Canvas Integration
-- Run these commands in your Supabase SQL editor or database management tool

-- Add Canvas integration fields to assignments table
ALTER TABLE assignments ADD COLUMN IF NOT EXISTS canvas_id VARCHAR(255);
ALTER TABLE assignments ADD COLUMN IF NOT EXISTS canvas_url TEXT;
ALTER TABLE assignments ADD COLUMN IF NOT EXISTS sync_source VARCHAR(50) DEFAULT 'manual';
ALTER TABLE assignments ADD COLUMN IF NOT EXISTS confidence_score DECIMAL(3,2);

-- Add Canvas integration fields to exams table (if you have a separate exams table)
ALTER TABLE exams ADD COLUMN IF NOT EXISTS canvas_id VARCHAR(255);
ALTER TABLE exams ADD COLUMN IF NOT EXISTS canvas_url TEXT;
ALTER TABLE exams ADD COLUMN IF NOT EXISTS sync_source VARCHAR(50) DEFAULT 'canvas';

-- Create canvas_sync_log table to track sync operations
CREATE TABLE IF NOT EXISTS canvas_sync_log (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  assignments_synced INTEGER DEFAULT 0,
  sync_timestamp TIMESTAMP DEFAULT NOW(),
  sync_source VARCHAR(50),
  status VARCHAR(20) DEFAULT 'success',
  error_message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_assignments_canvas_id ON assignments(canvas_id);
CREATE INDEX IF NOT EXISTS idx_assignments_sync_source ON assignments(sync_source);
CREATE INDEX IF NOT EXISTS idx_canvas_sync_log_user_id ON canvas_sync_log(user_id);
CREATE INDEX IF NOT EXISTS idx_canvas_sync_log_timestamp ON canvas_sync_log(sync_timestamp);

-- Create a view for sync statistics
CREATE OR REPLACE VIEW sync_statistics AS
SELECT 
  user_id,
  COUNT(*) as total_syncs,
  SUM(assignments_synced) as total_assignments_synced,
  MAX(sync_timestamp) as last_sync,
  COUNT(CASE WHEN status = 'success' THEN 1 END) as successful_syncs,
  COUNT(CASE WHEN status = 'error' THEN 1 END) as failed_syncs
FROM canvas_sync_log
GROUP BY user_id;

-- Add RLS (Row Level Security) policies for canvas_sync_log
ALTER TABLE canvas_sync_log ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own sync logs
CREATE POLICY "Users can view own sync logs" ON canvas_sync_log
  FOR SELECT USING (auth.uid() = user_id);

-- Policy: Users can insert their own sync logs
CREATE POLICY "Users can insert own sync logs" ON canvas_sync_log
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own sync logs
CREATE POLICY "Users can update own sync logs" ON canvas_sync_log
  FOR UPDATE USING (auth.uid() = user_id);

-- Add a function to log sync operations
CREATE OR REPLACE FUNCTION log_canvas_sync(
  p_user_id UUID,
  p_assignments_synced INTEGER,
  p_sync_source VARCHAR(50),
  p_status VARCHAR(20) DEFAULT 'success',
  p_error_message TEXT DEFAULT NULL
) RETURNS INTEGER AS $$
DECLARE
  sync_id INTEGER;
BEGIN
  INSERT INTO canvas_sync_log (
    user_id,
    assignments_synced,
    sync_source,
    status,
    error_message
  ) VALUES (
    p_user_id,
    p_assignments_synced,
    p_sync_source,
    p_status,
    p_error_message
  ) RETURNING id INTO sync_id;
  
  RETURN sync_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION log_canvas_sync TO authenticated;

-- Create a function to get user sync stats
CREATE OR REPLACE FUNCTION get_user_sync_stats(p_user_id UUID)
RETURNS TABLE (
  total_syncs BIGINT,
  total_assignments_synced BIGINT,
  last_sync TIMESTAMP,
  successful_syncs BIGINT,
  failed_syncs BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(*) as total_syncs,
    COALESCE(SUM(assignments_synced), 0) as total_assignments_synced,
    MAX(sync_timestamp) as last_sync,
    COUNT(CASE WHEN status = 'success' THEN 1 END) as successful_syncs,
    COUNT(CASE WHEN status = 'error' THEN 1 END) as failed_syncs
  FROM canvas_sync_log
  WHERE user_id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION get_user_sync_stats TO authenticated;

-- Example usage comments:
-- To log a successful sync:
-- SELECT log_canvas_sync(auth.uid(), 5, 'canvas', 'success');

-- To log a failed sync:
-- SELECT log_canvas_sync(auth.uid(), 0, 'canvas', 'error', 'Connection timeout');

-- To get user sync statistics:
-- SELECT * FROM get_user_sync_stats(auth.uid()); 