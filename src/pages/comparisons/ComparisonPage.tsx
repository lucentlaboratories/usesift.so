import { useParams, Navigate } from 'react-router-dom';
import { ComparisonLayout } from '@/components/layouts/ComparisonLayout';
import { getComparisonBySlug } from '@/data/comparisons';

const ComparisonPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/blog/compare" replace />;
  }

  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    return <Navigate to="/404" replace />;
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Comparisons', href: '/blog/compare' },
    { label: comparison.title, href: `/blog/compare/${slug}` },
  ];

  return (
    <ComparisonLayout
      title={comparison.title}
      description={comparison.description}
      competitorName={comparison.competitorName}
      competitorLogo={comparison.competitorLogo}
      comparisonTable={comparison.comparisonTable}
      SiftPrice={comparison.SiftPrice}
      competitorPrice={comparison.competitorPrice}
      breadcrumbs={breadcrumbs}
    >
      {/* Additional content section */}
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Summary</h2>
          <p className="text-lg text-muted-foreground">{comparison.summary}</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Why Choose Sift?</h2>
          <ul className="space-y-3">
            {comparison.pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <span className="text-lg">{pro}</span>
              </li>
            ))}
          </ul>
        </section>

        {comparison.cons && comparison.cons.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-4">Considerations</h2>
            <ul className="space-y-3">
              {comparison.cons.map((con, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  </div>
                  <span className="text-lg text-muted-foreground">{con}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="text-3xl font-bold mb-4">Who Should Use Sift?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card/50 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Perfect For:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• College students using Canvas or Google Classroom</li>
                <li>• High school students managing multiple AP classes</li>
                <li>• Students looking for free planning tools</li>
                <li>• Anyone who wants AI-powered study scheduling</li>
                <li>• Students who struggle with procrastination</li>
              </ul>
            </div>
            <div className="p-6 bg-card/50 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Consider {comparison.competitorName} If:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• You're a professional, not a student</li>
                <li>• You need enterprise team features</li>
                <li>• Budget isn't a concern</li>
                <li>• You don't use Canvas or Google Classroom</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I switch from {comparison.competitorName} to Sift?</h3>
              <p className="text-muted-foreground">
                Yes! Sift can import your existing tasks and calendar events. The transition is smooth, and since Sift is free, you can try it risk-free alongside {comparison.competitorName}.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Does Sift work on mobile?</h3>
              <p className="text-muted-foreground">
                Yes, Sift has iOS and web apps with full feature parity. Android is coming soon.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How does Sift make money if it's free?</h3>
              <p className="text-muted-foreground">
                Sift is currently free for all students as we build our community. Premium features and institutional plans are coming in the future, but core student features will always remain free.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-lg text-muted-foreground mb-4">
            While {comparison.competitorName} is a solid tool, Sift offers better value for students with direct Canvas integration,
            AI-powered study planning, and a completely free tier. For students managing academic workloads, Sift is the clear choice.
          </p>
          <p className="text-lg font-semibold">
            Try Sift free today and experience AI-powered study planning built specifically for students.
          </p>
        </section>
      </div>
    </ComparisonLayout>
  );
};

export default ComparisonPage;
