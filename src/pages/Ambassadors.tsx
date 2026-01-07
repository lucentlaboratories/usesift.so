import React from 'react';
import { Users, Gift, Megaphone, Unlock, ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { hoverScale, tapScale } from '@/lib/animation-configs';

const Ambassador = () => {
  const valueCards = [
    {
      icon: Gift,
      title: "Lifetime Premium Access",
      description: "No limits, ever."
    },
    {
      icon: Megaphone,
      title: "Shoutouts on our socials & site",
      description: "Get featured across our platforms."
    },
    {
      icon: Unlock,
      title: "Early access to new features",
      description: "Beta test features & give feedback."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Apply using the Notion form",
      description: "Fill out our quick application form"
    },
    {
      number: "2",
      title: "Make a story post or campus share",
      description: "Share Sift with your student networks"
    },
    {
      number: "3",
      title: "Get verified & unlock Premium for life",
      description: "Submit proof and enjoy lifetime access"
    }
  ];

  const faqs = [
    {
      question: "Can I apply even if I'm not super active on social media?",
      answer: "Yes! If you're passionate about helping students stay on top of their schedules, we want you."
    },
    {
      question: "How do I prove I shared it?",
      answer: "Submit a screenshot after your post. We'll follow up via email."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-40 pb-24">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-serif-hero font-normal tracking-tight mb-4">
                Become a Sift Ambassador
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Share the tool you love, earn lifetime access, and help students take back their time.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="text-center mb-16">
              <h2 className="text-5xl sm:text-6xl lg:text-6xl font-serif-hero font-normal tracking-tight mb-4">
                What You Get
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                Join our ambassador program and unlock exclusive benefits
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {valueCards.map((card, index) => (
                  <motion.div
                    key={index}
                    whileHover={hoverScale}
                    whileTap={tapScale}
                    className="will-change-transform"
                  >
                    <div className="glass-card p-8 rounded-2xl text-center h-full flex flex-col">
                      <div className="w-16 h-16 mx-auto mb-4 bg-rhythm-blue rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <card.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground flex-shrink-0">{card.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{card.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <motion.div
                whileHover={hoverScale}
                whileTap={tapScale}
                className="will-change-transform"
              >
                <Button
                  asChild
                  className="bg-rhythm-blue text-white px-10 py-5 text-xl rounded-xl font-semibold hover:bg-rhythm-blue/90 transition-colors duration-200"
                >
                  <a href="https://www.notion.so/connergroth/2036b20844a880f7a065cc060a0014e3?pvs=106" target="_blank" rel="noopener noreferrer">
                    Apply Now
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What You'll Do Section */}
      <Section className="py-24">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif-hero font-normal tracking-tight mb-4">
                What You'll Do
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your role as an ambassador
              </p>
            </div>

            <div className="space-y-3 max-w-4xl mx-auto">
              {[
                "Share Sift in your school's private Snapchat story or other student networks",
                "Help us test features & give feedback",
                "Spread the word to friends and orgs"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={hoverScale}
                  whileTap={tapScale}
                  className="will-change-transform"
                >
                  <div className="flex items-center gap-4 p-6 glass-card rounded-2xl">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="py-24">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif-hero font-normal tracking-tight mb-4">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get started in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={hoverScale}
                  whileTap={tapScale}
                  className="will-change-transform text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 glass-card rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-rhythm-blue">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs Section */}
      <Section className="py-24">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif-hero font-normal tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about the program
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  whileHover={hoverScale}
                  whileTap={tapScale}
                  className="will-change-transform"
                >
                  <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section className="py-24">
        <Container>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-serif-hero font-normal tracking-tight mb-6">
              Ready to <span className="italic">join the team?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Start your journey as a Sift Ambassador today.
            </p>
            <motion.div
              whileHover={hoverScale}
              whileTap={tapScale}
              className="will-change-transform"
            >
              <Button
                asChild
                className="bg-rhythm-blue text-white hover:bg-rhythm-blue/90 text-lg px-8 py-6 rounded-xl font-semibold transition-colors duration-200"
              >
                <a href="https://www.notion.so/connergroth/2036b20844a880f7a065cc060a00144e3?pvs=106" target="_blank" rel="noopener noreferrer">
                  Apply to be an Ambassador
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Ambassador; 