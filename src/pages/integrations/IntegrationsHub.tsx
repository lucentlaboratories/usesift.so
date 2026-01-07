import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Container } from '@/components/ui/container';
import { SEOHead } from '@/components/layouts/SEOHead';
import { getAllIntegrations, getIntegrationsByCategory } from '@/data/integrations';
import { Zap, Target, Bot, ChevronRight } from 'lucide-react';

const IntegrationsHub = () => {
  const lmsIntegrations = getIntegrationsByCategory('lms');
  const calendarIntegrations = getIntegrationsByCategory('calendar');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Sift Integrations - Connect Canvas, Google Classroom & More"
        description="Connect Sift with Canvas, Google Classroom, Schoology, Blackboard, Google Calendar, and Outlook. Sync assignments and schedule automatically."
      />

      <Navbar />

      <Container className="pt-40 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif-hero font-normal leading-tight mb-6">Integrations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect Sift with your school's LMS and calendar tools. Automatically import assignments, sync due dates, and let AI build your perfect study schedule.
          </p>
        </div>

        {/* LMS Integrations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Learning Management Systems</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lmsIntegrations.map((integration) => (
              <Link
                key={integration.slug}
                to={`/integrations/${integration.slug}`}
                className="group block"
              >
                <div className="h-full p-8 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-all">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center bg-muted/50 rounded-lg">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {integration.description}
                  </p>
                  <div className="text-primary font-semibold flex items-center gap-2">
                    View Setup Guide
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Calendar Integrations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Calendar Sync</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calendarIntegrations.map((integration) => (
              <Link
                key={integration.slug}
                to={`/integrations/${integration.slug}`}
                className="group block"
              >
                <div className="h-full p-8 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-all">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center bg-muted/50 rounded-lg">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {integration.description}
                  </p>
                  <div className="text-primary font-semibold flex items-center gap-2">
                    View Setup Guide
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-12 rounded-2xl border border-primary/20">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Connect Your Tools?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Zap className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Save Time</h3>
                <p className="text-muted-foreground">
                  No more manual entry. Assignments and events sync automatically.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Target className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Stay Organized</h3>
                <p className="text-muted-foreground">
                  All your deadlines and commitments in one place, intelligently scheduled.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Bot className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
                <p className="text-muted-foreground">
                  Let AI create optimal study schedules based on your actual workload.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 bg-card/50 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Is my data secure?</h3>
              <p className="text-muted-foreground">
                Yes. All integrations use read-only access and encrypted connections. We never store your LMS passwords and only access assignment and calendar data.
              </p>
            </div>

            <div className="p-6 bg-card/50 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Can I connect multiple platforms?</h3>
              <p className="text-muted-foreground">
                Absolutely! Connect Canvas for some classes, Google Classroom for others, plus your calendar tools. Sift intelligently combines everything into one unified schedule.
              </p>
            </div>

            <div className="p-6 bg-card/50 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">How often does Sift sync?</h3>
              <p className="text-muted-foreground">
                Sift automatically syncs every 30 minutes to ensure you always have the latest assignments and updates. You can also manually trigger a sync anytime.
              </p>
            </div>

            <div className="p-6 bg-card/50 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Can I disconnect integrations later?</h3>
              <p className="text-muted-foreground">
                Yes, you can connect or disconnect any integration at any time from Settings. Your existing Sift data remains intact.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/#download"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
          >
            Get Started with Sift
          </Link>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default IntegrationsHub;
