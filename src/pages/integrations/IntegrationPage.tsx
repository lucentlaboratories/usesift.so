import { useParams, Navigate } from 'react-router-dom';
import { IntegrationLayout } from '@/components/layouts/IntegrationLayout';
import { getIntegrationBySlug } from '@/data/integrations';
import { Check } from 'lucide-react';

const IntegrationPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/integrations" replace />;
  }

  const integration = getIntegrationBySlug(slug);

  if (!integration) {
    return <Navigate to="/404" replace />;
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Integrations', href: '/integrations' },
    { label: integration.name, href: `/integrations/${slug}` },
  ];

  return (
    <IntegrationLayout
      title={integration.title}
      description={integration.description}
      integrationName={integration.name}
      integrationLogo={integration.logo}
      steps={integration.steps}
      benefits={integration.benefits}
      breadcrumbs={breadcrumbs}
    >
      {/* FAQ Section */}
      {integration.faq && integration.faq.length > 0 && (
        <div id="faq" className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {integration.faq.map((item, index) => (
              <div key={index} className="p-6 bg-card/50 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Troubleshooting Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Troubleshooting</h2>
        <div className="space-y-6">
          <div className="p-6 bg-card/50 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Connection Failed?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-muted-foreground leading-relaxed">Double-check that you copied the entire token/URL</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-muted-foreground leading-relaxed">Ensure your {integration.name} account has the necessary permissions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-muted-foreground leading-relaxed">Try disconnecting and reconnecting the integration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-muted-foreground leading-relaxed">Clear your browser cache and try again</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-card/50 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Assignments Not Syncing?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-muted-foreground leading-relaxed">Wait up to 30 minutes for the first sync to complete</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-muted-foreground leading-relaxed">Check that you've selected the correct courses to sync</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-muted-foreground leading-relaxed">Verify that assignments are published in {integration.name}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-muted-foreground leading-relaxed">Manually trigger a sync from Settings &gt; Integrations</span>
              </li>
            </ul>
          </div>

          <div 
            className="p-8 rounded-lg border border-border"
            style={{ background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))' }}
          >
            <h3 className="text-xl font-semibold mb-3 text-foreground">Still Need Help?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our support team is here to assist you with any integration issues.
            </p>
            <a
              href="mailto:support@Sift.app"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </IntegrationLayout>
  );
};

export default IntegrationPage;
