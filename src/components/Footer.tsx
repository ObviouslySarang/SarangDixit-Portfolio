import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="font-mono text-terminal-green font-semibold mb-2">
              {"<"}sarang.dev{"/>"}
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Sarang Dixit. Built with{' '}
              <Heart className="inline h-4 w-4 text-red-500 mx-1" />
              using React & Tailwind CSS
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-6 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/ObviouslySarang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/sarang-dixit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:srngdixit@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="font-mono text-xs text-muted-foreground text-center">
            <span className="text-terminal-green">$</span> echo "Thanks for visiting my portfolio!" 
            <span className="animate-pulse ml-2">|</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;