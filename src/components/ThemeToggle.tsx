import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'system' as const, icon: Monitor, label: 'System' },
    { value: 'light' as const, icon: Sun, label: 'Light' },
    { value: 'dark' as const, icon: Moon, label: 'Dark' },
  ];

  return (
    <div
      className="relative inline-flex items-center"
      role="group"
      aria-label="Theme selector"
    >
      {themes.map(({ value, icon: Icon, label }) => {
        const isActive = theme === value;
        return (
          <motion.button
            key={value}
            onClick={() => setTheme(value)}
            className="relative p-2 rounded-md transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Set theme to ${label}`}
            aria-pressed={isActive}
          >
            <Icon className={`relative w-4 h-4 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`} />
          </motion.button>
        );
      })}
    </div>
  );
}
