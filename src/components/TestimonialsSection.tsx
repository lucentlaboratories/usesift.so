import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { fadeInUp, staggerContainer } from "@/lib/animation-configs";

const testimonials = [
  {
    quote: "Sift has transformed my coursework. The AI understands my patterns and actually helps me stick to a schedule.",
    author: "Ronan Healy",
    role: "Biology Student",
    university: "CU Boulder"
  },
  {
    quote: "Canvas integration saves me hours each week. It's like having a personal assistant for school.",
    author: "Tyler Riley",
    role: "Pre-Law Student",
    university: "LSU"
  },
  {
    quote: "The insights feature is incredible. I can see where my time goes, and my GPA has improved a lot.",
    author: "Walker Adams",
    role: "Finance Student",
    university: "CSU"
  },
  {
    quote: "Sift's reminders and analytics keep me on track. Study sessions are now way more productive.",
    author: "Alex Collard",
    role: "Political Science Student",
    university: "Nebraska"
  }
];

const TestimonialsSection = () => {
  return (
    <Section className="relative py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-6xl font-serif-hero font-normal tracking-tight mb-4"
          >
            <span className="italic">Loved</span> by students everywhere
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            See real user stories from students who transformed their academic lives.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                university={testimonial.university}
                withAnimatedLines
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-rhythm-blue/3 rounded-full"
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
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-rhythm-coral/3 rounded-full"
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

export default TestimonialsSection;
