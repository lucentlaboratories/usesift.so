import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import PulseMessageCard from "./PulseMessageCard";
import MemoryCard from "./MemoryCard";
import { UnifiedAutomationCard } from "./UnifiedAutomationCard";
import { Calendar, MessageSquare, Zap, Sparkles, BarChart3, Clock } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animation-configs";

const HowItWorksSection = ({
  id,
  className,
  hasGlow = true,
}: {
  id?: string;
  className?: string;
  hasGlow?: boolean;
}) => {
  // Sample tasks data matching app structure
  const sampleTasks = [
    {
      id: '1',
      title: 'Machine Learning Project Report',
      isCompleted: false,
      taskColor: '#3B82F6',
      formattedCourseCode: 'CS 4700',
      formattedDate: 'Dec 24',
      formattedTime: '9:00 AM',
      textClasses: 'text-sm font-medium text-foreground'
    },
    {
      id: '2',
      title: 'Calculus Problem Set 12',
      isCompleted: false,
      taskColor: '#F59E0B',
      formattedCourseCode: 'MATH 2400',
      formattedDate: 'Dec 25',
      formattedTime: '10:00 AM',
      textClasses: 'text-sm font-medium text-foreground'
    },
    {
      id: '3',
      title: 'Literature Essay Draft',
      isCompleted: false,
      taskColor: '#10B981',
      formattedCourseCode: 'ENGL 2100',
      formattedDate: 'Dec 26',
      formattedTime: '2:00 PM',
      textClasses: 'text-sm font-medium text-foreground'
    },
    {
      id: '4',
      title: 'Physics Lab Report',
      isCompleted: false,
      taskColor: '#8B5CF6',
      formattedCourseCode: 'PHYS 1110',
      formattedDate: 'Dec 27',
      formattedTime: '3:00 PM',
      textClasses: 'text-sm font-medium text-foreground'
    }
  ];

  const features = [
    {
      icon: (
        <div className="flex gap-1.5 items-center">
          <img src="/assets/integrations/canvas.png" alt="Canvas" className="w-7 h-7 max-w-7 max-h-7 object-contain flex-shrink-0" />
          <img src="/assets/integrations/googlecalendar.png" alt="Google Calendar" className="w-7 h-7 max-w-7 max-h-7 object-contain flex-shrink-0" />
          <img src="/assets/integrations/OutlookCalendar.svg" alt="Outlook Calendar" className="w-7 h-7 max-w-7 max-h-7 object-contain flex-shrink-0" />
        </div>
      ),
      iconLabel: "Canvas Integration & Time Blocking",
      title: "Auto-sync and plan your assignments",
      description: "Seamlessly fetch assignments from Canvas and let AI create your optimal study schedule.",
      visual: <UnifiedAutomationCard />
    },
    {
      icon: (
        <div className="flex gap-1.5 items-center">
          <img src="/assets/integrations/AppleReminders.svg" alt="Apple Reminders" className="w-7 h-7 max-w-7 max-h-7 object-contain flex-shrink-0" />
          <img src="/assets/integrations/Gmail.svg" alt="Gmail" className="w-7 h-7 max-w-7 max-h-7 object-contain flex-shrink-0" />
          <img src="/assets/integrations/IMessage_logo.svg.webp" alt="Messages" className="w-7 h-7 max-w-7 max-h-7 object-contain flex-shrink-0" style={{ width: '28px', height: '28px' }} />
        </div>
      ),
      iconLabel: "AI Assistant",
      title: "Get daily agendas and reminders",
      description: "Chat with your AI assistant for personalized scheduling, task management, and academic insights.",
      visual: (
        <div className="relative w-full glass-card rounded-2xl overflow-hidden p-6" style={{ height: '280px' }}>
          <PulseMessageCard animated={true} />
        </div>
      )
    },
    {
      icon: (
        <div className="flex gap-1.5 items-center">
          <img src="/assets/integrations/Gmail.svg" alt="Gmail" className="w-7 h-7 max-w-7 max-h-7 object-contain flex-shrink-0" />
          <img src="/assets/integrations/OutlookMail.svg" alt="Outlook" className="w-7 h-7 max-w-7 max-h-7 object-contain flex-shrink-0" />
        </div>
      ),
      iconLabel: "Email Integration",
      title: "Auto-summarize and draft emails",
      description: "AI automatically summarizes important emails from professors and helps you draft professional responses.",
      visual: (
        <div className="relative w-full glass-card rounded-2xl overflow-hidden" style={{ height: '280px' }}>
          {/* Email compose header */}
          <div className="border-b border-foreground/[0.05] p-4 space-y-3">
            {/* To field */}
            <div className="flex items-center gap-3">
              <span className="text-foreground/60 text-sm font-medium min-w-[60px]">To</span>
              <div className="flex-1 flex flex-wrap gap-2">
                <motion.span
                  className="px-2.5 py-0.5 bg-foreground/[0.04] rounded-md text-xs text-foreground/80 border border-foreground/[0.04]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  professor.smith@university.edu
                </motion.span>
              </div>
            </div>

            {/* Divider line */}
            <div className="h-px bg-foreground/[0.04] -mx-4" />

            {/* Subject field */}
            <div className="flex items-center gap-3">
              <span className="text-foreground/60 text-sm font-medium min-w-[60px]">Subject</span>
              <motion.span
                className="text-sm text-foreground/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Re: Project Deadline Extension Request
              </motion.span>
            </div>
          </div>

          {/* Email body */}
          <div className="p-4 space-y-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="space-y-2"
            >
              <motion.p
                className="text-sm text-foreground/80 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Dear Professor Smith,
              </motion.p>

              <motion.p
                className="text-sm text-foreground/70 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                Thank you for considering my request. I've been working diligently on the machine learning project and have made significant progress on the data preprocessing and model architecture.
              </motion.p>

              <motion.p
                className="text-sm text-foreground/70 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                I would greatly appreciate an extension until next Friday to ensure the quality of my final submission.
              </motion.p>

              <motion.p
                className="text-sm text-foreground/80 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Best regards,<br/>
                Connor
              </motion.p>
            </motion.div>
          </div>

          {/* Status indicator */}
          <div className="absolute bottom-4 right-4">
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-foreground/[0.04] border border-foreground/[0.05] backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Drafting state (shows first, then fades out) */}
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 1, 0] }}
                transition={{ duration: 2, times: [0, 0.7, 1] }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-yellow-400"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: 1,
                    ease: "easeInOut",
                  }}
                />
                <span className="text-xs font-medium text-foreground/70">Drafting...</span>
              </motion.div>

              {/* Drafted state (fades in after) */}
              <motion.div
                className="flex items-center gap-2 absolute right-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 0, 1], scale: [0.8, 0.8, 1] }}
                transition={{ duration: 0.3, delay: 2, times: [0, 0.99, 1] }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-xs font-medium text-foreground/80">Drafted</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
        </div>
      )
    },
    {
      icon: (
        <div className="flex gap-1.5 items-center">
          <Sparkles className="w-7 h-7 text-foreground" />
        </div>
      ),
      iconLabel: "AI Memory",
      title: "Adapts to your habits",
      description: "Sift learns from your work patterns and preferences, automatically adapting your schedule to match when you're most productive.",
      visual: (
        <div className="relative w-full overflow-visible">
          <MemoryCard />
        </div>
      )
    }
  ];

  return (
    <Section id={id} className={`relative py-24 ${className || ''}`}>
      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-6xl font-serif-hero font-normal tracking-tight mb-4"
          >
            Your Day, <span className="italic">Powered</span> by Sift
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            AI-powered scheduling that adapts to your life, helping you stay organized and productive every day.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`glass-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all flex flex-col ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-10 h-10 flex items-center justify-start text-foreground">
                  {feature.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              
              {/* Visual Component */}
              <div className="mb-4">
                {feature.visual}
              </div>
              
              {/* Description - Fixed at bottom */}
              <p className="text-muted-foreground mt-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-rhythm-blue/3 rounded-full"
          style={{
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </Section>
  );
};

export default HowItWorksSection; 