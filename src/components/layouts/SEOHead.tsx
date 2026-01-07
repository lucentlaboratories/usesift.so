import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  structuredData?: object;
}

export const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = '/assets/og-image.png',
  ogType = 'website',
  article,
  structuredData,
}: SEOHeadProps) => {
  useEffect(() => {
    // Set document title
    document.title = `${title} | Sift`;

    // Set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = true) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description, false);

    // Open Graph tags
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:type', ogType);
    setMetaTag('og:image', ogImage.startsWith('http') ? ogImage : `https://Sift.app${ogImage}`);
    setMetaTag('og:url', canonical || window.location.href);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image', false);
    setMetaTag('twitter:title', title, false);
    setMetaTag('twitter:description', description, false);
    setMetaTag('twitter:image', ogImage.startsWith('http') ? ogImage : `https://Sift.app${ogImage}`, false);

    // Article-specific tags
    if (article && ogType === 'article') {
      if (article.publishedTime) setMetaTag('article:published_time', article.publishedTime);
      if (article.modifiedTime) setMetaTag('article:modified_time', article.modifiedTime);
      if (article.author) setMetaTag('article:author', article.author);
      if (article.section) setMetaTag('article:section', article.section);
      if (article.tags) {
        article.tags.forEach(tag => {
          const tagElement = document.createElement('meta');
          tagElement.setAttribute('property', 'article:tag');
          tagElement.setAttribute('content', tag);
          document.head.appendChild(tagElement);
        });
      }
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical || window.location.href;

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Optionally remove added tags on unmount
    };
  }, [title, description, canonical, ogImage, ogType, article, structuredData]);

  return null;
};
