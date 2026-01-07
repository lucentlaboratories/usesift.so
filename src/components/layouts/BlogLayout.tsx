import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Container } from '@/components/ui/container';
import { SEOHead } from './SEOHead';

interface BlogLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  category: string;
  tags?: string[];
  readTime?: string;
  breadcrumbs: Array<{ label: string; href: string }>;
  relatedArticles?: Array<{
    title: string;
    href: string;
    description: string;
    image?: string;
  }>;
}

export const BlogLayout = ({
  children,
  title,
  description,
  publishedDate,
  modifiedDate,
  author = 'Sift Team',
  category,
  tags = [],
  readTime,
  breadcrumbs,
  relatedArticles = [],
}: BlogLayoutProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sift',
      logo: {
        '@type': 'ImageObject',
        url: 'https://Sift.app/assets/logo.png',
      },
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': window.location.href,
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={title}
        description={description}
        ogType="article"
        article={{
          publishedTime: publishedDate,
          modifiedTime: modifiedDate,
          author,
          section: category,
          tags,
        }}
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-8 max-w-3xl">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Link
                  to={`/blog/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                >
                  {category}
                </Link>
                {readTime && (
                  <span className="text-sm text-muted-foreground">{readTime} read</span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-hero font-normal leading-tight mb-4 text-foreground">
                {title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{description}</p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>By {author}</span>
                {publishedDate && (
                  <>
                    <span>•</span>
                    <time dateTime={publishedDate}>
                      {new Date(publishedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </>
                )}
              </div>
            </header>

            {/* Article Content */}
            <div className="prose dark:prose-invert prose-lg max-w-none text-foreground">
              {children}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-card/50 text-foreground rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold mb-3">Try Sift Today</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  AI-powered study planning that syncs with Canvas, Google Classroom, and more.
                </p>
                <Link
                  to="/#download"
                  className="block w-full py-2 px-4 bg-primary text-primary-foreground text-center rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get Started Free
                </Link>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((article) => (
                      <Link
                        key={article.href}
                        to={article.href}
                        className="block group"
                      >
                        <div className="p-4 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-colors">
                          <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {article.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
