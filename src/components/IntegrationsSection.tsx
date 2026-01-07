import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation-configs";

const integrations = [
  // Email
  {
    name: "Gmail",
    logo: "/assets/integrations/Gmail.svg",
    category: "Email",
    status: "available"
  },
  {
    name: "Outlook Mail",
    logo: "/assets/integrations/OutlookMail.svg",
    category: "Email",
    status: "available"
  },

  // Calendar
  {
    name: "Google Calendar",
    logo: "/assets/integrations/googlecalendar.png",
    category: "Calendar",
    status: "available"
  },
  {
    name: "Outlook Calendar",
    logo: "/assets/integrations/OutlookCalendar.svg",
    category: "Calendar",
    status: "available"
  },
  {
    name: "Apple Calendar",
    logo: "/assets/integrations/AppleCalendar.svg",
    category: "Calendar",
    status: "coming-soon"
  },

  // Productivity
  {
    name: "Canvas",
    logo: "/assets/integrations/canvas.png",
    category: "Productivity",
    status: "available"
  },
  {
    name: "Notion",
    logo: "/assets/integrations/Notion.svg",
    category: "Productivity",
    status: "coming-soon"
  },
  {
    name: "Reminders",
    logo: "/assets/integrations/AppleReminders.svg",
    category: "Productivity",
    status: "available"
  },

  // Messaging & Contacts
  {
    name: "Messages",
    logo: "/assets/integrations/IMessage_logo.svg.webp",
    category: "Messaging & Contacts",
    status: "available"
  },
  {
    name: "Apple Contacts",
    logo: "/assets/integrations/AppleContacts.svg",
    category: "Messaging & Contacts",
    status: "coming-soon"
  },
];

const IntegrationsSection = () => {
  return (
    <Section id="integrations" className="py-24">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-6xl font-serif-hero font-normal tracking-tight"
          >
            Connect <span className="italic">all</span> your apps
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-muted-foreground"
          >
            Sift connects with the tools you already use to streamline
            your academic life. No more context switching.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
        >
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`glass-card flex items-center justify-center h-32 rounded-xl ${
                integration.status === 'coming-soon' ? 'opacity-60' : ''
              } transition-all duration-200 hover:shadow-xl`}
            >
              <img 
                src={integration.logo} 
                alt={integration.name} 
                className="max-h-16 w-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default IntegrationsSection; 
