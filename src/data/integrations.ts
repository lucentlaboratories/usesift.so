import { Integration } from '@/types/content';

export const integrations: Record<string, Integration> = {
  canvas: {
    slug: 'canvas',
    name: 'Canvas',
    title: 'How to Sync Sift with Canvas LMS',
    description: 'Complete guide to connecting your Canvas account with Sift. Automatically import assignments, sync due dates, and let AI create your perfect study schedule.',
    logo: '/assets/integrations/canvas.png',
    category: 'lms',
    benefits: [
      'Automatically import all Canvas assignments and due dates',
      'AI breaks down complex assignments into manageable tasks',
      'Sync Canvas calendar events with your daily schedule',
      'Track grades and progress alongside your study plan',
      'Get AI-generated study timelines for exams based on Canvas schedule',
      'Never miss a deadline with smart notifications',
    ],
    steps: [
      {
        title: 'Open Sift Settings',
        description: 'Launch Sift and navigate to Settings > Integrations. Find the Canvas card and click "Connect".',
        image: '/assets/guides/canvas-step1.png',
      },
      {
        title: 'Enter Your Canvas URL',
        description: 'Enter your school\'s Canvas URL (e.g., canvas.university.edu). This is the same URL you use to access Canvas in your browser.',
        image: '/assets/guides/canvas-step2.png',
      },
      {
        title: 'Generate Access Token',
        description: 'In Canvas, go to Account > Settings > Approved Integrations > New Access Token. Name it "Sift" and copy the generated token.',
        image: '/assets/guides/canvas-step3.png',
      },
      {
        title: 'Paste Token in Sift',
        description: 'Return to Sift and paste your Canvas access token. Click "Connect" to authorize the integration.',
        image: '/assets/guides/canvas-step4.png',
      },
      {
        title: 'Select Courses to Sync',
        description: 'Choose which Canvas courses you want to sync with Sift. You can sync all courses or select specific ones.',
        image: '/assets/guides/canvas-step5.png',
      },
      {
        title: 'Let AI Build Your Schedule',
        description: 'Sift\'s AI will analyze your assignments and create an optimized study plan. Review and adjust as needed.',
        image: '/assets/guides/canvas-step6.png',
      },
    ],
    faq: [
      {
        question: 'Is my Canvas data secure?',
        answer: 'Yes. Sift uses read-only access tokens and encrypts all data. We never store your Canvas password and only access assignment and calendar information.',
      },
      {
        question: 'Will this work with any Canvas school?',
        answer: 'Sift works with any Canvas LMS instance, whether it\'s hosted by Instructure or self-hosted by your school.',
      },
      {
        question: 'How often does Sift sync with Canvas?',
        answer: 'Sift automatically syncs every 30 minutes to ensure you always have the latest assignments and updates.',
      },
      {
        question: 'Can I disconnect Canvas later?',
        answer: 'Yes, you can disconnect Canvas anytime from Settings > Integrations. Your existing Sift data will remain intact.',
      },
    ],
  },

  'google-classroom': {
    slug: 'google-classroom',
    name: 'Google Classroom',
    title: 'Connect Google Classroom to Sift - Setup Guide',
    description: 'Step-by-step guide to sync Google Classroom with Sift. Import assignments, track grades, and get AI-powered study schedules.',
    logo: '/assets/integrations/google-classroom.png',
    category: 'lms',
    benefits: [
      'Auto-import assignments from all Google Classroom courses',
      'Sync assignment due dates and class materials',
      'AI creates study schedules based on your workload',
      'Access classroom announcements in your daily plan',
      'Track completed assignments and grades',
      'One-click access to Google Docs and Drive files',
    ],
    steps: [
      {
        title: 'Navigate to Integrations',
        description: 'Open Sift and go to Settings > Integrations. Click "Connect" on the Google Classroom card.',
      },
      {
        title: 'Sign in with Google',
        description: 'Click "Sign in with Google" and select your school Google account.',
      },
      {
        title: 'Grant Permissions',
        description: 'Review and grant Sift read-only access to your Google Classroom data. We only access assignments and course info.',
      },
      {
        title: 'Select Classes',
        description: 'Choose which Google Classroom classes you want to sync with Sift.',
      },
      {
        title: 'Sync Complete',
        description: 'Sift will import your assignments and create an AI-optimized study schedule automatically.',
      },
    ],
    faq: [
      {
        question: 'What permissions does Sift need?',
        answer: 'Sift requires read-only access to view your classes, assignments, and due dates. We cannot post to Classroom or access private messages.',
      },
      {
        question: 'Can I use both Canvas and Google Classroom?',
        answer: 'Yes! Sift can sync with multiple platforms simultaneously and intelligently combines all your assignments into one schedule.',
      },
    ],
  },

  schoology: {
    slug: 'schoology',
    name: 'Schoology',
    title: 'Sync Schoology with Sift - Complete Guide',
    description: 'Learn how to connect Schoology to Sift using ICS calendar sync. Import assignments and get AI study planning for all your Schoology courses.',
    logo: '/assets/integrations/schoology.png',
    category: 'lms',
    benefits: [
      'Import Schoology assignments via calendar feed',
      'Sync assignment due dates automatically',
      'Get AI-generated study schedules',
      'Never miss Schoology deadlines',
      'Combine with other calendar sources',
    ],
    steps: [
      {
        title: 'Get Schoology Calendar Link',
        description: 'In Schoology, click your profile > Calendar > Calendar Feed. Copy the ICS feed URL.',
      },
      {
        title: 'Open Sift Integration Settings',
        description: 'In Sift, go to Settings > Integrations > Schoology.',
      },
      {
        title: 'Paste Calendar Feed URL',
        description: 'Paste your Schoology ICS feed URL into Sift and click "Connect".',
      },
      {
        title: 'Assignments Import Automatically',
        description: 'Sift will sync your Schoology assignments and create study plans automatically.',
      },
    ],
  },

  blackboard: {
    slug: 'blackboard',
    name: 'Blackboard',
    title: 'How to Connect Blackboard to Sift',
    description: 'Connect Blackboard Learn to Sift using calendar sync. Import assignments and get AI-powered study scheduling.',
    logo: '/assets/integrations/blackboard.png',
    category: 'lms',
    benefits: [
      'Sync Blackboard assignments and due dates',
      'AI study plan generation',
      'Calendar integration with Blackboard',
      'Track all deadlines in one place',
    ],
    steps: [
      {
        title: 'Access Blackboard Calendar',
        description: 'In Blackboard, navigate to Tools > Calendar.',
      },
      {
        title: 'Export Calendar Feed',
        description: 'Find the calendar subscription/feed option and copy the ICS URL.',
      },
      {
        title: 'Add to Sift',
        description: 'In Sift Settings > Integrations, add your Blackboard calendar feed.',
      },
      {
        title: 'Sync Complete',
        description: 'Your Blackboard assignments will now appear in Sift with AI-generated study schedules.',
      },
    ],
  },

  'google-calendar': {
    slug: 'google-calendar',
    name: 'Google Calendar',
    title: 'Sync Google Calendar with Sift',
    description: 'Two-way sync between Sift and Google Calendar. View your study blocks alongside meetings, events, and classes.',
    logo: '/assets/integrations/google-calendar.png',
    category: 'calendar',
    benefits: [
      'Two-way sync between Sift and Google Calendar',
      'Study blocks appear in Google Calendar',
      'Calendar events inform Sift\'s AI scheduling',
      'Works across all devices',
      'Sync multiple calendars',
    ],
    steps: [
      {
        title: 'Open Calendar Settings',
        description: 'In Sift, go to Settings > Calendar Integrations.',
      },
      {
        title: 'Connect Google Account',
        description: 'Click "Connect Google Calendar" and sign in with your Google account.',
      },
      {
        title: 'Select Calendars',
        description: 'Choose which Google Calendars to sync with Sift.',
      },
      {
        title: 'Configure Sync Options',
        description: 'Set sync direction (one-way or two-way) and choose which Sift events export to Google Calendar.',
      },
    ],
  },

  outlook: {
    slug: 'outlook',
    name: 'Outlook Calendar',
    title: 'Connect Outlook Calendar to Sift',
    description: 'Integrate Microsoft Outlook Calendar with Sift for seamless study schedule management.',
    logo: '/assets/integrations/outlook.png',
    category: 'calendar',
    benefits: [
      'Sync Outlook events with Sift',
      'Export study blocks to Outlook',
      'Works with Office 365 education accounts',
      'Cross-platform calendar access',
    ],
    steps: [
      {
        title: 'Navigate to Integrations',
        description: 'Open Sift Settings > Calendar Integrations.',
      },
      {
        title: 'Connect Microsoft Account',
        description: 'Click "Connect Outlook" and sign in with your Microsoft/Office 365 account.',
      },
      {
        title: 'Grant Permissions',
        description: 'Allow Sift to read and write calendar events.',
      },
      {
        title: 'Sync Activated',
        description: 'Your Outlook calendar is now synced with Sift.',
      },
    ],
  },
};

export const getIntegrationBySlug = (slug: string): Integration | undefined => {
  return integrations[slug];
};

export const getAllIntegrations = (): Integration[] => {
  return Object.values(integrations);
};

export const getIntegrationsByCategory = (category: 'lms' | 'calendar' | 'other'): Integration[] => {
  return Object.values(integrations).filter(integration => integration.category === category);
};
