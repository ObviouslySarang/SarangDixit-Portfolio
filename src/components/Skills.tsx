import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Globe, 
  Database, 
  Wrench, 
  Brain,
  Github,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "FastAPI", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostGres", level: 60 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Linux", level: 80 }
      ]
    },
    {
      title: "Core Concepts",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "OOP", level: 85 },
        { name: "WebSockets", level: 75 }
      ]
    }
  ];

  const achievements = [
    {
      icon: <Github className="h-6 w-6" />,
      title: "120+ LeetCode Problems",
      description: "Algorithmic problem-solving expertise"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Hakamon Hackathon",
      description: "Collaborative team-based innovation"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Top 5 in Ideaathon LaunchPad",
      description: "Tech innovation proposal recognition"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-terminal-green">#</span>skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <span className="font-mono text-terminal-green">//</span>
            Achievements & Highlights
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover-lift hover-glow">
                <CardContent className="p-6 text-center">
                  <div className="text-accent mb-4 flex justify-center">{achievement.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="font-mono text-terminal-green">{'>'}</span>
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Oracle Academy – Java Programming</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Infosys Springboard – Cloud Computing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Full Stack Development – 100xDevs MERN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
