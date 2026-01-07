import React from 'react';
import { motion } from 'framer-motion';
import { PulseTrace } from '@/components/ui/pulse-trace';

const MemoryCard = () => {
  const preferences = [
    { text: "Morning energy: low", position: { top: '8px', left: '8px' } },
    { text: "Goes to the gym at 7pm", position: { top: '8px', right: '8px' } },
    { text: "High workload on Tue / Thu", position: { bottom: '8px', left: '8px' } },
  ];

  // Rough clip paths for organic, hand-drawn look with more irregular edges
  const roughClipPath1 = 'polygon(0% 3%, 1% 0%, 3% 1%, 97% 0%, 99% 2%, 100% 5%, 98% 98%, 96% 100%, 2% 100%, 0% 97%)';
  const roughClipPath2 = 'polygon(2% 0%, 4% 1%, 98% 0%, 100% 3%, 99% 96%, 97% 100%, 1% 99%, 0% 97%, 1% 3%)';

  return (
    <div className="relative w-full glass-card rounded-2xl overflow-visible p-6" style={{ height: '280px', minHeight: '280px' }}>
      {/* AI Message */}
      <div className="relative z-10 flex gap-3 mt-6">
        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1" style={{ overflow: 'visible' }}>
          <PulseTrace active={false} width={24} height={24} />
        </div>
        <div className="flex-1">
          <div className="text-sm leading-relaxed text-foreground whitespace-pre-wrap break-words">
            <span className="text-foreground/90">I know you like hanging out with friends on </span>
            <motion.span
              className="relative inline-block px-1.5 py-0.5"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.4) 100%)',
                clipPath: roughClipPath1,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-foreground font-medium">Friday nights</span>
            </motion.span>
            <span className="text-foreground/90">, so I front-loaded your heavier assignments earlier in the week to keep your evenings free.</span>
            <br /><br />
            <span className="text-foreground/90">You're most productive in the </span>
            <motion.span
              className="relative inline-block px-1.5 py-0.5"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.4) 100%)',
                clipPath: roughClipPath2,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-foreground font-medium">after classes</span>
            </motion.span>
            <span className="text-foreground/90">, so I scheduled your tougher sessions then and saved lighter review tasks for your slower evenings.</span>
          </div>
        </div>
      </div>

      {/* Floating Preference Badges */}
      {preferences.map((pref, index) => (
        <motion.div
          key={index}
          className="absolute z-20 px-3 py-1.5 rounded-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/15 shadow-lg"
          style={pref.position}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -5, 0],
          }}
          transition={{
            delay: 0.7 + index * 0.2,
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <span className="text-xs font-medium text-foreground/90">{pref.text}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default MemoryCard;

