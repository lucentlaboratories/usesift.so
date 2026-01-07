import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Container } from '@/components/ui/container';
import { SEOHead } from '@/components/layouts/SEOHead';
import { getAllBlogPosts, getFeaturedBlogPosts } from '@/data/blogPosts';
import { GraduationCap, BookOpen, Bot, Scale, DollarSign, Lightbulb } from 'lucide-react';

const BlogHub = () => {
  const featuredPosts = getFeaturedBlogPosts();
  const allPosts = getAllBlogPosts();

  const categories = [
    {
      name: 'College',
      slug: 'college',
      description: 'Study planning guides, tips, and tools for college students',
      icon: GraduationCap,
      gradient: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))',
    },
    {
      name: 'High School',
      slug: 'high-school',
      description: 'Organization strategies and planners for high school students',
      icon: BookOpen,
      gradient: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.05))',
    },
    {
      name: 'AI Study Apps',
      slug: 'ai-study',
      description: 'AI-powered learning tools and study technology',
      icon: Bot,
      gradient: 'linear-gradient(to bottom right, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.05))',
    },
    {
      name: 'Comparisons',
      slug: 'compare',
      description: 'Compare Sift with other planning tools',
      icon: Scale,
      gradient: 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.2), rgba(249, 115, 22, 0.05))',
    },
    {
      name: 'Pricing Guides',
      slug: 'pricing',
      description: 'Cost breakdowns and pricing comparisons',
      icon: DollarSign,
      gradient: 'linear-gradient(to bottom right, rgba(234, 179, 8, 0.2), rgba(234, 179, 8, 0.05))',
    },
    {
      name: 'Study Tips',
      slug: 'study-tips',
      description: 'Proven study strategies and productivity techniques',
      icon: Lightbulb,
      gradient: 'linear-gradient(to bottom right, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.05))',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Sift Blog - Student Planning Tips & Guides"
        description="Expert guides on study planning, Canvas integration, AI productivity tools, and academic success strategies for college and high school students."
      />

      <Navbar />

      <Container className="pt-40 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif-hero font-normal leading-tight mb-6">Sift Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert guides, comparisons, and tips to help you master study planning with AI-powered tools
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif-hero font-bold mb-8 text-foreground">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="h-full p-6 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/20 text-primary rounded-full">
                        {post.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="text-sm text-muted-foreground">
                      {post.publishedDate && new Date(post.publishedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Category Grid */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif-hero font-bold mb-8 text-foreground">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/blog/${category.slug}`}
                className="group block"
              >
                <div 
                  className="h-full p-8 rounded-lg border border-border hover:border-primary/50 transition-all"
                  style={{ background: category.gradient }}
                >
                  <div className="mb-4">
                    <category.icon className="w-10 h-10 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section>
          <h2 className="text-3xl md:text-4xl font-serif-hero font-bold mb-8 text-foreground">All Articles</h2>
          <div className="space-y-6">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="p-6 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/20 text-primary rounded-full">
                        {post.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {post.publishedDate && new Date(post.publishedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </Container>

      <Footer />
    </div>
  );
};

export default BlogHub;
