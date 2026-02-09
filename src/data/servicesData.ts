import { Search, Users, Linkedin, Zap, Globe, Award, LucideIcon } from "lucide-react";

export interface ServiceItem {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
  outcomes: string[];
}

export const servicesData: ServiceItem[] = [
  {
    name: "Google Ads",
    href: "/services/google-ads",
    description: "Capture high-intent shippers actively searching for freight services in your lanes. Proven campaigns with consistent ROI and typical CPLs in the $50–$100 range.",
    icon: Search,
    outcomes: ["Predictable shipper leads month after month", "Strong ROI with long-term optimization"],
  },
  {
    name: "Facebook & Instagram Ads",
    href: "/services/social-ads",
    description: "Recruit CDL drivers and owner-operators at scale with targeted social campaigns and proven ad funnels. Driver CPLs typically $20–$50.",
    icon: Users,
    outcomes: ["Steady pipeline of qualified applications", "Lower recruiting costs over time"],
  },
  {
    name: "LinkedIn Campaigns",
    href: "/services/linkedin",
    description: "Reach logistics decision-makers and build enterprise relationships with compliant LinkedIn campaigns tailored to B2B freight.",
    icon: Linkedin,
    outcomes: ["Direct access to enterprise buyers", "Trust and long-term shipper relationships"],
  },
  {
    name: "CRM Automation (GoHighLevel)",
    href: "/services/crm-automation",
    description: "Replace manual calls and emails with automated SMS/email follow-ups, load updates, and driver funnels so your team can focus on closing.",
    icon: Zap,
    outcomes: ["24/7 lead nurturing and updates", "Close deals faster with less manual work"],
  },
  {
    name: "Websites & Funnels",
    href: "/services/websites-funnels",
    description: "Upgrade outdated DOT pages into professional, trust-rich websites and landing pages with clear messaging and compliance cues.",
    icon: Globe,
    outcomes: ["Mobile-responsive modern design", "Build shipper trust and credibility"],
  },
  {
    name: "Brand Positioning",
    href: "/services/brand-positioning",
    description: "Differentiate with industry-specific messaging, compliance badges, testimonials, and credibility assets to win larger accounts.",
    icon: Award,
    outcomes: ["Stand out from competitors", "Win credibility with enterprise contracts"],
  },
];
