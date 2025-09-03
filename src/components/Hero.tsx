import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/sarang-profile.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-float">
            <img 
              src={profileImage} 
              alt="Sarang Dixit - AI & Data Science Engineer"
              className="w-32 h-32 rounded-full mx-auto border-4 border-primary/30 glow-primary"
            />
          </div>

          {/* Terminal Greeting */}
          <div className="font-mono text-terminal-green mb-4 animate-fade-in">
            <span className="text-warning-orange">$</span> whoami
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="gradient-text">Sarang Dixit</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in">
            <span className="text-primary">AI & Data Science Enthusiast</span>{' '}
            <span className="text-accent">|</span>{' '}
            <span className="text-accent">Full Stack Developer</span>
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Building smart solutions powered by{' '}
            <span className="text-primary font-semibold">code</span> and{' '}
            <span className="text-accent font-semibold">creativity</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-glow glow-primary hover-scale"
              onClick={scrollToProjects}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="hover-glow">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover-glow">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover-glow">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;