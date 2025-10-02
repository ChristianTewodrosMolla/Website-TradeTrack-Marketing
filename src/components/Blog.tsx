import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

const externalPosts = [
  {
    id: 1,
    title: "The ROI of Google Ads for Freight Brokers",
    excerpt:
      "Real data and case studies showing how freight brokers achieve 3-5x returns on Google Ads. Learn about keyword research, ad copy optimization, and budget allocation strategies that maximize ROI.",
    readTime: "10 min read",
    category: "Google Ads",
    source: "Denim",
    url: "https:\/\/www.denim.com\/blog\/8-ways-to-market-your-freight-brokerage",
  },
  {
    id: 2,
    title: "Driver Recruiting Funnels for Small Fleets",
    excerpt:
      "Stop wasting money on ineffective driver recruiting. This guide covers Facebook and Instagram ad strategies, landing page optimization, and follow-up systems that consistently deliver qualified CDL drivers.",
    readTime: "12 min read",
    category: "Driver Recruiting",
    source: "Oyova",
    url: "https:\/\/www.oyova.com\/blog\/digital-marketing-for-logistics-companies\/",
  },
  {
    id: 3,
    title: "CRM Automation for Freight Brokers",
    excerpt:
      "Transform your manual processes with CRM automation. Discover how automated follow-ups, lead scoring, and pipeline management can increase your close rates by 40% or more.",
    readTime: "9 min read",
    category: "Automation",
    source: "Logistics Marketing",
    url: "https:\/\/www.logisticsmarketing.com\/blog\/empathy-key-marketing-logistics-service",
  },
];

const Blog = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-accent bg-[hsl(var(--accent)/0.12)] border-[hsl(var(--accent)/0.3)]"
          >
            Industry Insights
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Freight Marketing Blog
          </h2>
          <p className="text-lg text-muted-foreground">
            Proven strategies, case studies, and insights from the front lines of freight marketing. Learn what's working in the industry today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {externalPosts.map((post) => {
            const domain = new URL(post.url).hostname;
            const favicon = `https:\/\/www.google.com\/s2\/favicons?domain=${domain}&sz=64`;
            return (
            <Card 
              key={post.id}
              className="hover:shadow-[var(--card-hover-shadow)] transition-all duration-300 border-border group cursor-pointer"
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read: ${post.title} on ${post.source}`}
                className="block"
              >
                <CardHeader className="p-0">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    {/* Intentionally no remote OG images to avoid CORS; keeping muted placeholder */}
                  </div>
                  <div className="p-6 pb-0">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <CardDescription className="text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <img src={favicon} alt="" className="w-4 h-4 rounded-sm" />
                        <span>{post.source}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-accent group-hover:gap-2 transition-all">
                      <span>Read more</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </CardContent>
              </a>
            </Card>
            );
          })}
        </div>
        
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-muted-foreground text-base">
            Stay updated with the latest freight marketing strategies and industry insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
