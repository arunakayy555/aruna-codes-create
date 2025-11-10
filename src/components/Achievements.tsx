import { Card } from "@/components/ui/card";
import { Award, Trophy, BookOpen } from "lucide-react";
const Achievements = ({ className }: { className?: string }) => {
  const achievements = [{
    icon: Trophy,
    title: "Top 3 - VibeCoding Hackathon",
    color: "text-accent"
  }, {
    icon: Award,
    title: "Participant - Hack Beyond Limits: Odyssey Hackathon",
    color: "text-primary"
  }, {
    icon: Award,
    title: "Designed logos and event creatives for the Association of Computer Engineers",
    color: "text-accent"
  }];
  const certifications = ["CCNA: Introduction to Networks", "Introduction to Internet of Things - NPTEL", "Industry 4.0 and Industrial IoT - NPTEL"];
  const organizations = [{
    name: "National Service Scheme (NSS)",
    role: "Member",
    period: "Aug 2023 - Present"
  }, {
    name: "Association of Computer Engineers",
    role: "Creation Team Associate",
    period: "2024-25"
  }];
  return <section id="achievements" className={`py-20 px-4 ${className || ''}`}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">Achievements & More</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => <div key={index} className="flex items-start gap-3">
                  <achievement.icon className={`h-5 w-5 mt-0.5 ${achievement.color}`} />
                  <p className="text-muted-foreground">{achievement.title}</p>
                </div>)}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-accent" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => <div key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">{cert}</p>
                </div>)}
            </div>
          </Card>
        </div>

        <Card className="p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-6">Organizations</h3>
          <div className="space-y-4">
            {organizations.map((org, index) => <div key={index} className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-foreground">{org.name}</h4>
                <p className="text-sm text-muted-foreground">{org.role} • {org.period}</p>
              </div>)}
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10">
          <h3 className="text-2xl font-semibold mb-4">Beyond Tech</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">
            </span>
              <span className="text-muted-foreground">Violinist and Music enthusiast</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">|</span>
              <span className="text-muted-foreground">Visual designer </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">|</span>
              <span className="text-muted-foreground">Public Speaker</span>
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default Achievements;