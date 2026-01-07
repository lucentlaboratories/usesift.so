import { Comparison } from '@/types/content';

export const comparisons: Record<string, Comparison> = {
  'Sift-vs-shovel': {
    slug: 'Sift-vs-shovel',
    title: 'Sift vs Shovel: Which Student Planner is Best in 2025?',
    description: 'Compare Sift and Shovel side-by-side. Discover which AI-powered student planner offers better features, pricing, and Canvas integration for your academic success.',
    competitorName: 'Shovel',
    SiftPrice: 'Free for students',
    competitorPrice: '$10/month',
    summary: 'Both Sift and Shovel are AI-powered student planners, but they differ significantly in approach. Sift focuses on adaptive daily rhythms and deep LMS integration, while Shovel emphasizes task management and motivation.',
    pros: [
      'Free for students vs Shovel\'s $10/month',
      'Direct Canvas API integration with assignment breakdown',
      'AI-powered adaptive scheduling that learns your patterns',
      'Daily Rhythms for sustainable study habits',
      'Community-driven automations library',
    ],
    cons: [
      'Newer platform with growing feature set',
      'Currently iOS and web only (Android coming soon)',
    ],
    comparisonTable: [
      {
        category: 'Pricing & Access',
        features: [
          { name: 'Free tier', Sift: true, competitor: false },
          { name: 'Student pricing', Sift: 'Free', competitor: '$10/month' },
          { name: 'No credit card required', Sift: true, competitor: false },
        ],
      },
      {
        category: 'LMS Integration',
        features: [
          { name: 'Canvas integration', Sift: true, competitor: 'Limited' },
          { name: 'Google Classroom sync', Sift: true, competitor: true },
          { name: 'Auto assignment breakdown', Sift: true, competitor: false },
          { name: 'Syllabus parsing', Sift: true, competitor: false },
          { name: 'Grade tracking', Sift: true, competitor: false },
        ],
      },
      {
        category: 'AI Features',
        features: [
          { name: 'AI study plan generation', Sift: true, competitor: true },
          { name: 'Adaptive scheduling', Sift: true, competitor: false },
          { name: 'Exam preparation timeline', Sift: true, competitor: true },
          { name: 'Assignment time estimation', Sift: true, competitor: 'Manual' },
        ],
      },
      {
        category: 'Study Features',
        features: [
          { name: 'Daily Rhythms', Sift: true, competitor: false },
          { name: 'Custom automations', Sift: true, competitor: 'Limited' },
          { name: 'Study habit tracking', Sift: true, competitor: true },
          { name: 'Focus mode', Sift: true, competitor: true },
          { name: 'Template library', Sift: 'Community-driven', competitor: 'Pre-made' },
        ],
      },
      {
        category: 'Platform Support',
        features: [
          { name: 'iOS app', Sift: true, competitor: true },
          { name: 'Android app', Sift: 'Coming soon', competitor: true },
          { name: 'Web app', Sift: true, competitor: true },
          { name: 'Desktop app', Sift: false, competitor: false },
        ],
      },
    ],
  },

  'Sift-vs-motion': {
    slug: 'Sift-vs-motion',
    title: 'Sift vs Motion: Best AI Planner for Students 2025',
    description: 'Detailed comparison of Sift vs Motion. See which AI scheduling tool better serves student needs with Canvas integration, pricing, and study-specific features.',
    competitorName: 'Motion',
    SiftPrice: 'Free for students',
    competitorPrice: '$34/month ($19/month for students)',
    summary: 'Motion is a powerful AI scheduler built for professionals, while Sift is designed specifically for students with deep academic integration. Motion costs significantly more and lacks student-specific features like Canvas sync and assignment breakdown.',
    pros: [
      'Built specifically for students, not professionals',
      'Free vs Motion\'s $19-34/month',
      'Canvas and LMS integration',
      'Study-specific features like exam prep timelines',
      'Community templates for academic automations',
    ],
    cons: [
      'Fewer enterprise/team features',
      'Newer platform compared to Motion',
    ],
    comparisonTable: [
      {
        category: 'Pricing',
        features: [
          { name: 'Monthly price', Sift: 'Free', competitor: '$34/month' },
          { name: 'Student discount', Sift: 'Free', competitor: '$19/month' },
          { name: 'Free trial', Sift: 'Unlimited', competitor: '7 days' },
        ],
      },
      {
        category: 'Student Features',
        features: [
          { name: 'Canvas integration', Sift: true, competitor: false },
          { name: 'Google Classroom sync', Sift: true, competitor: false },
          { name: 'Assignment breakdown', Sift: true, competitor: false },
          { name: 'Exam prep timelines', Sift: true, competitor: false },
          { name: 'Grade tracking', Sift: true, competitor: false },
          { name: 'Study templates', Sift: true, competitor: false },
        ],
      },
      {
        category: 'AI Scheduling',
        features: [
          { name: 'Auto-scheduling', Sift: true, competitor: true },
          { name: 'Adaptive learning', Sift: true, competitor: true },
          { name: 'Smart rescheduling', Sift: true, competitor: true },
          { name: 'Priority management', Sift: true, competitor: true },
        ],
      },
      {
        category: 'Calendar',
        features: [
          { name: 'Google Calendar sync', Sift: true, competitor: true },
          { name: 'Outlook sync', Sift: true, competitor: true },
          { name: 'Apple Calendar sync', Sift: true, competitor: true },
          { name: 'Multi-calendar view', Sift: true, competitor: true },
        ],
      },
      {
        category: 'Collaboration',
        features: [
          { name: 'Team features', Sift: 'Coming soon', competitor: true },
          { name: 'Study group coordination', Sift: true, competitor: false },
          { name: 'Template sharing', Sift: true, competitor: false },
        ],
      },
    ],
  },

  'Sift-vs-notion': {
    slug: 'Sift-vs-notion',
    title: 'Sift vs Notion AI: Better Study Planner for 2025?',
    description: 'Compare Sift and Notion AI for student planning. Learn which tool offers better academic organization, Canvas integration, and AI-powered study features.',
    competitorName: 'Notion AI',
    SiftPrice: 'Free for students',
    competitorPrice: 'Free + $10/month for AI',
    summary: 'Notion is a flexible workspace tool, while Sift is a purpose-built student planner. Notion requires extensive setup and lacks direct LMS integration, whereas Sift works out of the box with Canvas and Google Classroom.',
    pros: [
      'No setup required - works immediately',
      'Direct Canvas and LMS integration',
      'AI built specifically for student scheduling',
      'Automatic assignment breakdown and time blocking',
      'Study-optimized templates included',
    ],
    cons: [
      'Less flexible than Notion for non-academic use',
      'Fewer customization options for workspace layout',
    ],
    comparisonTable: [
      {
        category: 'Pricing',
        features: [
          { name: 'Base price', Sift: 'Free', competitor: 'Free' },
          { name: 'AI features price', Sift: 'Included', competitor: '+$10/month' },
          { name: 'Student discount', Sift: 'Free', competitor: 'Free base' },
        ],
      },
      {
        category: 'Academic Integration',
        features: [
          { name: 'Canvas integration', Sift: true, competitor: false },
          { name: 'Google Classroom', Sift: true, competitor: false },
          { name: 'Assignment import', Sift: 'Automatic', competitor: 'Manual' },
          { name: 'Syllabus parsing', Sift: true, competitor: false },
          { name: 'Grade tracking', Sift: true, competitor: 'Manual setup' },
        ],
      },
      {
        category: 'Setup & Ease of Use',
        features: [
          { name: 'Ready to use', Sift: 'Immediate', competitor: 'Requires setup' },
          { name: 'Pre-built templates', Sift: true, competitor: 'Community templates' },
          { name: 'Learning curve', Sift: 'Low', competitor: 'Moderate-High' },
        ],
      },
      {
        category: 'AI Capabilities',
        features: [
          { name: 'AI study planning', Sift: true, competitor: 'Limited' },
          { name: 'Auto time blocking', Sift: true, competitor: false },
          { name: 'Exam prep timeline', Sift: true, competitor: false },
          { name: 'AI writing assistant', Sift: false, competitor: true },
        ],
      },
      {
        category: 'Organization',
        features: [
          { name: 'Task management', Sift: true, competitor: true },
          { name: 'Note-taking', Sift: 'Basic', competitor: 'Advanced' },
          { name: 'Database views', Sift: 'Limited', competitor: 'Extensive' },
          { name: 'Study automations', Sift: true, competitor: 'Custom build' },
        ],
      },
    ],
  },

  'Sift-vs-sunsama': {
    slug: 'Sift-vs-sunsama',
    title: 'Sift vs Sunsama: Student Planner Comparison 2025',
    description: 'Sift vs Sunsama comparison for students. Find out which daily planner offers better academic features, pricing, and Canvas integration.',
    competitorName: 'Sunsama',
    SiftPrice: 'Free for students',
    competitorPrice: '$20/month',
    summary: 'Sunsama is a daily planner focused on mindful productivity for professionals. Sift is built specifically for students with academic integrations and study-focused features at a fraction of the cost.',
    pros: [
      'Free for students vs $20/month',
      'Built for academic schedules and deadlines',
      'Canvas and LMS integration',
      'Study-specific AI features',
      'Exam preparation automations',
    ],
    cons: [
      'Fewer mindfulness/reflection features',
      'Less focus on professional task management',
    ],
    comparisonTable: [
      {
        category: 'Pricing',
        features: [
          { name: 'Monthly cost', Sift: 'Free', competitor: '$20/month' },
          { name: 'Annual pricing', Sift: 'Free', competitor: '$16/month' },
          { name: 'Free trial', Sift: 'Unlimited', competitor: '14 days' },
        ],
      },
      {
        category: 'Student Features',
        features: [
          { name: 'Canvas sync', Sift: true, competitor: false },
          { name: 'Schoology sync', Sift: true, competitor: false },
          { name: 'Assignment tracking', Sift: 'Automatic', competitor: 'Manual' },
          { name: 'Exam timelines', Sift: true, competitor: false },
          { name: 'Study templates', Sift: true, competitor: false },
        ],
      },
      {
        category: 'Daily Planning',
        features: [
          { name: 'Daily planning ritual', Sift: true, competitor: true },
          { name: 'Time boxing', Sift: true, competitor: true },
          { name: 'Task import', Sift: 'Multiple sources', competitor: 'Multiple sources' },
          { name: 'Adaptive schedules', Sift: true, competitor: false },
        ],
      },
      {
        category: 'Integrations',
        features: [
          { name: 'Calendar sync', Sift: true, competitor: true },
          { name: 'Google Classroom', Sift: true, competitor: false },
          { name: 'Canvas LMS', Sift: true, competitor: false },
          { name: 'Gmail', Sift: 'Coming soon', competitor: true },
          { name: 'Slack', Sift: false, competitor: true },
        ],
      },
    ],
  },
};

export const getComparisonBySlug = (slug: string): Comparison | undefined => {
  return comparisons[slug];
};

export const getAllComparisons = (): Comparison[] => {
  return Object.values(comparisons);
};
