import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Container } from '@/components/ui/container';
import { SEOHead } from './SEOHead';
import { ChevronRight, Check } from 'lucide-react';

interface IntegrationStep {
  title: string;
  description: string;
  image?: string;
}

interface IntegrationLayoutProps {
  children?: ReactNode;
  title: string;
  description: string;
  integrationName: string;
  integrationLogo?: string;
  steps: IntegrationStep[];
  benefits?: string[];
  breadcrumbs: Array<{ label: string; href: string }>;
}

export const IntegrationLayout = ({
  children,
  title,
  description,
  integrationName,
  integrationLogo,
  steps,
  benefits = [],
  breadcrumbs,
}: IntegrationLayoutProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      image: step.image,
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={title}
        description={description}
        structuredData={structuredData}
      />

      <Navbar />

      <Container className="pt-40 pb-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.href} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-foreground">{crumb.label}</span>
              ) : (
                <Link to={crumb.href} className="hover:text-foreground transition-colors">
                  {crumb.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          {integrationLogo && (
            <div className="flex justify-center mb-6">
              <img
                src={integrationLogo}
                alt={integrationName}
                className="h-20 w-20 object-contain"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-hero font-normal leading-tight mb-6">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Benefits */}
            {benefits.length > 0 && (
              <div 
                className="mb-12 p-8 rounded-lg border border-border"
                style={{ background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))' }}
              >
                <h2 className="text-2xl font-bold mb-6 text-foreground">Why Connect {integrationName}?</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/30">
                        <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                      </div>
                      <span className="text-foreground leading-relaxed flex-1">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Step-by-Step Guide */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Step-by-Step Setup</h2>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex gap-6">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                          <span className="text-xl font-bold text-primary">{index + 1}</span>
                        </div>
                        {index < steps.length - 1 && (
                          <div className="w-0.5 h-full bg-border mx-auto mt-2" />
                        )}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 pb-8">
                        <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        {step.image && (
                          <div className="rounded-lg overflow-hidden border border-border">
                            <img
                              src={step.image}
                              alt={`Step ${index + 1}: ${step.title}`}
                              className="w-full"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Content */}
            {children && (
              <div className="prose prose-invert prose-lg max-w-none">
                {children}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Quick Links */}
              <div className="p-6 bg-card/50 rounded-lg border border-border">
                <h3 className="font-semibold mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  <a
                    href="#benefits"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Why Connect?
                  </a>
                  <a
                    href="#steps"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Setup Steps
                  </a>
                  {children && (
                    <a
                      href="#faq"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      FAQ
                    </a>
                  )}
                </nav>
              </div>

              {/* CTA */}
              <div 
                className="p-6 rounded-lg border border-border"
                style={{ background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))' }}
              >
                <h3 className="text-lg font-bold mb-3 text-foreground">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our team is here to help you get connected.
                </p>
                <a
                  href="mailto:support@Sift.app"
                  className="block w-full py-2 px-4 bg-primary text-primary-foreground text-center rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm"
                >
                  Contact Support
                </a>
              </div>

              {/* Other Integrations */}
              <div className="p-6 bg-card/50 rounded-lg border border-border">
                <h3 className="font-semibold mb-4">Other Integrations</h3>
                <div className="space-y-2">
                  <Link
                    to="/integrations/canvas"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Canvas
                  </Link>
                  <Link
                    to="/integrations/google-classroom"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Google Classroom
                  </Link>
                  <Link
                    to="/integrations/schoology"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Schoology
                  </Link>
                  <Link
                    to="/integrations"
                    className="block text-sm text-primary hover:underline mt-3"
                  >
                    View all integrations <ChevronRight className="w-4 h-4 inline" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
