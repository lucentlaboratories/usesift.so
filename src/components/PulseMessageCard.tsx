import React, { useState, useEffect } from 'react';
import { PulseTrace } from '@/components/ui/pulse-trace';
import { motion, AnimatePresence } from 'framer-motion';

interface PulseMessageCardProps {
  message?: string;
  animated?: boolean;
}

function PulseMessageCard({
  message,
  animated = false
}: PulseMessageCardProps) {
  const agendas = [
    `Good morning! Here's your agenda:

**Today's Focus**
• Machine Learning Project - 2hr block at 9am
• Calculus study session - 10am
• Literature essay draft - 2pm

You have 3 tasks due this week. Let's crush it!`,
    `Hey there! Your day at a glance:

**Upcoming Deadlines**
• Physics Lab Report - Due tomorrow
• CS 4700 Project - Due Dec 24
• MATH 2400 Problem Set - Due Dec 25

Tip: Start with the Physics lab today to stay ahead!`,
    `Happy Monday! Here's what's on deck:

**Weekly Overview**
• 4 assignments synced from Canvas
• 2 exams next week
• Study blocks scheduled for peak focus hours

Remember: You've got this!`
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const currentMessage = animated ? agendas[currentIndex] : (message || agendas[0]);

  useEffect(() => {
    if (!animated) {
      setDisplayedText(currentMessage);
      return;
    }

    setIsTyping(true);
    setDisplayedText('');
    let currentChar = 0;

    const typingInterval = setInterval(() => {
      if (currentChar <= currentMessage.length) {
        setDisplayedText(currentMessage.slice(0, currentChar));
        currentChar++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);

        // Wait 3 seconds before rotating to next message
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % agendas.length);
        }, 3000);
      }
    }, 20); // Faster typing speed

    return () => clearInterval(typingInterval);
  }, [currentIndex, animated, currentMessage, agendas.length]);

  const formattedMessage = displayedText.split('\n').map((line, index) => {
    // Handle markdown-style bold
    const parts = line.split(/(\*\*.*?\*\*)/g);
    const isEmpty = line.trim() === '';

    return (
      <div
        key={index}
        className={isEmpty ? 'h-2' : ''}
      >
        {parts.map((part, partIndex) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={partIndex} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
          }
          return <span key={partIndex} className="text-foreground/90">{part}</span>;
        })}
      </div>
    );
  });

  return (
    <div className="w-full">
      <div className="flex gap-3">
        <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 ${!isTyping || !animated ? 'mt-1' : ''}`} style={{ overflow: 'visible' }}>
          <PulseTrace active={isTyping && animated} width={24} height={24} />
        </div>
        <div className="flex-1">
          <div className="text-sm leading-relaxed text-foreground whitespace-pre-wrap break-words">
            {formattedMessage}
            {isTyping && animated && (
              <motion.span
                className="inline-block w-1.5 h-4 bg-foreground/80 ml-0.5"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PulseMessageCard;




