import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Container } from '@/components/ui/container';
import { SEOHead } from '@/components/layouts/SEOHead';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Brain, Bot, FileText, Zap, ChevronRight, RefreshCw } from 'lucide-react';

const About = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Sift',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'iOS, Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'AI-powered study planner for students with Canvas and Google Classroom integration. Automatically import assignments, generate study schedules, and build sustainable academic habits.',
    publisher: {
      '@type': 'Organization',
      name: 'Fly on the Wall',
      url: 'https://flyonthewall.xyz',
    },
    featureList: [
      'Canvas LMS Integration',
      'Google Classroom Sync',
      'AI Study Plan Generation',
      'Adaptive Daily Scheduling',
      'Exam Preparation Timelines',
      'Assignment Time Estimation',
      'Daily Rhythm Templates',
      'Automation',
      'Calendar Export',
      'SMS Reminders',
    ],
    screenshot: 'https://Sift.app/assets/screenshot.png',
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="About Sift - AI Study Planner for Students"
        description="Sift is an AI-powered study planner built for students. Connect Canvas, Google Classroom, and more. Free forever with intelligent scheduling and study habits."
        structuredData={structuredData}
      />

      <Navbar />

      <Container className="pt-40 pb-16">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif-hero font-normal leading-tight mb-6">About Sift</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            The AI-powered study planner built specifically for students
          </p>
        </div>

        {/* What is Sift */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif-hero font-normal mb-8">What is Sift?</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sift is an intelligent study planning platform designed exclusively for high school and college students.
              We automatically sync with your Learning Management System (Canvas, Google Classroom, Schoology, Blackboard),
              import all your assignments and deadlines, and use AI to create an optimized, personalized study schedule that adapts to your unique patterns and habits.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mt-6">
              Unlike generic productivity tools built for professionals, Sift understands the academic calendar,
              exam preparation timelines, the difference between a problem set and an essay, and how to balance multiple courses with extracurriculars.
            </p>
          </div>
        </section>

        {/* Who It's For */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif-hero font-normal mb-8">Who It's For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="p-8 rounded-lg border border-border hover:border-primary/50 transition-all"
              style={{ background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))' }}
            >
              <div className="mb-4">
                <GraduationCap className="w-10 h-10 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">College Students</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Managing 4-6 courses simultaneously</li>
                <li>• Canvas or Blackboard users</li>
                <li>• Balancing academics with work/activities</li>
                <li>• Preparing for midterms and finals</li>
                <li>• Need for sustainable study habits</li>
              </ul>
            </div>

            <div 
              className="p-8 rounded-lg border border-border hover:border-primary/50 transition-all"
              style={{ background: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.05))' }}
            >
              <div className="mb-4">
                <BookOpen className="w-10 h-10 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">High School Students</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Taking AP or IB courses</li>
                <li>• Google Classroom or Schoology users</li>
                <li>• SAT/ACT test preparation</li>
                <li>• College application management</li>
                <li>• Extracurricular coordination</li>
              </ul>
            </div>

            <div 
              className="p-8 rounded-lg border border-border hover:border-primary/50 transition-all"
              style={{ background: 'linear-gradient(to bottom right, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.05))' }}
            >
              <div className="mb-4">
                <Brain className="w-10 h-10 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Neurodivergent Learners</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ADHD-friendly planning structures</li>
                <li>• Visual progress tracking</li>
                <li>• Automated deadline management</li>
                <li>• Customizable daily rhythms</li>
                <li>• Smart reminders and notifications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Technology */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif-hero font-normal mb-8">Core Technology</h2>
          <div className="space-y-8">
            <div className="p-8 bg-card/50 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Bot className="w-6 h-6" />
                AI Scheduling Agent
              </h3>
              <p className="text-muted-foreground text-lg">
                Our proprietary AI analyzes your assignment workload, estimates time requirements, identifies your most productive hours,
                and creates optimized daily schedules. The system learns from your actual completion times and continuously adapts.
              </p>
            </div>

            <div className="p-8 bg-card/50 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Canvas Engine
              </h3>
              <p className="text-muted-foreground text-lg">
                Direct integration with Canvas LMS via official API. Automatically imports assignments, parses syllabi,
                tracks grades, and breaks down complex projects into actionable subtasks. Works with any Canvas instance.
              </p>
            </div>

            <div className="p-8 bg-card/50 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <RefreshCw className="w-6 h-6" />
                Adaptive Daily Rhythms
              </h3>
              <p className="text-muted-foreground text-lg">
                Sift's Daily Rhythms system helps you build sustainable study habits by creating consistent,
                customizable daily routines that adapt to your energy levels, class schedule, and personal preferences.
              </p>
            </div>

            <div className="p-8 bg-card/50 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Real-Time Sync
              </h3>
              <p className="text-muted-foreground text-lg">
                Multi-platform synchronization across iOS, web, and calendar integrations. Changes made anywhere
                instantly reflect everywhere with conflict-free replication.
              </p>
            </div>
          </div>
        </section>

        {/* Unique Differentiators */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif-hero font-normal mb-8">What Makes Sift Different</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Built for Students, Not Professionals</h3>
                <p className="text-muted-foreground">
                  Every feature is designed around academic automations, not business tasks. We understand courses, not projects.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Free Forever</h3>
                <p className="text-muted-foreground">
                  Core features are completely free. No credit card required, no feature paywalls for students.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Direct LMS Integration</h3>
                <p className="text-muted-foreground">
                  Native Canvas, Google Classroom, Schoology, and Blackboard support. Not just calendar imports—full API integration.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community-Driven Templates</h3>
                <p className="text-muted-foreground">
                  Access and share study automations, daily rhythms, and exam prep templates created by successful students.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Adaptive AI That Learns</h3>
                <p className="text-muted-foreground">
                  Estimates get more accurate over time as the AI learns how long you actually take on different task types.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sustainable Habits Focus</h3>
                <p className="text-muted-foreground">
                  Daily Rhythms prevent burnout by building consistent, manageable study routines instead of cramming.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif-hero font-normal mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Canvas Integration', desc: 'Automatic assignment import and sync' },
              { name: 'Google Classroom', desc: 'Direct classroom and assignment sync' },
              { name: 'AI Study Plans', desc: 'Intelligent schedule generation' },
              { name: 'Exam Timelines', desc: 'Multi-week prep schedules' },
              { name: 'Daily Rhythms', desc: 'Sustainable habit building' },
              { name: 'Automations Library', desc: 'Community study templates' },
              { name: 'Calendar Export', desc: 'Sync with Google, Outlook, Apple' },
              { name: 'SMS Reminders', desc: 'Never miss a deadline' },
              { name: 'Grade Tracking', desc: 'Monitor academic progress' },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-card/50 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">{feature.name}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision & Roadmap */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif-hero font-normal mb-8">Vision & Roadmap</h2>
          <div className="space-y-6">
            <div 
              className="p-8 rounded-lg border border-border"
              style={{ background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))' }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To make AI-powered study planning accessible to every student, reducing stress and improving academic outcomes
                through intelligent organization and sustainable habits.
              </p>
            </div>

            <div className="p-8 bg-card/50 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4">What's Next</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Android app launch (Q2 2025)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Study group collaboration features</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Spaced repetition flashcard integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced analytics and insights dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Institutional partnerships and bulk licensing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif-hero font-normal mb-8">Built By Students, For Students</h2>
          <div className="p-8 bg-card/50 rounded-lg border border-border">
            <p className="text-lg text-muted-foreground mb-6">
              Sift is developed by <a href="https://flyonthewall.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Fly on the Wall</a>,
              a team that understands the challenges of modern student life firsthand. We built Sift because we needed it ourselves—and we knew thousands of other students did too.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team combines expertise in AI/ML, educational technology, and student success to create tools that genuinely improve academic outcomes.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div 
          className="text-center p-12 rounded-2xl border border-border"
          style={{ background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))' }}
        >
          <h2 className="text-3xl font-serif-hero font-normal mb-4 text-foreground">Ready to Transform Your Study Habits?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students using Sift to stay organized, reduce stress, and succeed academically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#download"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
            >
              Get Started Free
            </Link>
            <Link
              to="/blog"
              className="px-8 py-4 bg-card/50 text-foreground rounded-lg font-semibold hover:bg-card/80 transition-colors text-lg border border-border"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default About;
