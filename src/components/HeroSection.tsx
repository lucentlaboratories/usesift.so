import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Container } from "@/components/ui/container";
import { ArrowRight, ArrowUp, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import {
  fadeInUp,
  fadeInScale,
  staggerContainer,
  hoverScale,
  tapScale,
  viewportConfig,
  backgroundFloat
} from "@/lib/animation-configs";

const AppleLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.47-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.89 3.51-.84 1.54.07 2.7.61 3.44 1.57-3.14 1.88-2.29 5.13.22 6.41-.65 1.29-1.52 2.58-2.25 4.03zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

// Cache-busting timestamp for demo images
const CACHE_BUST = new Date().toISOString().slice(0, 16).replace(/[-:T]/g, '');

const aiPrompts = [
  {
    icon: (
      <div className="flex items-center gap-1.5">
        <img src="/assets/integrations/AppleCalendar.svg" alt="Apple Calendar" className="w-5 h-5" />
        <img src="/assets/integrations/canvas.png" alt="Canvas" className="w-5 h-5 object-contain" />
      </div>
    ),
    prompt: "Plan my day."
  },
  {
    icon: (
      <div className="flex items-center gap-1.5">
        <img src="/assets/integrations/Gmail.svg" alt="Gmail" className="w-5 h-5" />
        <img src="/assets/integrations/AppleCalendar.svg" alt="Apple Calendar" className="w-5 h-5" />
      </div>
    ),
    prompt: "Email me my daily agenda every morning at 7."
  },
  {
    icon: (
      <div className="flex items-center gap-1.5">
        <img src="/assets/integrations/canvas.png" alt="Canvas" className="w-5 h-5 object-contain" />
      </div>
    ),
    prompt: "What assignments do I need to work on today?"
  },
  {
    icon: (
      <div className="flex items-center gap-1.5">
        <img src="/assets/integrations/canvas.png" alt="Canvas" className="w-5 h-5 object-contain" />
        <img src="/assets/integrations/Notion.svg" alt="Notion" className="w-5 h-5" />
      </div>
    ),
    prompt: "Make a study plan for my upcoming exams."
  },
  {
    icon: (
      <div className="flex items-center gap-1.5">
        <img src="/assets/integrations/canvas.png" alt="Canvas" className="w-5 h-5 object-contain" />
        <img src="/assets/integrations/AppleCalendar.svg" alt="Apple Calendar" className="w-5 h-5" />
      </div>
    ),
    prompt: "Schedule time to finish my Chemistry lab report."
  },
  {
    icon: (
      <div className="flex items-center gap-1.5">
        <img src="/assets/integrations/IMessage_logo.svg.webp" alt="Messages" className="w-5 h-5 object-contain" />
      </div>
    ),
    prompt: "Text me at 8 to start studying."
  },
  {
    icon: (
      <div className="flex items-center gap-1.5">
        <img src="/assets/integrations/canvas.png" alt="Canvas" className="w-5 h-5 object-contain" />
        <img src="/assets/integrations/AppleCalendar.svg" alt="Apple Calendar" className="w-5 h-5" />
      </div>
    ),
    prompt: "Break down my calculus exam into study blocks."
  },
  {
    icon: (
      <div className="flex items-center gap-1.5">
        <img src="/assets/integrations/canvas.png" alt="Canvas" className="w-5 h-5 object-contain" />
        <img src="/assets/integrations/AppleCalendar.svg" alt="Apple Calendar" className="w-5 h-5" />
      </div>
    ),
    prompt: "Create a weekend study plan I can actually stick to."
  },
  {
    icon: (
      <div className="flex items-center gap-1.5">
        <img src="/assets/integrations/canvas.png" alt="Canvas" className="w-5 h-5 object-contain" />
        <img src="/assets/integrations/AppleCalendar.svg" alt="Apple Calendar" className="w-5 h-5" />
      </div>
    ),
    prompt: "Help me prioritize everything I need to get done today."
  },
  {
    icon: (
      <div className="flex items-center gap-1.5">
        <img src="/assets/integrations/AppleReminders.svg" alt="Apple Reminders" className="w-5 h-5" />
        <img src="/assets/integrations/IMessage_logo.svg.webp" alt="Messages" className="w-5 h-5 object-contain" />
      </div>
    ),
    prompt: "Remind me to submit my essay tonight at 11."
  },
  {
    icon: (
      <div className="flex items-center gap-1.5">
        <img src="/assets/integrations/Gmail.svg" alt="Gmail" className="w-5 h-5" />
      </div>
    ),
    prompt: "Email my professor asking for a deadline extension."
  },
];

export const PremiumAIPromptBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aiPrompts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentPrompt = aiPrompts[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      <div 
        className="glass-card relative overflow-hidden rounded-2xl shadow-lg mx-auto w-full md:w-[600px] md:min-w-[600px] md:max-w-[600px]"
        style={{
          height: '60px',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center h-full px-4 gap-3"
          >
            <div className="flex-shrink-0">
              {currentPrompt.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-foreground text-base font-medium">"{currentPrompt.prompt}"</p>
            </div>
            <div className="flex-shrink-0">
              <button className="w-8 h-8 bg-blue-500 dark:bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors">
                <ArrowUp className="w-4 h-4 text-white dark:text-white" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const { theme } = useTheme();
  const [schoolFolder, setSchoolFolder] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Determine actual theme (resolve 'system' to light/dark)
    const getActualTheme = () => {
      if (theme === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return theme;
    };

    const actualTheme = getActualTheme();
    // Use "dark" folder for light theme (dark logos on light background)
    // Use "light" folder for dark theme (light logos on dark background)
    setSchoolFolder(actualTheme === 'light' ? 'dark' : 'light');

    // Listen for system theme changes when theme is 'system'
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const newActualTheme = mediaQuery.matches ? 'dark' : 'light';
        setSchoolFolder(newActualTheme === 'light' ? 'dark' : 'light');
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  // Get school logos based on folder (different filenames in each folder)
  const getSchoolLogos = (folder: 'light' | 'dark') => {
    if (folder === 'light') {
      // Light folder has avif files and cu logo
      return [
        '/assets/schools/light/DLQWmdHOYfO0KE7DeJTqFqIUuqo.avif',
        '/assets/schools/light/L804UiGWv4yV0G7vJFUUYuTXrs.avif',
        '/assets/schools/light/nV5cyrKVFT9bcWJF5mZB6xwqymI.avif',
        '/assets/schools/light/OWtmSDnigjKFe7QgpHYdVkCqJyg.avif',
        '/assets/schools/light/QlIQCVLrVq0orvpYiNtTnzXEvQ.avif',
        '/assets/schools/light/cu_logo_white_text_transparent.png',
      ];
    } else {
      // Dark folder has SVG files
      return [
        '/assets/schools/dark/stanford.svg',
        '/assets/schools/dark/berkeley.svg',
        '/assets/schools/dark/harvard.svg',
        '/assets/schools/dark/princeton.svg',
        '/assets/schools/dark/yale.svg',
        '/assets/schools/dark/University_of_Colorado_at_Boulder_-_Wordmark.png',
      ];
    }
  };

  const schoolLogos = getSchoolLogos(schoolFolder);

  const features = [
    { text: "no manual scheduling", icon: X },
    { text: "no calendar conflicts", icon: X },
    { text: "automatic time blocking", icon: Check },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero Content Section */}
      <div className="relative pt-10 md:pt-8 pb-12">
        <Container className="relative z-10">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <div className="w-full relative">
              {/* Main content container with optimized staggered animation */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="will-change-transform relative z-10 mt-24 md:mt-32"
              >
                {/* Main heading */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif-hero font-normal leading-tight mb-6 will-change-transform relative z-10"
                >
                  Your academic life, organized <span className="italic">automatically</span>.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
                >
                  Sift turns assignments and calendars into an effortless schedule, making you more productive every day.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  variants={fadeInUp}
                  className="will-change-transform mb-8"
                >
                  <ButtonGroup className="justify-center gap-4">
                    <motion.div
                      whileHover={hoverScale}
                      whileTap={tapScale}
                      className="will-change-transform"
                    >
                      <Button
                        size="lg"
                        className="bg-foreground dark:bg-foreground text-background dark:text-background hover:bg-foreground/90 dark:hover:bg-foreground/90 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        <AppleLogo />Download the App
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={hoverScale}
                      whileTap={tapScale}
                      className="will-change-transform"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/80 dark:bg-transparent backdrop-blur-sm hover:bg-white dark:hover:bg-foreground/10 text-foreground border-foreground/10 dark:border-foreground/20 shadow-sm hover:shadow-md text-lg px-8 py-4 rounded-xl transition-all duration-200"
                      >
                        Try It Free
                      </Button>
                    </motion.div>
                  </ButtonGroup>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
        
        {/* Optimized background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            variants={backgroundFloat}
            animate="float"
            className="absolute top-1/2 left-1/4 w-64 h-64 bg-rhythm-blue/3 rounded-full will-change-transform"
            style={{
              filter: "blur(40px)",
              transform: "translateZ(0)",
            }}
          />
          <motion.div 
            variants={backgroundFloat}
            animate="float"
            className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-rhythm-blue/3 rounded-full will-change-transform"
            style={{
              filter: "blur(40px)", 
              transform: "translateZ(0)",
              animationDelay: "2s",
            }}
          />
        </div>
      </div>

      {/* AI Prompt Bar - Above the blue card */}
      <div className="relative -mt-8 mb-8">
        <Container>
          <PremiumAIPromptBar />
        </Container>
      </div>

      {/* Large Blue Feature Card */}
      <div className="relative mt-16">
        <Container className="max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-rhythm-blue rounded-3xl pt-2 pr-2 pb-2 pl-8 md:pt-3 md:pr-3 md:pb-3 md:pl-12 lg:pt-4 lg:pr-4 lg:pb-4 lg:pl-16 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6 lg:gap-8 h-full min-h-[600px]">
              {/* Left Side - Information and Bullets (1/4 width) */}
              <div className="flex flex-col justify-start h-full pt-8 md:pt-12 lg:pt-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif-hero font-normal text-white mb-4 leading-tight">
                  Automate your schedule, focus on your work
                </h2>
                <p className="text-sm md:text-base text-white/90 mb-6 leading-relaxed">
                  Sift automatically schedules your assignments, blocks time for your tasks, and syncs with your calendar—so you can focus on what matters instead of planning.
                </p>
                
                {/* Feature List */}
                <div className="mt-auto space-y-3">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          feature.icon === Check 
                            ? 'bg-white/20 text-white' 
                            : 'bg-white/10 text-white/70'
                        }`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-white/90">
                          {feature.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side - Demo Video (3/4 width) */}
              <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-rhythm-blue/20 to-rhythm-blue/10 flex items-center justify-center">
                    {/* Placeholder for video - you can replace with actual video element */}
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-white/80 text-sm">Live Demo Video</p>
                    </div>
                    {/* Uncomment and add your video here:
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-xl"
                    >
                      <source src="/path/to/demo-video.mp4" type="video/mp4" />
                    </video>
                    */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Trust indicators - Below the large card */}
      <div className="relative pt-24 pb-16">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center w-full"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm text-muted-foreground mb-4"
            >
              Trusted by students at
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="relative w-full max-w-6xl mx-auto overflow-hidden"
            >
              {/* Left fade gradient */}
              <div
                className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.8) 40%, hsl(var(--background) / 0.4) 70%, transparent 100%)'
                }}
              />

              {/* Right fade gradient */}
              <div
                className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to left, hsl(var(--background)) 0%, hsl(var(--background) / 0.8) 40%, hsl(var(--background) / 0.4) 70%, transparent 100%)'
                }}
              />
              
              {/* Carousel container */}
              <div className="flex items-center gap-12 animate-scroll">
                {/* First set of images */}
                {schoolLogos.map((src, index) => {
                  const isBerkeley = src.includes('berkeley') || src.includes('L804UiGWv4yV0G7vJFUUYuTXrs');
                  const isSmaller = src.includes('QlIQCVLrVq0orvpYiNtTnzXEvQ') || src.includes('yale');
                  const isCU = src.includes('cu_logo') || src.includes('University_of_Colorado');
                  return (
                    <div
                      key={`first-${index}`}
                      className="flex-shrink-0 flex items-center justify-center h-12 opacity-60"
                    >
                      <img
                        src={src}
                        alt={`School ${index + 1}`}
                        className={`h-full w-auto object-contain ${
                          isBerkeley 
                            ? 'max-w-[160px] scale-110' 
                            : isSmaller || isCU
                            ? 'max-w-[120px] scale-90' 
                            : 'max-w-[140px]'
                        }`}
                        loading="lazy"
                      />
                    </div>
                  );
                })}
                
                {/* Duplicate set for seamless infinite loop */}
                {schoolLogos.map((src, index) => {
                  const isBerkeley = src.includes('berkeley') || src.includes('L804UiGWv4yV0G7vJFUUYuTXrs');
                  const isSmaller = src.includes('QlIQCVLrVq0orvpYiNtTnzXEvQ') || src.includes('yale');
                  const isCU = src.includes('cu_logo') || src.includes('University_of_Colorado');
                  return (
                    <div
                      key={`second-${index}`}
                      className="flex-shrink-0 flex items-center justify-center h-12 opacity-60"
                    >
                      <img
                        src={src}
                        alt={`School ${index + 1}`}
                        className={`h-full w-auto object-contain ${
                          isBerkeley 
                            ? 'max-w-[160px] scale-110' 
                            : isSmaller || isCU
                            ? 'max-w-[120px] scale-90' 
                            : 'max-w-[140px]'
                        }`}
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
