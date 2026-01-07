// Content type definitions for SEO pages

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: 'high-school' | 'college' | 'ai-study' | 'compare' | 'pricing' | 'study-tips';
  tags: string[];
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  readTime: string;
  featured?: boolean;
  relatedPosts?: string[]; // slugs of related posts
  ogImage?: string;
}

export interface Integration {
  slug: string;
  name: string;
  title: string;
  description: string;
  logo: string;
  category: 'lms' | 'calendar' | 'other';
  steps: IntegrationStep[];
  benefits: string[];
  faq?: FAQItem[];
}

export interface IntegrationStep {
  title: string;
  description: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Comparison {
  slug: string;
  title: string;
  description: string;
  competitorName: string;
  competitorLogo?: string;
  comparisonTable: ComparisonFeature[];
  SiftPrice: string;
  competitorPrice: string;
  summary: string;
  pros: string[];
  cons: string[];
}

export interface ComparisonFeature {
  category: string;
  features: Array<{
    name: string;
    Sift: boolean | string;
    competitor: boolean | string;
  }>;
}

export interface Template {
  slug: string;
  title: string;
  description: string;
  type: 'rhythm' | 'automation';
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeRequired: string;
  tags: string[];
  steps?: string[];
  usageCount?: number;
  rating?: number;
  author?: string;
  image?: string;
}

export interface Feature {
  slug: string;
  title: string;
  description: string;
  icon?: string;
  benefits: string[];
  useCases: Array<{
    title: string;
    description: string;
    image?: string;
  }>;
  relatedFeatures?: string[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
