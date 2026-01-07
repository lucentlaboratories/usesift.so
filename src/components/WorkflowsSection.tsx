import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useState, useEffect, memo, useCallback, useMemo } from "react";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig
} from "@/lib/animation-configs";

const AutomationDemoCard = memo(() => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Simplified: just toggle between loading and complete states
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(prev => !prev);
    }, isAnimating ? 4000 : 2000); // Show complete for 4s, loading for 2s

    return () => clearTimeout(timer);
  }, [isAnimating]);

  const nodes = [
    { icon: "/assets/integrations/canvas.png", label: "Canvas", x: 120 },
    { icon: "/assets/integrations/Gmail.svg", label: "Gmail", x: 260 },
    { icon: "/assets/integrations/Notion.svg", label: "Notion", x: 400 },
    { icon: "/assets/integrations/googlecalendar.png", label: "Calendar", x: 540 },
  ];

  const nodeRadius = 28; // Half of w-14 (56px / 2)
  const centerY = 55; // Center Y position in the 110px card

  return (
    <div className="mb-16">
      <div className="glass-card w-full rounded-2xl px-8 py-6 relative overflow-hidden" style={{ height: '110px' }}>
        {/* Loading Header - Simplified */}
        {!isAnimating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex items-center gap-1.5 text-foreground/90 text-base font-medium">
              <span>Generating Morning Briefing...</span>
            </div>
          </motion.div>
        )}

        {/* Nodes and Lines Container - Simplified */}
        {isAnimating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center px-8"
          >
            {/* SVG for connector lines - All visible at once */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
              {/* All lines rendered statically */}
              <line
                x1={nodes[0].x + nodeRadius}
                y1={centerY}
                x2={nodes[1].x - nodeRadius}
                y2={centerY}
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.65))" }}
              />
              <line
                x1={nodes[1].x + nodeRadius}
                y1={centerY}
                x2={nodes[2].x - nodeRadius}
                y2={centerY}
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.65))" }}
              />
              <line
                x1={nodes[2].x + nodeRadius}
                y1={centerY}
                x2={nodes[3].x - nodeRadius}
                y2={centerY}
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.65))" }}
              />
              <line
                x1={nodes[3].x + nodeRadius}
                y1={centerY}
                x2="750"
                y2={centerY}
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.65))" }}
              />
            </svg>

            {/* Integration Nodes - Simplified */}
            {nodes.map((node, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `${node.x}px`,
                  top: '50%',
                  transform: 'translateY(-50%) translateZ(0)'
                }}
              >
                <div className="w-14 h-14 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/20 flex items-center justify-center relative">
                  <img src={node.icon} alt={node.label} className="w-7 h-7" />
                  {/* Soft glow */}
                  <div className="absolute inset-0 rounded-full bg-foreground/20 blur-md -z-10" style={{ transform: "translateZ(0)" }} />
                </div>
              </div>
            ))}

            {/* Automation Complete Badge - Simplified */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2">
              <div className="px-4 py-2 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center gap-2 border border-foreground/20 relative">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground/90 text-sm font-medium whitespace-nowrap">Morning Briefing Ready</span>
                {/* Static blue glow */}
                <div
                  className="absolute inset-0 rounded-full bg-blue-500/15"
                  style={{ filter: "blur(12px)", zIndex: -1, transform: "translateZ(0)" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
});

AutomationDemoCard.displayName = 'AutomationDemoCard';

const automations = [
  {
    title: "Daily Briefing",
    description: "Start each day with a personalized summary of your priority tasks, upcoming deadlines, and schedule overview.",
    runCount: 45200,
    integrationIcons: [
      <img key="canvas" src="/assets/integrations/canvas.png" alt="Canvas" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
      <img key="gmail" src="/assets/integrations/Gmail.svg" alt="Gmail" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
      <img key="notion" src="/assets/integrations/Notion.svg" alt="Notion" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
    ],
  },
  {
    title: "Weekly Academic Review",
    description: "Get insights on your week's productivity, completed assignments, study patterns, and areas needing attention.",
    runCount: 28100,
    integrationIcons: [
      <img key="canvas" src="/assets/integrations/canvas.png" alt="Canvas" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
      <img key="gcal" src="/assets/integrations/googlecalendar.png" alt="Google Calendar" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
    ],
  },
  {
    title: "Daily Schedule Builder",
    description: "Automatically generate time-blocked schedules optimized for your energy levels, deadlines, and preferences.",
    runCount: 38900,
    integrationIcons: [
      <img key="gcal" src="/assets/integrations/googlecalendar.png" alt="Google Calendar" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
      <img key="apple-cal" src="/assets/integrations/AppleCalendar.svg" alt="Apple Calendar" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
      <img key="outlook" src="/assets/integrations/OutlookCalendar.svg" alt="Outlook Calendar" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
    ],
  },
  {
    title: "Smart Inbox",
    description: "Intelligently process your emails, extract action items, and add important academic dates to your calendar.",
    runCount: 15700,
    integrationIcons: [
      <img key="gmail" src="/assets/integrations/Gmail.svg" alt="Gmail" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
      <img key="outlook" src="/assets/integrations/OutlookMail.svg" alt="Outlook" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
      <img key="gcal" src="/assets/integrations/googlecalendar.png" alt="Google Calendar" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
    ],
  },
  {
    title: "Canvas Study Plan",
    description: "Fetch assignments from Canvas and automatically create study plans with time estimates and milestones.",
    runCount: 22400,
    integrationIcons: [
      <img key="canvas" src="/assets/integrations/canvas.png" alt="Canvas" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
      <img key="gcal" src="/assets/integrations/googlecalendar.png" alt="Google Calendar" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
      <img key="notion" src="/assets/integrations/Notion.svg" alt="Notion" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
    ],
  },
  {
    title: "Submission Guardian",
    description: "Monitor upcoming assignment deadlines and send smart reminders based on task complexity and your schedule.",
    runCount: 19300,
    integrationIcons: [
      <img key="canvas" src="/assets/integrations/canvas.png" alt="Canvas" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
      <img key="gmail" src="/assets/integrations/Gmail.svg" alt="Gmail" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
      <img key="apple-rem" src="/assets/integrations/AppleReminders.svg" alt="Apple Reminders" className="w-7 h-7 max-w-7 max-h-7 object-contain" />,
    ],
  },
];

const AutomationsSection = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={viewportConfig}
          className="text-center mb-8"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-serif-hero font-normal tracking-tight">
            Automations for <span className="italic">every</span> academic routine.
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Build routines that automate your studying, planning, and productivity — powered by Sift's AI.
          </p>
        </motion.div>

        <AutomationDemoCard />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {automations.map((automation, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all"
            >
              {/* Integration icons - at the top */}
              {automation.integrationIcons.length > 0 && (
                <div className="mb-4">
                  <div className="w-10 h-10 flex items-center justify-start text-foreground">
                    <div className="flex gap-1.5 items-center">
                      {automation.integrationIcons.map((icon) => (
                        <div key={icon.key} className="w-7 h-7 max-w-7 max-h-7 object-contain flex-shrink-0">
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                {automation.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4">
                {automation.description}
              </p>

              {/* Run count */}
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>{automation.runCount.toLocaleString()} runs</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default AutomationsSection;
