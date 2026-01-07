import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScrollytellingSection from "@/components/ScrollytellingSection";
import AutomationsSection from "@/components/WorkflowsSection";
import { CTASection } from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/layouts/SEOHead";

const Index = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Sift',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'iOS, Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'AI-powered study planner for students with Canvas and Google Classroom integration. Automatically import assignments, generate study schedules, and build sustainable academic habits.',
    publisher: {
      '@type': 'Organization',
      name: 'Fly on the Wall',
      url: 'https://flyonthewall.xyz',
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Sift - AI-Powered Study Planner for Students"
        description="Sift turns assignments and calendars into an effortless schedule, making you more productive every day. Connect Canvas, Google Classroom, and more. Free forever with intelligent scheduling and study habits."
        structuredData={structuredData}
      />
      <div className="" style={{overflowX: 'hidden', overflowY: 'visible'}}>
        <Navbar />
        <HeroSection />
        <div id="how-it-works"><HowItWorksSection /></div>
        <IntegrationsSection />
        <AutomationsSection />
      </div>
      <ScrollytellingSection />
      <div className="" style={{overflowX: 'hidden', overflowY: 'visible'}}>
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
