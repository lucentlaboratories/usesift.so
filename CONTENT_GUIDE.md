# Sift Content Addition Guide

Quick reference for adding new SEO content to Sift.

---

## 📝 Adding a New Blog Post

### 1. Add to Data File

Edit `src/data/blogPosts.ts`:

```typescript
export const blogPosts: Record<string, BlogPost> = {
  // ... existing posts

  "your-new-post-slug": {
    slug: "your-new-post-slug",
    title: "Your SEO-Optimized Title",
    description: "Meta description (150-160 characters)",
    content: `Full article content here...

## Use Markdown Headers

Write your content with **full markdown support** using [react-markdown](https://github.com/remarkjs/react-markdown).

### Supported Markdown Features

- ✅ **Bold text** with double asterisks
- ✅ *Italic text* with single asterisks
- ✅ \`inline code\` with backticks
- ✅ [Links](https://example.com) to other pages
- ✅ All heading levels (H1-H6)
- ✅ Ordered and unordered lists
- ✅ Tables with GFM syntax
- ✅ Blockquotes
- ✅ Code blocks with syntax highlighting

\`\`\`javascript
// Code blocks work great
const example = "with syntax highlighting";
\`\`\`

> Blockquotes look professional

| Feature | Supported |
|---------|-----------|
| Tables  | ✅ Yes    |
| Images  | ✅ Yes    |`,
    category: "college", // or 'high-school', 'ai-study', 'compare', 'pricing', 'study-tips'
    tags: ["tag1", "tag2", "tag3"],
    author: "Sift Team",
    publishedDate: "2025-01-20",
    readTime: "8 min",
    featured: false, // set to true to show on homepage
    relatedPosts: ["other-post-slug", "another-post-slug"],
  },
};
```

### 2. Access Your Post

- **URL**: `/blog/your-new-post-slug`
- Automatically gets SEO meta tags, breadcrumbs, and layout

---

## ⚖️ Adding a New Comparison Page

### 1. Add to Comparisons Data

Edit `src/data/comparisons.ts`:

```typescript
export const comparisons: Record<string, Comparison> = {
  // ... existing comparisons

  "Sift-vs-competitor": {
    slug: "Sift-vs-competitor",
    title: "Sift vs Competitor: Which is Best? (2025)",
    description: "Compare Sift and Competitor side-by-side...",
    competitorName: "Competitor Name",
    competitorLogo: "/assets/competitor-logo.png", // optional
    SiftPrice: "Free for students",
    competitorPrice: "$X/month",
    summary: "Write a summary paragraph comparing the two...",
    pros: [
      "Reason 1 to choose Sift",
      "Reason 2 to choose Sift",
      "Reason 3 to choose Sift",
    ],
    cons: ["Consideration 1", "Consideration 2"],
    comparisonTable: [
      {
        category: "Pricing & Access",
        features: [
          { name: "Free tier", Sift: true, competitor: false },
          { name: "Student discount", Sift: "Free", competitor: "$X/month" },
          { name: "No credit card", Sift: true, competitor: false },
        ],
      },
      {
        category: "Features",
        features: [
          { name: "Canvas integration", Sift: true, competitor: false },
          { name: "AI scheduling", Sift: true, competitor: true },
          { name: "Custom feature", Sift: "Advanced", competitor: "Basic" },
        ],
      },
      // Add more categories as needed
    ],
  },
};
```

### 2. Access Your Comparison

- **URL**: `/blog/compare/Sift-vs-competitor`
- Automatically renders with Ellie-style layout, feature tables, and CTAs

---

## 🔗 Adding a New Integration Guide

### 1. Add to Integrations Data

Edit `src/data/integrations.ts`:

```typescript
export const integrations: Record<string, Integration> = {
  // ... existing integrations

  "new-platform": {
    slug: "new-platform",
    name: "Platform Name",
    title: "How to Connect Platform Name to Sift",
    description: "Step-by-step guide to syncing Platform Name with Sift...",
    logo: "/assets/integrations/platform-logo.png",
    category: "lms", // or 'calendar' or 'other'
    benefits: [
      "Benefit 1 of this integration",
      "Benefit 2 of this integration",
      "Benefit 3 of this integration",
    ],
    steps: [
      {
        title: "Step 1: Open Settings",
        description:
          "Navigate to Settings > Integrations and find Platform Name",
        image: "/assets/guides/platform-step1.png", // optional
      },
      {
        title: "Step 2: Connect Account",
        description: "Click Connect and sign in with your Platform account",
      },
      // Add more steps
    ],
    faq: [
      {
        question: "Is my data secure?",
        answer: "Yes, we use encrypted read-only access...",
      },
      {
        question: "How often does it sync?",
        answer: "Every 30 minutes automatically...",
      },
    ],
  },
};
```

### 2. Access Your Integration Guide

- **URL**: `/integrations/new-platform`
- Automatically renders with step-by-step layout, FAQ, and troubleshooting

---

## 🏷️ Adding Links to Footer

Edit `src/components/Footer.tsx`:

```typescript
const footerLinks = [
  {
    title: "Your Section",
    links: [
      {
        name: "Link Text",
        href: "/path/to/page",
        isRouterLink: true,
        scrollToTop: true,
      },
      // More links...
    ],
  },
  // ... other sections
];
```

---

## 📋 Content Checklist

When adding new content, ensure:

### For All Pages

- [ ] SEO-optimized title (50-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] Clear, benefit-focused copy
- [ ] Internal links to related Sift pages
- [ ] Call-to-action (CTA) to download/try Sift

### For Blog Posts

- [ ] Proper heading hierarchy (H2 → H3 → H4)
- [ ] Keyword placement in title, intro, headers
- [ ] 2000+ words for pillar pages
- [ ] Related posts configured
- [ ] Publish date and read time
- [ ] Tags for categorization

### For Comparison Pages

- [ ] Detailed feature comparison table
- [ ] Honest pros and cons
- [ ] Clear pricing information
- [ ] Use cases / target audience
- [ ] FAQ section
- [ ] "Why choose Sift" section

### For Integration Guides

- [ ] Step-by-step instructions (4-6 steps)
- [ ] Benefits list (3-6 items)
- [ ] Screenshots (recommended)
- [ ] FAQ section
- [ ] Troubleshooting section

---

## 🎯 SEO Best Practices

### Keyword Research

- Use Google Keyword Planner or Ahrefs
- Target long-tail keywords (3-5 words)
- Check competitor rankings
- Include location if relevant

### On-Page SEO

- **Title Tag**: Primary keyword near the beginning
- **H1**: Match or closely match title tag
- **H2/H3**: Include related keywords naturally
- **First Paragraph**: Include primary keyword in first 100 words
- **Meta Description**: Include keyword + call-to-action

### Internal Linking

- Link to pillar pages from supporting posts
- Link to comparison pages from blog posts
- Link to integration guides when mentioning platforms
- Link to About page when explaining features
- Use descriptive anchor text (avoid "click here")

### External Linking

- Link to authoritative sources for claims/statistics
- Link to official platform documentation
- Open external links in new tab (`target="_blank"`)
- Use `rel="noopener noreferrer"` for security

---

## 🚀 Quick Start Examples

### Example: New Blog Post

```bash
# 1. Add to src/data/blogPosts.ts
# 2. Navigate to http://localhost:5173/blog/your-slug
# 3. Verify rendering and SEO tags
```

### Example: New Comparison

```bash
# 1. Add to src/data/comparisons.ts
# 2. Navigate to http://localhost:5173/blog/compare/your-slug
# 3. Check comparison table displays correctly
```

### Example: New Integration

```bash
# 1. Add to src/data/integrations.ts
# 2. Navigate to http://localhost:5173/integrations/your-slug
# 3. Verify steps render with proper numbering
```

---

## 📊 Content Priority

Based on SEO value, prioritize creating:

1. **Comparison Pages** (Highest conversion)

   - Sift vs [major competitors]
   - [Competitor] Alternatives

2. **Integration Guides** (Fast ranking + high intent)

   - Major LMS platforms
   - Popular calendar apps

3. **Pillar Pages** (Authority building)

   - College Study Planner
   - High School Study Planner
   - AI Study Apps

4. **Supporting Posts** (Long-tail traffic)

   - How-to guides
   - Best app roundups
   - Study tips

5. **Pricing Pages** (Low competition)
   - How much does [tool] cost?
   - Pricing comparisons

---

## 🔍 Testing Your Content

Before publishing:

1. **Preview locally**: `npm run dev`
2. **Check SEO tags**: View page source, verify meta tags
3. **Test responsiveness**: Mobile, tablet, desktop
4. **Validate links**: All internal links work
5. **Spell check**: No typos or grammar errors
6. **Build test**: `npm run build` succeeds

---

## 📈 After Publishing

1. Submit URL to Google Search Console
2. Share on social media (check OpenGraph preview)
3. Add to sitemap.xml
4. Monitor rankings in first week
5. Update internal links from related content
6. Track analytics (page views, time on page, conversions)

---

That's it! The system is designed to make adding new content as simple as editing a TypeScript file. 🚀
