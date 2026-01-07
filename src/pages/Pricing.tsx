import React, { useState, useRef, useEffect } from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual' | 'lifetime'>('annual');
  const [sliderStyle, setSliderStyle] = useState({});
  const monthlyRef = useRef<HTMLButtonElement>(null);
  const annualRef = useRef<HTMLButtonElement>(null);
  const lifetimeRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let targetRef;
    if (billingCycle === 'monthly') {
      targetRef = monthlyRef;
    } else if (billingCycle === 'annual') {
      targetRef = annualRef;
    } else {
      targetRef = lifetimeRef;
    }

    if (targetRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const targetRect = targetRef.current.getBoundingClientRect();
      setSliderStyle({
        left: `${targetRect.left - containerRect.left}px`,
        width: `${targetRect.width}px`,
      });
    }
  }, [billingCycle]);

  const features = {
    free: [
      { text: 'Basic task + deadline management', included: true },
      { text: '1 schedule per week', included: true },
      { text: 'Google/Apple Calendar integration', included: true },
      { text: 'Limited agent access', included: true },
      { text: 'Limited canvas sync (1 course)', included: true },
      { text: 'Limited task storage', included: true },
      { text: 'AI task breakdown & automation', included: false },
      { text: 'Smart auto-scheduling & rescheduling', included: false },
      { text: 'Unlimited Canvas sync (all courses)', included: false },
      { text: 'Long term memory of you', included: false },
      { text: 'Auto-draft & summarize emails', included: false },
      { text: 'Daily AI morning briefings', included: false },
      { text: 'Custom AI preferences', included: false },
    ],
    premium: [
      { text: 'Basic task + deadline management', included: true },
      { text: 'Unlimited schedules per week', included: true },
      { text: 'Google/Apple Calendar integration', included: true },
      { text: 'Unlimited agent access', included: true },
      { text: 'Unlimited canvas sync (all courses)', included: true },
      { text: 'Unlimited task storage', included: true },
      { text: 'AI task breakdown & automation', included: true },
      { text: 'Smart auto-scheduling & rescheduling', included: true },
      { text: 'Long term memory of you', included: true },
      { text: 'Auto-draft & summarize emails', included: true },
      { text: 'Daily AI morning briefings', included: true },
      { text: 'Custom AI preferences', included: true },
      { text: 'Priority support & early access', included: true },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Section className="pt-40 pb-24">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-serif-hero font-normal tracking-tight mb-4">
                Pricing
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                7 days free. Cancel anytime.
              </p>
            </div>

            {/* Subscription Options */}
            <div className="flex justify-center mb-16">
              <div ref={containerRef} className="bg-card/50 backdrop-blur-lg p-2 rounded-2xl flex relative gap-2">
                {/* Animated background slider */}
                <div
                  className="absolute top-2 bottom-2 rounded-xl bg-muted/50 transition-all duration-300 ease-in-out"
                  style={sliderStyle}
                />
                <button
                  ref={monthlyRef}
                  onClick={() => setBillingCycle('monthly')}
                  className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-colors z-10 outline-none focus:outline-none ${
                    billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  Monthly
                </button>
                <button
                  ref={annualRef}
                  onClick={() => setBillingCycle('annual')}
                  className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-colors z-10 whitespace-nowrap outline-none focus:outline-none ${
                    billingCycle === 'annual' ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  Annual <span className="text-xs opacity-70">(2 months free)</span>
                </button>
                <button
                  ref={lifetimeRef}
                  onClick={() => setBillingCycle('lifetime')}
                  className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-colors z-10 whitespace-nowrap outline-none focus:outline-none ${
                    billingCycle === 'lifetime' ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  Lifetime <span className="text-xs opacity-70">(limited time)</span>
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="flex justify-center">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
                {/* Free Card */}
                <div className="glass-card p-7 rounded-2xl flex flex-col h-full">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Free</h2>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-5xl font-bold">$0</span>
                      <span className="text-muted-foreground text-base">/month</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Perfect for getting started with task management
                    </p>
                  </div>
                 
                 <div className="text-left space-y-3 mb-6 flex-1">
                   {features.free.map((feature, index) => (
                     <div key={index} className="flex items-start gap-3">
                       {feature.included ? (
                         <Check size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                       ) : (
                         <X size={18} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                       )}
                       <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                         {feature.text}
                       </span>
                     </div>
                   ))}
                 </div>
                 
                 <Button className="w-full bg-rhythm-blue text-white text-base font-semibold py-3 rounded-xl hover:bg-rhythm-blue/90 transition-colors duration-200">
                    Get Started Free
                  </Button>
               </div>

               {/* Premium Card */}
               <div className="glass-card p-7 rounded-2xl flex flex-col h-full relative border-2 border-blue-500/30">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={20} className="text-blue-400" />
                      <h2 className="text-2xl font-bold">Premium</h2>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-5xl font-bold">
                        {billingCycle === 'monthly' ? '$7' : billingCycle === 'annual' ? '$70' : '$250'}
                      </span>
                      <span className="text-muted-foreground text-base">
                        {billingCycle === 'monthly' ? '/month' : billingCycle === 'annual' ? '/year' : ''}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {billingCycle === 'monthly' ? 'Billed Monthly' : billingCycle === 'annual' ? 'Billed Annually (2 months free)' : 'One-time payment'}
                    </p>
                  </div>
                  
                  <div className="text-left space-y-3 mb-6 flex-1">
                    {features.premium.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X size={18} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-rhythm-blue text-white text-base font-semibold py-3 rounded-xl hover:bg-rhythm-blue/90 transition-colors duration-200">
                       Try Premium for free
                  </Button>
               </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Pricing; 
