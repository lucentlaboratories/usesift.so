import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Calendar, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { fadeInUp, viewportConfig } from "@/lib/animation-configs";

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
    title: "Machine Learning Project",
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

export const AutomationEngineSection = () => {
  const [phase, setPhase] = useState<AnimationPhase>("sync");
  const [visibleAssignments, setVisibleAssignments] = useState<string[]>([]);
  const [scheduledBlocks, setScheduledBlocks] = useState<Record<string, Assignment>>({});
  const [flyingAssignments, setFlyingAssignments] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Phase 1: Canvas sync (0-1.5s)
    const syncTimer = setTimeout(() => {
      setPhase("assignments");
    }, 1500);

    // Phase 2: Assignments appear (1.5-3.5s)
    assignments.forEach((assignment, index) => {
      setTimeout(() => {
        setVisibleAssignments((prev) => [...prev, assignment.id]);
      }, 1800 + index * 200);
    });

    // Phase 3: Scheduling animation (3.5-5.5s)
    const scheduleTimer = setTimeout(() => {
      setPhase("scheduling");
      assignments.forEach((assignment, index) => {
        setTimeout(() => {
          // Mark as flying
          setFlyingAssignments((prev) => new Set([...prev, assignment.id]));
          // Then schedule it
          setTimeout(() => {
            setScheduledBlocks((prev) => ({
              ...prev,
              [assignment.timeSlot]: assignment,
            }));
            // Remove from flying after animation
            setTimeout(() => {
              setFlyingAssignments((prev) => {
                const next = new Set(prev);
                next.delete(assignment.id);
                return next;
              });
            }, 600);
          }, 50);
        }, 3500 + index * 300);
      });
    }, 3500);

    // Phase 4: Complete (5.5s+)
    const completeTimer = setTimeout(() => {
      setPhase("complete");
    }, 5500);

    return () => {
      clearTimeout(syncTimer);
      clearTimeout(scheduleTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <Section className="relative overflow-hidden">
      {/* Unifying gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0d] via-[#0f0f11] to-[#121214]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <Container className="relative z-10">
        {/* Centered Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-serif-hero font-normal tracking-tight mb-4">
            Automation, <span className="italic">built for students</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let Sift sync your assignments, build your day, and keep your calendar clean.
          </p>
        </motion.div>

        {/* Row 1: Interactive Demo - One unified card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={viewportConfig}
          className="mb-16"
        >
          <div className="glass-card p-7 rounded-2xl border border-foreground/5 shadow-[0_4px_16px_rgba(0,0,0,0.15)] relative overflow-hidden">
            {/* Subtle inner highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Canvas Sync + Assignments */}
              <div className="space-y-6">
                {/* Canvas Sync Monitor */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{
                        scale: phase === "sync" ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 1,
                        repeat: phase === "sync" ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      <img
                        src="/assets/integrations/canvas.png"
                        alt="Canvas"
                        className="w-5 h-5"
                      />
                      {phase === "sync" && (
                        <motion.div
                          className="absolute -inset-1 rounded-full bg-[#3DACFF]/20"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </motion.div>
                    <div className="flex-1">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: phase === "sync" ? "100%" : "100%",
                        }}
                        transition={{
                          duration: 1.2,
                          ease: "easeInOut",
                        }}
                        className="h-0.5 bg-gradient-to-r from-[#3DACFF] via-[#3DACFF]/50 to-transparent rounded-full"
                      />
                    </div>
                  </div>
                  <AnimatePresence mode="wait">
                    {phase === "sync" && (
                      <motion.p
                        key="syncing"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-sm text-foreground/60"
                      >
                        Syncing assignments...
                      </motion.p>
                    )}
                    {phase !== "sync" && (
                      <motion.p
                        key="synced"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-foreground/80 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#3DACFF]" />
                        Assignments synced
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Assignments Stack */}
                <div className="space-y-2 relative">
                  {assignments.map((assignment, index) => {
                    const isVisible = visibleAssignments.includes(assignment.id);
                    const isScheduled = scheduledBlocks[assignment.timeSlot]?.id === assignment.id;
                    const isFlying = flyingAssignments.has(assignment.id);

                    return (
                      <motion.div
                        key={assignment.id}
                        initial={false}
                        animate={{
                          opacity: isVisible && !isFlying && !isScheduled ? 1 : isFlying ? 0.8 : 0,
                          y: isVisible && !isFlying && !isScheduled ? 0 : 6,
                          scale: isVisible && !isFlying && !isScheduled ? 1 : isFlying ? 0.6 : 0.95,
                          x: isFlying ? 200 : 0,
                        }}
                        transition={{
                          type: isFlying ? "tween" : "spring",
                          duration: isFlying ? 0.6 : undefined,
                          stiffness: isFlying ? undefined : 400,
                          damping: isFlying ? undefined : 30,
                          delay: isFlying ? 0 : index * 0.12,
                          ease: isFlying ? "easeInOut" : undefined,
                        }}
                        className={`
                          relative p-4 rounded-xl border border-foreground/5
                          bg-gradient-to-br from-foreground/[0.07] to-foreground/[0.03]
                          backdrop-blur-sm
                          ${isScheduled || isFlying ? "pointer-events-none" : ""}
                        `}
                        style={{
                          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                          zIndex: isFlying ? 50 : 1,
                        }}
                      >
                        {/* Inner highlight */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

                        <div className="flex items-start gap-3">
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                            style={{ backgroundColor: assignment.color }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-foreground/95 mb-1">
                              {assignment.title}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-foreground/50">
                              <span>{assignment.subject}</span>
                              <span>•</span>
                              <span>{assignment.deadline}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Time Blocking Calendar */}
              <div className="relative">
                <div className="glass-card p-6 rounded-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#3DACFF]" />
                      <h3 className="font-semibold text-foreground/90">Today's Schedule</h3>
                    </div>
                    <div className="text-sm text-foreground/50">Dec 23</div>
                  </div>

                  {/* Time Grid */}
                  <div className="space-y-2">
                    {timeSlots.map((slot) => {
                      const assignment = scheduledBlocks[slot];
                      const isOccupied = !!assignment;
                      const slotIndex = timeSlots.indexOf(slot);

                      return (
                        <motion.div
                          key={slot}
                          initial={false}
                          animate={{
                            scale: phase === "complete" && isOccupied ? [1, 1.02, 1] : 1,
                            scaleX: isOccupied && phase === "scheduling" ? [0, 1] : 1,
                            opacity: isOccupied && phase === "scheduling" ? [0, 1] : 1,
                            boxShadow: phase === "complete" && isOccupied
                              ? [
                                  "0 2px 8px rgba(0,0,0,0.1)",
                                  "0 4px 16px rgba(61,172,255,0.2)",
                                  "0 2px 8px rgba(0,0,0,0.1)",
                                ]
                              : "0 2px 8px rgba(0,0,0,0.1)",
                          }}
                          transition={{
                            duration: isOccupied && phase === "scheduling" ? 0.4 : 0.6,
                            delay: phase === "complete" && isOccupied ? slotIndex * 0.05 : isOccupied && phase === "scheduling" ? slotIndex * 0.05 : 0,
                            ease: [0.34, 1.56, 0.64, 1], // Spring easing for premium feel
                          }}
                          className={`
                            relative p-3 rounded-lg border transition-all duration-300 overflow-hidden
                            ${isOccupied
                              ? "bg-[#3DACFF]/10 border-[#3DACFF]/30"
                              : "bg-foreground/[0.02] border-foreground/5"
                            }
                          `}
                          style={{
                            borderRadius: isOccupied ? "8px 2px 2px 8px" : "8px",
                            transformOrigin: "left center",
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1.5 text-sm text-foreground/50 min-w-[70px]">
                                <Clock className="w-3 h-3" />
                                <span className="font-mono text-xs">{slot}</span>
                              </div>

                              {isOccupied ? (
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                    delay: 0.1,
                                  }}
                                  className="flex-1"
                                >
                                  <div className="font-medium text-foreground/95 text-sm">
                                    {assignment.title}
                                  </div>
                                  <div className="text-xs text-foreground/60 mt-0.5">
                                    {assignment.subject}
                                  </div>
                                </motion.div>
                              ) : (
                                <div className="text-sm text-foreground/30">Available</div>
                              )}
                            </div>

                            <div
                              className={`
                                w-2 h-2 rounded-full
                                ${isOccupied ? "bg-[#3DACFF]" : "bg-foreground/10"}
                              `}
                            />
                          </div>

                          {/* Motion shadow during animation */}
                          {phase === "scheduling" && isOccupied && (
                            <motion.div
                              className="absolute inset-0 rounded-lg bg-[#3DACFF]/5"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 0.3, 0] }}
                              transition={{ duration: 0.5 }}
                            />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Connective pulse line (optional visual element) */}
            {phase === "scheduling" && (
              <motion.div
                className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#3DACFF]/30 to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            )}
          </div>
        </motion.div>

        {/* Row 2: Calendar Sync + Daily Agenda */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Calendar Sync Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="glass-card p-7 rounded-2xl border border-foreground/5 shadow-[0_4px_16px_rgba(0,0,0,0.15)] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            <div className="flex items-start gap-4 mb-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:bg-[#3DACFF]/10 transition-colors"
              >
                <Calendar className="w-5 h-5 text-[#3DACFF] group-hover:text-[#3DACFF]" />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground/90 mb-1">Calendar Sync</h3>
                <p className="text-sm text-foreground/60">
                  Two-way sync with Google Calendar and Apple Calendar. Your schedule stays in perfect harmony.
                </p>
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3DACFF]" />
                <span>Real-time updates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3DACFF]" />
                <span>Conflict resolution</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3DACFF]" />
                <span>Multi-calendar support</span>
              </div>
            </div>
          </motion.div>

          {/* Daily Agenda Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="glass-card p-7 rounded-2xl border border-foreground/5 shadow-[0_4px_16px_rgba(0,0,0,0.15)] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            <div className="flex items-start gap-4 mb-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:bg-[#3DACFF]/10 transition-colors"
              >
                <Sparkles className="w-5 h-5 text-[#3DACFF] group-hover:text-[#3DACFF]" />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground/90 mb-1">Daily Agenda</h3>
                <p className="text-sm text-foreground/60">
                  Get personalized daily summaries of your tasks, exams, and schedule insights.
                </p>
              </div>
            </div>

            <div className="space-y-2 mt-6">
              {[
                { title: "Machine Learning Project", time: "9:00 AM" },
                { title: "Literature Draft", time: "2:00 PM" },
                { title: "Study Session", time: "4:00 PM" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-foreground/[0.03] border-l-2 border-[#3DACFF]/30"
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground/90">{item.title}</div>
                    <div className="text-xs text-foreground/50 mt-0.5">{item.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

