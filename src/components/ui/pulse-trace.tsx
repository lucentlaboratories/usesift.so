import React from "react";

interface PulseTraceProps {
  active?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export const PulseTrace = ({ 
  active = true, 
  width = 64, 
  height = 64, 
  className = "" 
}: PulseTraceProps) => {
  // Fixed stroke widths for consistent appearance
  const strokeWidth = 2;
  const glowStrokeWidth = 4;
  const headStrokeWidth = 3;
  const dashArray = 200;
  const sparkDashArray = 20;
  
  // ECG-like path for 64x64 viewBox
  const d = `
    M 4 32
    L 8 32
    L 10 28
    L 12 36
    L 14 26
    L 18 38
    L 22 29
    L 24 29
    L 26 36
    L 28 24
    L 30 38
    L 32 32
    L 60 32
  `;

  return (
    <svg
      viewBox="0 0 64 64"
      width={width}
      height={height}
      className={className}
      style={{ display: "block" }}
    >
      <defs>
        {/* Enhanced blue gradient for the core stroke */}
        <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6bb6ff" />
          <stop offset="30%" stopColor="#4a9fff" />
          <stop offset="60%" stopColor="#3a8fff" />
          <stop offset="100%" stopColor="#1778ff" />
        </linearGradient>

        {/* Enhanced head mask for smoother sparkle effect */}
        <linearGradient id="headMask" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="30%" stopColor="white" stopOpacity="0.3" />
          <stop offset="50%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Glow filter for enhanced visual effect */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <path
        d={d}
        stroke="url(#pulseGradient)"
        strokeWidth={glowStrokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.3"
        filter="url(#glow)"
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: active ? 0 : dashArray,
          transition: active ? "none" : "stroke-dashoffset 600ms ease",
          animation: active ? "traceGlow 2.4s linear infinite" : "none",
        }}
      />

      {/* Core line */}
      <path
        d={d}
        stroke="url(#pulseGradient)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: active ? 0 : dashArray,
          transition: active ? "none" : "stroke-dashoffset 600ms ease",
          animation: active ? "trace 2.0s linear infinite" : "none",
        }}
      />

      {/* Bright traveling head */}
      <g mask="url(#maskHead)">
        <path
          d={d}
          stroke="#cfe5ff"
          strokeWidth={headStrokeWidth}
          fill="none"
          style={{
            strokeDasharray: sparkDashArray,
            strokeDashoffset: 0,
            animation: active ? "spark 1.0s linear infinite" : "none",
            mixBlendMode: "screen",
          }}
        />
      </g>

      {/* Enhanced inline keyframes for smoother animations */}
      <style>{`
        @keyframes trace {
          0%   { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes traceGlow {
          0%   { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes spark {
          0%   { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: -20; }
        }
      `}</style>

      {/* Enhanced mask definition */}
      <mask id="maskHead">
        <rect width="64" height="64" fill="black" />
        <rect width="64" height="64" fill="url(#headMask)">
          <animate 
            attributeName="x" 
            from="-64" 
            to="64" 
            dur="1.5s" 
            repeatCount="indefinite" 
          />
        </rect>
      </mask>
    </svg>
  );
};