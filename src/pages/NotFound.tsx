import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleSectionNavigation = (sectionId: string) => {
    navigate(`/#${sectionId}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="bg-grid noise">
        <Navbar />
        
        <Section className="pt-40 pb-24">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              {/* Large 404 Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h1 className="text-8xl md:text-9xl font-serif-hero font-normal text-gradient-lavender opacity-80">
                  404
                </h1>
              </motion.div>

              {/* Main Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-serif-hero font-normal mb-4">
                  Oops! Page not found
                </h2>
                <p className="text-lg text-muted-foreground mb-2">
                  The page you're looking for doesn't exist or has been moved.
                </p>
                <p className="text-sm text-muted-foreground">
                  Attempted to access: <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button asChild size="lg" className="bg-rhythm-blue hover:bg-rhythm-blue/90">
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <button onClick={() => window.history.back()}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go Back
                  </button>
                </Button>
              </motion.div>

              {/* Helpful Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 pt-8 border-t border-border"
              >
                <p className="text-sm text-muted-foreground mb-4">
                  Maybe you were looking for one of these?
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => handleSectionNavigation('features')}
                    className="text-rhythm-blue hover:text-rhythm-blue/80 transition-colors text-sm"
                  >
                    Features
                  </button>
                  <Link 
                    to="/pricing" 
                    className="text-rhythm-blue hover:text-rhythm-blue/80 transition-colors text-sm"
                  >
                    Pricing
                  </Link>
                  <Link 
                    to="/ambassadors" 
                    className="text-rhythm-blue hover:text-rhythm-blue/80 transition-colors text-sm"
                  >
                    Ambassadors
                  </Link>
                  <Link 
                    to="/terms" 
                    className="text-rhythm-blue hover:text-rhythm-blue/80 transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </Container>

        </Section>

        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
