import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Container } from "@/components/ui/container";
import { HomePageCardsPreview } from "@/components/ui/home-page-cards-preview";
import { ArrowRight, ChevronRight, Play, ArrowUp } from "lucide-react";
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

const demoImages = [
  `/assets/demo1.png?v=${CACHE_BUST}`,
  `/assets/demo2.png?v=${CACHE_BUST}`,
  `/assets/demo3.png?v=${CACHE_BUST}`
];

const aiPrompts = [
  {
    icon: <img src="/assets/integrations/AppleCalendar.svg" alt="Apple Calendar" className="w-5 h-5" />,
    prompt: "Show me my schedule for tomorrow"
  },
  {
    icon: <img src="/assets/integrations/Gmail.svg" alt="Gmail" className="w-5 h-5" />,
    prompt: "Email Ronan my chemistry notes"
  },
  {
    icon: <img src="/assets/integrations/canvas.png" alt="Canvas" className="w-5 h-5 object-contain" />,
    prompt: "Fetch this week's assignments"
  },
  {
    icon: <img src="/assets/integrations/GoogleDocs.svg" alt="Google" className="w-5 h-5" />,
    prompt: "Block time for my chemistry lab report"
  },
  {
    icon: <img src="/assets/integrations/Notion.svg" alt="Notion" className="w-5 h-5" />,
    prompt: "Create a study plan for finals week"
  },
  {
    icon: <img src="/assets/logo.png" alt="Sift" className="w-6 h-6" />,
    prompt: "Make me a schedule for the next 2 weeks"
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
              <button className="w-8 h-8 bg-foreground dark:bg-foreground rounded-full flex items-center justify-center hover:bg-foreground/90 dark:hover:bg-foreground/90 transition-colors">
                <ArrowUp className="w-4 h-4 text-background dark:text-background" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { theme } = useTheme();
  const [schoolFolder, setSchoolFolder] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % demoImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 md:pt-8 pb-24">
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
                The AI-powered planner <span className="italic">built</span> for {" "}
                <span className="italic">students</span>.
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

            {/* Home Page Cards Preview - Moved outside animation container, after buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative mb-12"
              style={{
                height: '400px',
                width: '100%'
              }}
            >
              <div className="hidden md:block">
                <HomePageCardsPreview className="absolute inset-0" />
              </div>
              {/* Mobile version - more subtle */}
              <div className="md:hidden">
                <HomePageCardsPreview className="absolute inset-0 scale-75" />
              </div>
            </motion.div>

            {/* Main content container continued */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="will-change-transform relative z-10"
            >
              {/* Trust indicators */}
              <motion.div
                variants={fadeInUp}
                className="text-center w-full"
              >
                <p className="text-sm text-muted-foreground mb-4">Trusted by students at</p>
                <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
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
                </div>
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
    </section>
  );
};

export default HeroSection;

