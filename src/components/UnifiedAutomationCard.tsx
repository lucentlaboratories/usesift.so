import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Calendar, Clock } from "lucide-react";

// Animation phases
type AnimationPhase = "sync" | "assignments" | "scheduling" | "complete";

interface Assignment {
  id: string;
  title: string;
  subject: string;
  deadline: string;
  timeSlot: string;
  color: string;
}

const assignments: Assignment[] = [
  {
    id: "1",
    title: "Machine Learning Project Report",
    subject: "CS 4700",
    deadline: "Dec 24",
    timeSlot: "9:00 AM",
    color: "#3B82F6",
  },
  {
    id: "2",
    title: "Calculus Problem Set 12",
    subject: "MATH 2400",
    deadline: "Dec 25",
    timeSlot: "10:00 AM",
    color: "#F59E0B",
  },
  {
    id: "3",
    title: "Literature Essay Draft",
    subject: "ENGL 2100",
    deadline: "Dec 26",
    timeSlot: "2:00 PM",
    color: "#10B981",
  },
  {
    id: "4",
    title: "Physics Lab Report",
    subject: "PHYS 1110",
    deadline: "Dec 27",
    timeSlot: "3:00 PM",
    color: "#8B5CF6",
  },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export const UnifiedAutomationCard = () => {
  const [phase, setPhase] = useState<AnimationPhase>("sync");
  const [visibleAssignments, setVisibleAssignments] = useState<string[]>([]);
  const [scheduledBlocks, setScheduledBlocks] = useState<Record<string, Assignment>>({});
  const [flyingAssignments, setFlyingAssignments] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Phase 1: Canvas sync (0-2.5s)
    const syncTimer = setTimeout(() => {
      setPhase("assignments");
    }, 2500);

    // Phase 2: Assignments appear one by one (starting at 2.5s, 0.3s apart)
    assignments.forEach((assignment, index) => {
      setTimeout(() => {
        setVisibleAssignments((prev) => [...prev, assignment.id]);
      }, 2500 + index * 300);
    });

    // Phase 3: Scheduling animation - cards fly over and appear in calendar
    // Start flying after all assignments are visible (2.5s + 4*0.3s = 3.7s, then wait 0.5s = 4.2s)
    const allVisibleTime = 2500 + (assignments.length * 300);
    const waitBeforeFlying = 500; // Wait 0.5s after all are visible
    
    assignments.forEach((assignment, index) => {
      // Start flying animation
      setTimeout(() => {
        setFlyingAssignments((prev) => new Set([...prev, assignment.id]));
        setPhase("scheduling");
        
        // After flying animation completes, show in calendar
        setTimeout(() => {
          setScheduledBlocks((prev) => ({
            ...prev,
            [assignment.timeSlot]: assignment,
          }));
          
          // Remove from flying after it appears in calendar
          setTimeout(() => {
            setFlyingAssignments((prev) => {
              const next = new Set(prev);
              next.delete(assignment.id);
              return next;
            });
          }, 100);
        }, 600); // Match the flying duration
      }, allVisibleTime + waitBeforeFlying + (index * 200)); // Start flying after all visible + wait + staggered
    });

    // Phase 4: Complete (after all animations)
    const completeTimer = setTimeout(() => {
      setPhase("complete");
    }, allVisibleTime + waitBeforeFlying + (assignments.length * 200) + 1000);

    return () => {
      clearTimeout(syncTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div className="relative w-full bg-transparent">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Canvas Sync + Assignments */}
        <div className="space-y-6">
          {/* Canvas Sync Monitor - matching exact style from HowItWorksSection */}
          <div className="flex items-center justify-start mb-6">
            {/* Syncing Badge (larger, shows first) */}
            <motion.div
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-[12px] bg-foreground/[0.05] backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: phase === "sync" ? [0, 1, 1, 0] : 0, scale: phase === "sync" ? [0.8, 1, 1, 0.8] : 0.8 }}
              transition={{ duration: 2.5, times: [0, 0.1, 0.85, 1] }}
            >
              {/* Canvas Icon */}
              <img src="/assets/integrations/canvas.png" alt="Canvas" className="w-5 h-5 flex-shrink-0" />

              {/* Syncing state with wave animation */}
              <div className="flex items-center gap-1">
                {"Syncing".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className="text-xs font-normal text-foreground/60"
                    animate={{
                      opacity: phase === "sync" ? [0.3, 1, 0.3] : 0.3,
                    }}
                    transition={{
                      duration: 2,
                      repeat: phase === "sync" ? 1 : 0,
                      delay: (6 - index) * 0.08,
                      ease: "easeInOut",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  className="text-xs font-normal text-foreground/60"
                  animate={{
                    opacity: phase === "sync" ? [0.3, 1, 0.3] : 0.3,
                  }}
                  transition={{
                    duration: 2,
                    repeat: phase === "sync" ? 1 : 0,
                    delay: 0.1,
                    ease: "easeInOut",
                  }}
                >
                  ...
                </motion.span>
              </div>
            </motion.div>

            {/* Synced Badge (smaller, appears after) */}
            <motion.div
              className="flex items-center gap-2 px-3.5 py-2 rounded-[12px] bg-foreground/[0.05] backdrop-blur-md absolute"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: phase !== "sync" ? [0, 0, 1] : 0, scale: phase !== "sync" ? [0.8, 0.8, 1] : 0.8 }}
              transition={{ duration: 0.4, delay: 2.5, times: [0, 0.99, 1] }}
            >
              {/* Canvas Icon */}
              <img src="/assets/integrations/canvas.png" alt="Canvas" className="w-5 h-5 flex-shrink-0" />

              {/* Green dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />

              {/* Synced text */}
              <span className="text-xs font-normal text-foreground/65 whitespace-nowrap">Synced</span>
            </motion.div>
          </div>

          {/* Assignments appearing one by one - original stays untouched */}
          <div className="space-y-3 relative">
            {assignments.map((assignment, index) => {
              const isVisible = visibleAssignments.includes(assignment.id);
              const isFlying = flyingAssignments.has(assignment.id);

              return (
                <div key={assignment.id} className="relative">
                  {/* Original assignment - stays untouched */}
                  <motion.div
                    className="group relative flex items-center gap-3 rounded-[22px] bg-gradient-to-br from-foreground/[0.04] to-foreground/[0.02] backdrop-blur-sm transition-all duration-300 after:block after:h-px after:bg-foreground/3 after:absolute after:bottom-0 after:left-0 after:right-0"
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      scale: isVisible ? 1 : 0.8,
                      y: isVisible ? 0 : -20,
                    }}
                    whileHover={isVisible ? {
                      scale: 1.01,
                      y: -1,
                    } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    style={{
                      height: '56px',
                      padding: '14px 16px',
                      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    {/* Premium glow effect on hover */}
                    <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-foreground/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <button
                      className={`relative w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:scale-110 ${
                        false ? 'bg-blue-500 border-blue-500 shadow-lg shadow-blue-500/30' : 'hover:border-opacity-80'
                      }`}
                      style={{
                        backgroundColor: 'transparent',
                        borderColor: assignment.color
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-normal leading-tight text-foreground/90 truncate">
                        {assignment.title}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-foreground/[0.05] backdrop-blur-sm">
                        <span className="text-xs font-normal text-foreground/65 whitespace-nowrap">
                          {assignment.subject}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-foreground/40">
                        <Clock size={11} className="text-foreground/40 flex-shrink-0" />
                        <span className="text-xs font-normal whitespace-nowrap">
                          {assignment.timeSlot}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Ghost duplicate that flies to calendar */}
                  {isFlying && (
                    <motion.div
                      className="absolute top-0 left-0 right-0 flex items-center gap-3 rounded-[22px] bg-gradient-to-br from-foreground/[0.04] to-foreground/[0.02] backdrop-blur-sm shadow-lg pointer-events-none"
                      initial={{ 
                        opacity: 0.7, 
                        scale: 1,
                        x: 0,
                        y: 0,
                        filter: 'blur(2px)'
                      }}
                      animate={{
                        opacity: [0.7, 0.7, 0.4, 0],
                        scale: [1, 0.95, 0.85, 0.75],
                        x: 300,
                        y: -150,
                        filter: ['blur(2px)', 'blur(3px)', 'blur(5px)', 'blur(8px)']
                      }}
                      transition={{
                        duration: 0.6,
                        times: [0, 0.3, 0.6, 1], // Fade out starts at 0.3s (when calendar block appears)
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      style={{
                        height: '56px',
                        padding: '14px 16px',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
                        zIndex: 50,
                      }}
                    >
                      <button
                        className="relative w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: 'transparent',
                          borderColor: assignment.color
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-normal leading-tight text-foreground/90 truncate">
                          {assignment.title}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-foreground/[0.05] backdrop-blur-sm">
                          <span className="text-xs font-normal text-foreground/65 whitespace-nowrap">
                            {assignment.subject}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-foreground/40">
                          <Clock size={11} className="text-foreground/40 flex-shrink-0" />
                          <span className="text-xs font-normal whitespace-nowrap">
                            {assignment.timeSlot}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Time Blocking Calendar - matching exact style from HowItWorksSection */}
        <div className="relative w-full bg-card rounded-[16px] overflow-hidden border border-border/50">
          {/* Mini calendar grid - exactly matching actual UI */}
          <div className="flex bg-card">
            {/* Time labels column - 60px width to match GRID_MARGIN_LEFT */}
            <div className="flex-shrink-0 border-r border-border/50" style={{
              width: '60px',
            }}>
              {/* All-day row header */}
              <div className="h-12 border-b border-border/50 flex items-center justify-end pr-3">
                <span className="text-[10px] font-medium text-muted-foreground">all-day</span>
              </div>
              {/* Hour labels - positioned to align with grid */}
              <div className="relative" style={{ height: '300px' }}>
                <div className="h-[60px] flex items-start justify-end pr-3 absolute top-0 w-full">
                  <span className="text-[10px] font-medium -mt-1.5 text-muted-foreground">9am</span>
                </div>
                <div className="h-[60px] flex items-start justify-end pr-3 absolute w-full" style={{ top: '60px' }}>
                  <span className="text-[10px] font-medium -mt-1.5 text-muted-foreground">10am</span>
                </div>
                <div className="h-[60px] flex items-start justify-end pr-3 absolute w-full" style={{ top: '120px' }}>
                  <span className="text-[10px] font-medium -mt-1.5 text-muted-foreground">11am</span>
                </div>
                <div className="h-[60px] flex items-start justify-end pr-3 absolute w-full" style={{ top: '180px' }}>
                  <span className="text-[10px] font-medium -mt-1.5 text-muted-foreground">12pm</span>
                </div>
                <div className="h-[60px] flex items-start justify-end pr-3 absolute w-full" style={{ top: '240px' }}>
                  <span className="text-[10px] font-medium -mt-1.5 text-muted-foreground">1pm</span>
                </div>
              </div>
            </div>

            {/* Day column with time blocks */}
            <div className="flex-1 relative bg-card">
              {/* All-day row */}
              <div className="h-12 border-b border-border/50" />

              {/* Grid lines - 60px per hour */}
              <div className="relative">
                {/* 9am-1pm = 5 hours, each with 2 half-hour slots = 10 slots total */}
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`border-b ${i % 2 === 0 ? 'border-border/80' : 'border-border/50'}`}
                    style={{
                      height: '30px',
                    }}
                  />
                ))}

                {/* Time blocks - animated, appear as ghost fades out */}
                <div className="absolute inset-0">
                  {assignments.map((assignment, index) => {
                    const isScheduled = scheduledBlocks[assignment.timeSlot]?.id === assignment.id;
                    const timeIndex = timeSlots.indexOf(assignment.timeSlot);
                    if (timeIndex === -1 || timeIndex >= 5) return null; // Only show first 5 slots (9am-1pm)

                    const topPosition = timeIndex * 60 + 2; // 60px per hour, 2px offset
                    const allVisibleTime = 2500 + (assignments.length * 300);
                    const waitBeforeFlying = 500;
                    const flyDelay = allVisibleTime + waitBeforeFlying + (index * 200);
                    // Calendar block appears halfway through ghost fade (at 0.3s of 0.6s flight)
                    const appearInCalendarDelay = flyDelay + 300; // Appear as ghost is fading

                    return (
                      <motion.div
                        key={assignment.id}
                        className="absolute left-2 right-2 rounded-lg overflow-hidden flex flex-col justify-between hover:brightness-110 transition-all"
                        initial={{ opacity: 0, scaleX: 0, scaleY: 0.8 }}
                        animate={{
                          opacity: isScheduled ? 1 : 0,
                          scaleX: isScheduled ? 1 : 0,
                          scaleY: isScheduled ? 1 : 0.8,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: appearInCalendarDelay / 1000, // Convert ms to seconds
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                        style={{
                          top: `${topPosition}px`,
                          height: '56px',
                          backgroundColor: 'rgba(59, 130, 246, 0.7)',
                          borderRadius: '0.5rem',
                          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                          transformOrigin: 'left center',
                        }}
                      >
                        <div className="flex-1 p-2 min-h-0 flex flex-col justify-start">
                          <h3 className="text-[11px] font-medium text-white truncate leading-tight">
                            {assignment.title}
                          </h3>
                          <div className="flex items-center gap-1 text-[10px] text-white/90 leading-tight mt-0.5">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                              <circle cx="12" cy="12" r="10"/>
                              <polyline points="12 6 12 12 16 14"/>
                            </svg>
                            <span>{assignment.timeSlot.toLowerCase()}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

