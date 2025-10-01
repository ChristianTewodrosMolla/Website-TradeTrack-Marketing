import { AlertCircle, TrendingDown, Users, Clock } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Inconsistent Lead Flow",
    description: "Relying on cold calls and referrals leaves revenue unpredictable. You need a steady pipeline of qualified shipper leads."
  },
  {
    icon: Users,
    title: "Driver Recruiting Nightmare",
    description: "CDL drivers are hard to find and keep. Most fleets lack repeatable, scalable hiring pipelines to maintain capacity."
  },
  {
    icon: AlertCircle,
    title: "Trust & Credibility Gap",
    description: "Shippers demand proof of reliability and compliance. Without professional branding, you lose deals to competitors."
  },
  {
    icon: Clock,
    title: "Manual, Outdated Systems",
    description: "Hours wasted on calls and emails with no automation. Your team is overworked and growth has stalled."
  }
];

const Problems = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Your Freight Business Has Real Problems
          </h2>
          <p className="text-lg text-muted-foreground">
            Brokers and carriers face the same challenges: not enough shippers, not enough drivers, and not enough time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 border border-border hover:shadow-[var(--card-hover-shadow)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-destructive/10 p-3 rounded-lg shrink-0">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
