import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : ''
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-mono text-terminal-green font-semibold">
          {"<"}sarang.dev{"/>"}
        </div>
        
        <div className="hidden md:flex space-x-8">
          {[
            { label: '#home', id: 'home' },
            { label: '#about', id: 'about' },
            { label: '#projects', id: 'projects' },
            { label: '#skills', id: 'skills' },
            { label: '#contact', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <Button 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          onClick={() => scrollToSection('contact')}
        >
          Let's Connect
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;