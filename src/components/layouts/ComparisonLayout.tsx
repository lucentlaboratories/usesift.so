import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Container } from '@/components/ui/container';
import { SEOHead } from './SEOHead';
import { Check, X } from 'lucide-react';

interface ComparisonFeature {
  category: string;
  features: Array<{
    name: string;
    Sift: boolean | string;
    competitor: boolean | string;
  }>;
}

interface ComparisonLayoutProps {
  children?: ReactNode;
  title: string;
  description: string;
  competitorName: string;
  competitorLogo?: string;
  heroImage?: string;
  comparisonTable: ComparisonFeature[];
  SiftPrice?: string;
  competitorPrice?: string;
  breadcrumbs: Array<{ label: string; href: string }>;
}

export const ComparisonLayout = ({
  children,
  title,
  description,
  competitorName,
  competitorLogo,
  heroImage,
  comparisonTable,
  SiftPrice = 'Free for students',
  competitorPrice,
  breadcrumbs,
}: ComparisonLayoutProps) => {
  const renderCheckmark = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500" />
      ) : (
        <X className="w-5 h-5 text-muted-foreground/30" />
      );
    }
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <SEOHead title={title} description={description} />

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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif-hero font-normal leading-tight mb-6">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {description}
          </p>

          {/* Competitor Logos */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10">
                <span className="text-2xl font-bold text-primary">PP</span>
              </div>
              <p className="font-semibold">Sift</p>
            </div>

            <div className="text-3xl text-muted-foreground">vs</div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10">
                {competitorLogo ? (
                  <img src={competitorLogo} alt={competitorName} className="w-16 h-16 object-contain" />
                ) : (
                  <span className="text-2xl font-bold text-muted-foreground">
                    {competitorName.slice(0, 2)}
                  </span>
                )}
              </div>
              <p className="font-semibold">{competitorName}</p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Feature Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">
                    <div className="flex flex-col items-center">
                      <span className="text-primary">Sift</span>
                      {SiftPrice && (
                        <span className="text-sm text-muted-foreground font-normal mt-1">
                          {SiftPrice}
                        </span>
                      )}
                    </div>
                  </th>
                  <th className="text-center p-4 font-semibold">
                    <div className="flex flex-col items-center">
                      <span>{competitorName}</span>
                      {competitorPrice && (
                        <span className="text-sm text-muted-foreground font-normal mt-1">
                          {competitorPrice}
                        </span>
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((section, sectionIndex) => (
                  <>
                    <tr key={`category-${sectionIndex}`} className="bg-white/5">
                      <td
                        colSpan={3}
                        className="p-4 font-semibold text-sm uppercase tracking-wider"
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.features.map((feature, featureIndex) => (
                      <tr
                        key={`feature-${sectionIndex}-${featureIndex}`}
                        className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="p-4">{feature.name}</td>
                        <td className="p-4 text-center">{renderCheckmark(feature.Sift)}</td>
                        <td className="p-4 text-center">{renderCheckmark(feature.competitor)}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Content */}
        {children && (
          <div className="prose prose-invert prose-lg max-w-4xl mx-auto mb-16">
            {children}
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to try Sift?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students using AI-powered planning to stay organized and succeed.
          </p>
          <Link
            to="/#download"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
          >
            Get Started Free
          </Link>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
