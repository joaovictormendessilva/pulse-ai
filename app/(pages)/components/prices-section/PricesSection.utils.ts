import { PriceCardProps } from "./price-card/PriceCard.types";

export const plans: PriceCardProps[] = [
  {
    id: "starter",
    title: "Starter",
    description: "Perfect for early stage startups or solo founders.",
    price: 0,
    benefits: ["Up to 5 team members", "Core AI automations", "Basic reporting", "Community support"],
    highlighted: false,
    badge: null,
  },
  {
    id: "professional",
    title: "Professional",
    description: "Comprehensive toolset for growing product teams.",
    price: 49,
    benefits: [
      "Unlimited team members",
      "Advanced Neural Engine",
      "Custom API integrations",
      "Priority 24/7 support",
      "White-labeled reports",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Dedicated power for large-scale global operations.",
    price: 199,
    benefits: [
      "Multi-org management",
      "Custom AI training",
      "SSO & Advanced Security",
      "Dedicated Account Manager",
      "SLA guarantees",
    ],
    highlighted: false,
    badge: null,
  },
];
