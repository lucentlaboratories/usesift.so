import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const PhoneMockup = ({ activeSection }: { activeSection: number }) => {
  const screenshots = [
    "/assets/demo1.png", // Text Pulse
    "/assets/demo2.png", // Call Pulse  
    "/assets/demo3.png", // Email Pulse
    "/assets/demo1.png"  // Slack Pulse (reusing demo1 since we only have 3 screenshots)
  ];

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {screenshots.map((screenshot, index) => 
          index === activeSection && (
            <motion.img
              key={`${screenshot}-${index}`}
              src={screenshot}
              alt={`Demo screenshot ${index + 1}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="max-w-sm w-full h-auto object-contain shadow-2xl rounded-3xl will-change-transform"
              style={{
                maxWidth: '320px',
                height: 'auto'
              }}
            />
          )
        )}
      </AnimatePresence>
    </div>
  );
};

export const ScrollytellingSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollTriggerRef.current) return;
      
      const rect = scrollTriggerRef.current.getBoundingClientRect();
      // Only start activation when we're inside the section (rect.top < window.innerHeight)
      // Text Pulse starts immediately when entering the section
      if (rect.top < window.innerHeight) {
        const sectionHeight = rect.height - window.innerHeight;
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / sectionHeight));
        
        // Calculate which section should be active based on scroll progress
        // Each section gets a longer scroll distance
        const sectionCount = 4;
        const sectionIndex = Math.floor(scrollProgress * sectionCount);
        const clampedIndex = Math.max(0, Math.min(sectionCount - 1, sectionIndex));
        
        setActiveSection(clampedIndex);
      } else {
        // Reset to first section when not in view
        setActiveSection(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative bg-background"
      style={{ height: '800vh' }} // 8x viewport height for much longer scroll distance per section
    >
      {/* Sticky content container - only sticks within this section */}
      <div 
        className="sticky top-0 h-screen flex items-center justify-center z-10"
        style={{ pointerEvents: 'none' }}
      >
        <div className="max-w-4xl mx-auto px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* Left Column - Fixed Text Content */}
            <div className="text-center lg:text-left">
              <h2 
                className="text-4xl lg:text-5xl font-semibold mb-6 transition-all duration-500 ease-out"
                style={{ 
                  color: activeSection === 0 ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                  opacity: activeSection === 0 ? 1 : 0.3,
                  transform: activeSection === 0 ? 'scale(1)' : 'scale(0.95)',
                  letterSpacing: '-0.01em'
                }}
              >
                AI overview.
              </h2>
              <h2 
                className="text-4xl lg:text-5xl font-semibold mb-6 transition-all duration-500 ease-out"
                style={{ 
                  color: activeSection === 1 ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                  opacity: activeSection === 1 ? 1 : 0.3,
                  transform: activeSection === 1 ? 'scale(1)' : 'scale(0.95)',
                  letterSpacing: '-0.01em'
                }}
              >
                Time-block your day.
              </h2>
              <h2 
                className="text-4xl lg:text-5xl font-semibold mb-6 transition-all duration-500 ease-out"
                style={{ 
                  color: activeSection === 2 ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                  opacity: activeSection === 2 ? 1 : 0.3,
                  transform: activeSection === 2 ? 'scale(1)' : 'scale(0.95)',
                  letterSpacing: '-0.01em'
                }}
              >
                Daily briefings.
              </h2>
              <h2 
                className="text-4xl lg:text-5xl font-semibold mb-6 transition-all duration-500 ease-out"
                style={{ 
                  color: activeSection === 3 ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                  opacity: activeSection === 3 ? 1 : 0.3,
                  transform: activeSection === 3 ? 'scale(1)' : 'scale(0.95)',
                  letterSpacing: '-0.01em'
                }}
              >
                AI-powered reminders.
              </h2>
              
              <div className="mt-12" style={{ pointerEvents: 'auto' }}>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="w-fit bg-rhythm-blue text-white hover:bg-rhythm-blue/90 text-lg px-8 py-3 rounded-full font-semibold"
                >
                  Try it now!
                </Button>
              </div>
            </div>
            
            {/* Right Column - Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <PhoneMockup activeSection={activeSection} />
            </div>
          </div>
        </div>
      </div>

      {/* Invisible scroll trigger - spans the full height */}
      <div 
        ref={scrollTriggerRef}
        className="absolute inset-0 w-full"
        style={{ height: '800vh' }}
      />
    </div>
  );
};

export default ScrollytellingSection;