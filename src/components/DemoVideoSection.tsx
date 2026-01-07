import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const DemoVideoSection = () => {
  return (
    <Section className="relative py-24">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-5xl sm:text-6xl lg:text-6xl font-serif-hero font-normal tracking-tight mb-4 text-foreground">
            See Sift in <span className="italic">Action</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Watch how Sift's AI seamlessly integrates with your academic life, automatically creating an optimal schedule from your Canvas assignments.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="lg:order-1">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    </div>
                    <p className="text-foreground/60">
                      Auto-sync assignments and deadlines from Canvas
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    </div>
                    <p className="text-foreground/60">
                      AI creates personalized study blocks based on your energy levels
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    </div>
                    <p className="text-foreground/60">
                      Get daily briefings and smart recommendations
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Video */}
              <div className="lg:order-2">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-foreground/10">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-foreground/5 to-foreground/10">
                    <div className="text-center">
                      <div className="w-20 h-20 border-4 border-foreground/20 border-t-foreground rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-foreground/60 text-lg">Demo Video</p>
                      <p className="text-foreground/40 text-sm mt-2">Coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Subtle background elements - Optimized static version */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-rhythm-blue/3 rounded-full"
          style={{
            filter: "blur(80px)",
            transform: "translateZ(0)",
          }}
        />
      </div>
    </Section>
  );
};

export default DemoVideoSection;


