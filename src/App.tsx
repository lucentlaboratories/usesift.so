import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Ambassadors from "./pages/Ambassadors";
import TermsOfService from "./pages/TermsOfService";
import Auth from "./pages/Auth";
import AuthCallback from "./pages/AuthCallback";
import Pricing from "./pages/Pricing";

// Blog & Content Pages
import BlogHub from "./pages/blog/BlogHub";
import BlogPost from "./pages/blog/BlogPost";

// Comparison Pages
import ComparisonPage from "./pages/comparisons/ComparisonPage";

// Integration Pages
import IntegrationsHub from "./pages/integrations/IntegrationsHub";
import IntegrationPage from "./pages/integrations/IntegrationPage";

// About
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ambassadors" element={<Ambassadors />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/auth/callback" element={<AuthCallback />} />

            {/* About */}
            <Route path="/about" element={<About />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogHub />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Comparison Routes */}
            <Route path="/blog/compare/:slug" element={<ComparisonPage />} />

            {/* Integration Routes */}
            <Route path="/integrations" element={<IntegrationsHub />} />
            <Route path="/integrations/:slug" element={<IntegrationPage />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
