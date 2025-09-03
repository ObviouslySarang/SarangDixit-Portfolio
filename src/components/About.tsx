import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech (AI & Data Science)",
      institution: "Galgotias College of Engineering and Technology",
      period: "2021 – 2026",
      score: "CGPA: 7.76",
      status: "current"
    },
    {
      degree: "Senior Secondary (CBSE)",
      institution: "Guru Nanak English School",
      period: "2019 – 2021",
      score: "95.8%",
      status: "completed"
    },
    {
      degree: "Secondary (CBSE)",
      institution: "Guru Nanak English School",
      period: "2017 – 2019",
      score: "94%",
      status: "completed"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-terminal-green">#</span>about-me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover-lift">
              <div className="font-mono text-terminal-green mb-4">
                <span className="text-warning-orange">$</span> cat about.txt
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Hi, I'm <span className="text-primary font-semibold">Sarang Dixit</span>, 
                a B.Tech student in Artificial Intelligence and Data Science at 
                Galgotias College of Engineering and Technology.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I'm passionate about solving real-world problems using technology and 
                enjoy working on <span className="text-accent font-semibold">full-stack web applications</span>, 
                APIs, and <span className="text-primary font-semibold">data-driven solutions</span>.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I aim to grow as a developer while contributing to impactful projects 
                that make a difference in people's lives.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Varanasi, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-lg text-foreground">
                        {edu.degree}
                      </h4>
                      {edu.status === 'current' && (
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
                          <span className="text-xs text-terminal-green font-mono">CURRENT</span>
                        </div>
                      )}
                    </div>
                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{edu.period}</span>
                      <span className="font-semibold text-accent">{edu.score}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;