import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Clock, Users, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Earthquake Alert Notification System",
      year: "2024",
      description: "Built a real-time seismic alert system capable of sending SMS/email notifications within 3 seconds to over 500 users. Optimized backend performance by 40%.",
      techStack: ["Node.js", "React.js", "Twilio API", "SendGrid API"],
      features: [
        "Real-time alerts within 3 seconds",
        "500+ concurrent users",
        "40% performance optimization"
      ],
      status: "Live",
      type: "Full Stack"
    },
    {
      title: "Student Mentorship Program",
      year: "2024",
      description: "Automated mentor-mentee pairings and improved feedback efficiency by 80%. Boosted user satisfaction by 25% through intelligent matching algorithms.",
      techStack: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
      features: [
        "Automated mentor-mentee matching",
        "80% feedback efficiency boost",
        "25% satisfaction improvement"
      ],
      status: "Live",
      type: "Web Application"
    },
    {
      title: "Athlosphere – Athlete Guidance Platform",
      year: "2023",
      description: "Developed a secure athlete guidance platform with JWT authentication and protected API routes. Achieved 99.5% uptime and reduced frontend load time by 45%.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      features: [
        "JWT Authentication",
        "99.5% uptime achieved",
        "45% faster load times"
      ],
      status: "Live",
      type: "MERN Stack"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Live':
        return <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>;
      case 'Development':
        return <div className="w-2 h-2 bg-warning-orange rounded-full animate-pulse"></div>;
      default:
        return <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-terminal-green">#</span>projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A showcase of my recent work in full-stack development, API design, and data-driven solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover-lift group">
              <CardContent className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(project.status)}
                    <Badge variant="outline" className="text-xs font-mono">
                      {project.type}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">
                    {project.year}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-xs">
                      <Zap className="h-3 w-3 text-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex gap-2 w-full">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8 inline-block">
            <h3 className="text-xl font-semibold mb-2">Want to see more?</h3>
            <p className="text-muted-foreground mb-4">
              Check out all my projects and contributions on GitHub
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary-glow glow-primary">
              <Github className="h-4 w-4 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;