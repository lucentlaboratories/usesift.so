import { useParams, Navigate, Link } from 'react-router-dom';
import { BlogLayout } from '@/components/layouts/BlogLayout';
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blogPosts';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  // Get related articles
  const allPosts = getAllBlogPosts();
  const relatedArticles = post.relatedPosts
    ? post.relatedPosts
        .map(relatedSlug => allPosts.find(p => p.slug === relatedSlug))
        .filter((p): p is typeof allPosts[0] => p !== undefined)
        .slice(0, 3)
        .map(p => ({
          title: p.title,
          href: `/blog/${p.slug}`,
          description: p.description,
        }))
    : [];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), href: `/blog/${post.category}` },
    { label: post.title, href: `/blog/${slug}` },
  ];

  return (
    <BlogLayout
      title={post.title}
      description={post.description}
      publishedDate={post.publishedDate}
      modifiedDate={post.modifiedDate}
      author={post.author}
      category={post.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
      tags={post.tags}
      readTime={post.readTime}
      breadcrumbs={breadcrumbs}
      relatedArticles={relatedArticles}
    >
      {/* Render article content */}
      <MarkdownRenderer content={post.content} />

      {/* Internal linking - related content */}
      <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
        <h3 className="text-2xl font-semibold mb-4">Continue Reading</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/blog/compare" className="block p-4 bg-card/50 rounded-lg hover:bg-card/80 transition-colors">
            <h4 className="font-semibold mb-2">Sift Comparisons</h4>
            <p className="text-sm text-muted-foreground">
              See how Sift stacks up against Motion, Shovel, and Notion
            </p>
          </Link>
          <Link to="/integrations" className="block p-4 bg-card/50 rounded-lg hover:bg-card/80 transition-colors">
            <h4 className="font-semibold mb-2">Integration Guides</h4>
            <p className="text-sm text-muted-foreground">
              Connect Canvas, Google Classroom, and more
            </p>
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogPost;
