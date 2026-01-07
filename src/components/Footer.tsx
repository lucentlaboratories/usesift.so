import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { useEffect } from "react";
import { Instagram } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scrolling to hash on route change
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleSectionNavigation = (sectionId: string) => {
    const isHomePage = location.pathname === '/';
    
    if (isHomePage) {
      // If on home page, scroll directly to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", sectionId: "features" },
        { name: "Integrations", href: "/integrations", isRouterLink: true, scrollToTop: true },
        { name: "Pricing", href: "/pricing", isRouterLink: true, scrollToTop: true },
        { name: "Ambassadors", href: "/ambassadors", isRouterLink: true, scrollToTop: true },
      ]
    },
    {
      title: "Integrations",
      links: [
        { name: "Canvas", href: "/integrations/canvas", isRouterLink: true, scrollToTop: true },
        { name: "Google Classroom", href: "/integrations/google-classroom", isRouterLink: true, scrollToTop: true },
        { name: "Schoology", href: "/integrations/schoology", isRouterLink: true, scrollToTop: true },
        { name: "Google Calendar", href: "/integrations/google-calendar", isRouterLink: true, scrollToTop: true },
        { name: "All Integrations", href: "/integrations", isRouterLink: true, scrollToTop: true },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog", isRouterLink: true, scrollToTop: true },
        { name: "College Guides", href: "/blog/college", isRouterLink: true, scrollToTop: true },
        { name: "High School", href: "/blog/high-school", isRouterLink: true, scrollToTop: true },
        { name: "AI Study Apps", href: "/blog/ai-study", isRouterLink: true, scrollToTop: true },
        { name: "Comparisons", href: "/blog/compare", isRouterLink: true, scrollToTop: true },
      ]
    },
    {
      title: "Compare",
      links: [
        { name: "vs Shovel", href: "/blog/compare/Sift-vs-shovel", isRouterLink: true, scrollToTop: true },
        { name: "vs Motion", href: "/blog/compare/Sift-vs-motion", isRouterLink: true, scrollToTop: true },
        { name: "vs Notion", href: "/blog/compare/Sift-vs-notion", isRouterLink: true, scrollToTop: true },
        { name: "vs Sunsama", href: "/blog/compare/Sift-vs-sunsama", isRouterLink: true, scrollToTop: true },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about", isRouterLink: true, scrollToTop: true },
        { name: "Fly on the Wall", href: "https://flyonthewall.xyz", isExternal: true },
        { name: "Contact", href: "https://flyonthewall.xyz/#contact", isExternal: true },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms", href: "/terms", isRouterLink: true, scrollToTop: true },
        { name: "Privacy", href: "#" },
        { name: "Security", href: "#" },
      ]
    }
  ];

  return (
    <footer className="py-16">
      <Container>
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          {/* Left Section - Logo and Contact */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <h3 className="text-4xl md:text-5xl font-serif-hero font-normal text-foreground mb-6">
                Sift
              </h3>
            </Link>
            <a 
              href="mailto:hello@Sift.app" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@Sift.app
            </a>
          </div>

          {/* Center-Right Section - Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-8 lg:w-2/3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                  {group.title}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      {link.sectionId ? (
                        <button
                          onClick={() => handleSectionNavigation(link.sectionId)}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </button>
                      ) : link.isRouterLink ? (
                        <Link
                          to={link.href || '#'}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={link.scrollToTop ? () => window.scrollTo(0, 0) : undefined}
                        >
                          {link.name}
                        </Link>
                      ) : link.isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-border mb-8" />
        
        {/* Bottom Section - Theme Toggle, Social Icons and Copyright */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 items-center gap-4">
          {/* Theme Toggle - Bottom Left */}
          <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
            <ThemeToggle />
          </div>

          {/* Copyright - Bottom Center */}
          <div className="order-3 lg:order-2 text-center text-sm text-muted-foreground">
            <p>© {currentYear} Sift. By <a href="https://flyonthewall.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Fly on the Wall</a>.</p>
          </div>

          {/* Social Icons - Bottom Right */}
          <div className="order-2 lg:order-3 flex gap-5 items-center justify-center lg:justify-end">
            <a href="https://x.com/Sift" target="_blank" rel="noopener noreferrer" aria-label="Sift X" className="w-4 h-4 flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/flyonthewallai" target="_blank" rel="noopener noreferrer" aria-label="Fly on the Wall LinkedIn" className="w-6 h-6 flex items-center justify-center">
              <img 
                src="/assets/linkedin-app-white-icon.webp" 
                alt="LinkedIn" 
                className="w-6 h-6 max-w-6 max-h-6 object-contain opacity-80 hover:opacity-100 transition-opacity dark:block hidden"
              />
              <img 
                src="/assets/linkedinblack.png" 
                alt="LinkedIn" 
                className="w-6 h-6 max-w-6 max-h-6 object-contain opacity-80 hover:opacity-100 transition-opacity dark:hidden block"
              />
            </a>
            <a href="https://github.com/flyonthewallai" target="_blank" rel="noopener noreferrer" aria-label="Sift GitHub" className="w-4 h-4 flex items-center justify-center">
              <img 
                src="/assets/github.png" 
                alt="GitHub" 
                className="w-4 h-4 max-w-4 max-h-4 object-contain opacity-80 hover:opacity-100 transition-opacity brightness-0 invert dark:block hidden"
              />
              <img 
                src="/assets/githubblack.png" 
                alt="GitHub" 
                className="w-4 h-4 max-w-4 max-h-4 object-contain opacity-80 hover:opacity-100 transition-opacity dark:hidden block"
              />
            </a>
            <a href="https://instagram.com/Sift" target="_blank" rel="noopener noreferrer" aria-label="Sift Instagram" className="w-4 h-4 flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://tiktok.com/@Sift" target="_blank" rel="noopener noreferrer" aria-label="Sift TikTok" className="w-4 h-4 flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
