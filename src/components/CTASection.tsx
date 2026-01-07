import React from 'react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PulseTrace } from '@/components/ui/pulse-trace';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { 
  fadeInUp, 
  staggerContainer, 
  hoverScale, 
  tapScale, 
  viewportConfig 
} from '@/lib/animation-configs';

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

export const CTASection = () => {
  return (
    <Section className="relative py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={viewportConfig}
          className="max-w-4xl mx-auto text-center"
        >
          {/* PulseTrace Animation */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <PulseTrace 
                active={true}
                width={200}
                height={200}
                className="drop-shadow-2xl"
              />
              
              {/* Background glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl animate-pulse" />
              </div>
            </div>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif-hero font-normal tracking-tight leading-tight mb-6"
          >
            Get Organized, <span className="italic">Automatically</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Join thousands of students who let Sift organize their academic life.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={hoverScale}
              whileTap={tapScale}
            >
              <Button size="lg" className="bg-foreground dark:bg-foreground text-background dark:text-background hover:bg-foreground/90 dark:hover:bg-foreground/90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                <AppleLogo className="w-6 h-6 mr-2" />
                Download the App
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={hoverScale}
              whileTap={tapScale}
            >
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl bg-white/80 dark:bg-transparent backdrop-blur-sm hover:bg-white dark:hover:bg-foreground/10 text-foreground border-foreground/10 dark:border-foreground/20 shadow-sm hover:shadow-md transition-all duration-200">
                Try It Free
              </Button>
            </motion.div>
          </motion.div>
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
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rhythm-coral/3 rounded-full"
          style={{
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </Section>
  );
}; 