import { Card, CardContent } from '@/components/ui/card';
import { 
  Globe, 
  Zap, 
  Database, 
  Cloud, 
  Code, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full-Stack Web Development",
      description: "End-to-end web application solutions using modern technologies like React, Node.js, and Express.",
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimized"],
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "API Development",
      description: "RESTful APIs and integrations with robust authentication, data validation, and comprehensive documentation.",
      features: ["RESTful Design", "JWT Authentication", "API Documentation"],
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data-Driven Applications",
      description: "Solutions leveraging AI & ML for intelligent data processing, analytics, and predictive modeling.",
      features: ["Data Analytics", "ML Integration", "Intelligent Processing"],
      gradient: "from-primary to-accent"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud-Enabled Platforms",
      description: "Scalable, secure deployments with cloud services, containerization, and automated CI/CD pipelines.",
      features: ["Scalable Architecture", "Cloud Deployment", "DevOps Integration"],
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-terminal-green">#</span>services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with cutting-edge technology and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover-lift group overflow-hidden">
              <CardContent className="p-8 relative">
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                
                {/* Icon */}
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <Sparkles className="h-3 w-3 text-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all cursor-pointer">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="font-mono text-terminal-green">{'>'}</span> My Development Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding requirements and project scope" },
              { step: "02", title: "Design", desc: "Creating wireframes and system architecture" },
              { step: "03", title: "Development", desc: "Building with modern tech stack and best practices" },
              { step: "04", title: "Deployment", desc: "Testing, optimization, and production deployment" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 font-mono font-bold text-background group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
                <h4 className="font-semibold mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;