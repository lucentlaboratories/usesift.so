import React from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, BookOpen, Plus, ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface HomePageCardsPreviewProps {
  className?: string;
}

export const HomePageCardsPreview = ({ className = "" }: HomePageCardsPreviewProps) => {
  const todos = [
    { id: 1, text: "Get groceries", completed: true },
    { id: 2, text: "Study for Chemistry final", completed: false },
    { id: 3, text: "Do laundry", completed: false },
  ];

  const assignments = [
    { id: 1, text: "Machine Learning Report", due: "Due Dec 24" },
    { id: 2, text: "Calculus Problem Set", due: "Due Dec 25" },
    { id: 3, text: "Literature Essay", due: "Due Dec 26" },
  ];

  const exams = [
    { id: 1, text: "Final Exam - Chemistry", date: "Dec 28 • 2:00 PM" },
    { id: 2, text: "Midterm - Physics", date: "Jan 5 • 10:00 AM" },
  ];

  const days = [
    { name: "Tue", date: 26 },
    { name: "Wed", date: 27 },
    { name: "Thu", date: 28 },
    { name: "Fri", date: 29 },
    { name: "Sat", date: 30 },
  ];

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Organic floating card constellation */}
      <div className="relative w-full h-full flex items-center justify-center" style={{ paddingTop: '280px' }}>
        {/* Card E - To-Dos Card (Background, Top Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.1 },
          }}
          className="absolute w-80 md:w-96"
          style={{
            left: "0%",
            top: "30%",
            zIndex: 1,
          }}
        >
          <div className="w-full max-w-[480px] bg-card border border-border rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">To-dos</h2>
              <div className="flex items-center gap-2">
                <button className="hover:bg-muted p-1.5 rounded-md transition-all duration-200 hover:scale-105 active:scale-95">
                  <Plus className="w-4 h-4 text-foreground" />
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-muted rounded-md transition-all duration-200">
                  <span className="text-sm text-foreground font-medium">Active</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Todo List */}
            <div className="space-y-2.5">
              {todos.map((todo) => (
                <div key={todo.id} className="flex items-center gap-3.5 group hover:bg-muted/30 -mx-2 px-2 py-2 rounded-lg transition-all duration-200">
                  <Checkbox
                    checked={todo.completed}
                    className="data-[state=checked]:bg-muted data-[state=checked]:border-muted border-border transition-all duration-200"
                  />
                  <span
                    className={`flex-1 text-sm transition-all duration-200 ${
                      todo.completed ? "text-muted-foreground line-through" : "text-foreground group-hover:text-foreground/90"
                    }`}
                  >
                    {todo.text}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 shadow-sm ring-2 ring-green-500/20" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card C - Assignments Card (Upper Center) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
          }}
          className="absolute w-80 md:w-96"
          style={{
            left: "30%",
            top: "0%",
            zIndex: 2,
          }}
        >
          <div className="w-full max-w-[480px] bg-card border border-border rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Assignments</h2>
              <div className="flex items-center gap-2">
                <button className="hover:bg-muted p-1.5 rounded-md transition-all duration-200 hover:scale-105 active:scale-95">
                  <Plus className="w-4 h-4 text-foreground" />
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-muted rounded-md transition-all duration-200">
                  <span className="text-sm text-foreground font-medium">Active</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Assignment List */}
            <div className="space-y-3.5">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center gap-3.5 group hover:bg-muted/30 -mx-2 px-2 py-2 rounded-lg transition-all duration-200">
                  <Checkbox
                    checked={false}
                    className="data-[state=checked]:bg-muted data-[state=checked]:border-muted border-border transition-all duration-200"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-sm text-foreground group-hover:text-foreground/90 transition-all duration-200">
                      {assignment.text}
                    </span>
                    <div className="text-xs text-muted-foreground mt-0.5">{assignment.due}</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-rhythm-blue flex-shrink-0 shadow-sm ring-2 ring-rhythm-blue/20" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card D - Exams Card (Lower Right - Behind To-Dos) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.35 },
          }}
          className="absolute w-80 md:w-96"
          style={{
            left: "25%",
            top: "72%",
            zIndex: 3,
          }}
        >
          <div className="w-full max-w-[480px] bg-card border border-border rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Upcoming Exams</h2>
              <div className="flex items-center gap-2">
                <button className="hover:bg-muted p-1.5 rounded-md transition-all duration-200 hover:scale-105 active:scale-95">
                  <Plus className="w-4 h-4 text-foreground" />
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-muted rounded-md transition-all duration-200">
                  <span className="text-sm text-foreground font-medium">Active</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Exam List */}
            <div className="space-y-3.5">
              {exams.map((exam) => (
                <div key={exam.id} className="flex items-center gap-3.5 group hover:bg-muted/30 -mx-2 px-2 py-2 rounded-lg transition-all duration-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-rhythm-blue flex-shrink-0 shadow-sm ring-2 ring-rhythm-blue/20" />
                  <div className="flex-1 min-w-0">
                    <span className="text-sm text-foreground group-hover:text-foreground/90 transition-all duration-200">
                      {exam.text}
                    </span>
                    <div className="text-xs text-muted-foreground mt-0.5">{exam.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card A - Calendar Card (Upper Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.4 },
          }}
          className="absolute w-80 md:w-96"
          style={{
            right: "-5%",
            top: "20%",
            zIndex: 4,
          }}
        >
          <div className="w-full max-w-[380px] bg-card border border-border rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-3.5">
              <h2 className="text-lg font-semibold text-foreground">Calendar</h2>
            </div>

            {/* Account Selector */}
            <button className="flex items-center gap-2.5 w-full p-2.5 hover:bg-muted/50 rounded-lg transition-all duration-200 mb-3.5 border border-transparent hover:border-border/50">
              <div className="w-5 h-5 flex items-center justify-center rounded-sm shadow-sm overflow-hidden">
                <img src="/assets/integrations/googlecalendar.png" alt="Google" className="w-5 h-5 object-contain" />
              </div>
              <span className="text-sm text-foreground flex-1 text-left font-medium">student@university.edu</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-y-0.5" />
            </button>

            {/* Calendar Grid */}
            <div className="space-y-3">
              {/* Days Header */}
              <div className="grid grid-cols-5 gap-2 pb-2.5 border-b border-border/50">
                {days.map((day) => (
                  <div key={day.date} className="text-center hover:bg-muted/30 rounded-md py-1.5 transition-colors duration-200">
                    <div className="text-xs text-muted-foreground mb-1 font-medium">{day.name}</div>
                    <div className="text-sm text-foreground font-semibold">{day.date}</div>
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              <div className="space-y-2.5">
                {/* 12PM Slot with Event */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-12 font-medium">12PM</span>
                  <div className="flex-1">
                    <div className="bg-rhythm-blue/20 border-l-[3px] border-rhythm-blue rounded-lg p-2.5 shadow-sm hover:shadow-md hover:bg-rhythm-blue/30 transition-all duration-200 hover:translate-x-0.5">
                      <div className="text-sm text-foreground font-semibold mb-0.5">
                        Study Group - Chemistry Review
                      </div>
                      <div className="text-xs text-muted-foreground truncate font-medium">
                        Library Room 204
                      </div>
                    </div>
                  </div>
                </div>

                {/* 1PM Slot */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-12 font-medium">1PM</span>
                  <div className="flex-1 h-8"></div>
                </div>

                {/* 2PM Slot with Event */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-12 font-medium">2PM</span>
                  <div className="flex-1">
                    <div className="bg-rhythm-blue/20 border-l-[3px] border-rhythm-blue rounded-lg p-2.5 shadow-sm hover:shadow-md hover:bg-rhythm-blue/30 transition-all duration-200 hover:translate-x-0.5">
                      <div className="text-sm text-foreground font-semibold mb-0.5">
                        Office Hours - Prof. Smith
                      </div>
                      <div className="text-xs text-muted-foreground truncate font-medium">
                        Engineering Building 301
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subtle glow effects with Sift blue */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.02, 0.04, 0.02]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(76, 131, 255, 0.08)' }}
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.02, 0.04, 0.02]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(76, 131, 255, 0.06)' }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
