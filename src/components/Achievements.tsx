const Achievements = ({ className }: { className?: string }) => {
  const achievements = [
    {
      title: "Top 3 - VibeCoding Hackathon"
    },
    {
      title: "Participant - Hack Beyond Limits: Odyssey Hackathon"
    },
    {
      title: "Designed logos and event creatives for the Association of Computer Engineers"
    }
  ];

  const certifications = [
    "CCNA: Introduction to Networks",
    "Introduction to Internet of Things - NPTEL",
    "Industry 4.0 and Industrial IoT - NPTEL"
  ];

  const organizations = [
    {
      name: "National Service Scheme (NSS)",
      role: "Member",
      period: "Aug 2023 - Present"
    },
    {
      name: "Association of Computer Engineers",
      role: "Creation Team Associate",
      period: "2024-25"
    }
  ];

  return (
    <section id="achievements" className={`py-32 px-6 md:px-8 ${className || ''}`}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-6 tracking-tight">
            Recognition & Involvement
          </h2>
          <div className="h-px w-24 bg-primary/30 mx-auto"></div>
        </div>
        
        <div className="space-y-16">
          {/* Achievements */}
          <div>
            <h3 className="font-serif text-3xl font-medium mb-8 text-foreground">
              Achievements
            </h3>
            <div className="space-y-6 border-l-2 border-primary/20 pl-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="pb-6 border-b border-border last:border-0">
                  <p className="text-lg text-foreground/90">{achievement.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-serif text-3xl font-medium mb-8 text-foreground">
              Certifications
            </h3>
            <div className="space-y-4 border-l-2 border-primary/20 pl-8">
              {certifications.map((cert, index) => (
                <p key={index} className="text-base text-muted-foreground leading-relaxed">
                  {cert}
                </p>
              ))}
            </div>
          </div>

          {/* Organizations */}
          <div>
            <h3 className="font-serif text-3xl font-medium mb-8 text-foreground">
              Organizations
            </h3>
            <div className="space-y-6 border-l-2 border-primary/20 pl-8">
              {organizations.map((org, index) => (
                <div key={index} className="pb-6 border-b border-border last:border-0">
                  <h4 className="text-lg font-medium text-foreground mb-1">{org.name}</h4>
                  <p className="text-sm text-muted-foreground">{org.role} · {org.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Beyond Tech */}
          <div className="border-t border-border pt-16 mt-16">
            <h3 className="font-serif text-3xl font-medium mb-8 text-foreground">
              Beyond Tech
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">Violinist and Music enthusiast</p>
              <p className="text-lg text-muted-foreground">Visual designer for college clubs and events</p>
              <p className="text-lg text-muted-foreground">Public Speaker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
