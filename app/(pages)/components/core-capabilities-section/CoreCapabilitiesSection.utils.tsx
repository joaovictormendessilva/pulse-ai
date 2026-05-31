import { ChartColumn, Layers, ShieldCheck, Sparkles, UsersRound, Zap } from "lucide-react";

export const capabilityCards = [
  {
    title: "AI Insights",
    icon: <Sparkles size={24} color="var(--primary)" />,
    description: "Harness predictive patterns and trend analysis to see opportunities before they manifest.",
    href: "/",
  },
  {
    title: "Smart Automation",
    icon: <Zap size={24} color="var(--primary)" />,
    description: "Zero-config workflows that learn from your team's habits and automate repetitive tasks.",
    href: "/",
  },
  {
    title: "Workflow Builder",
    icon: <Layers size={24} color="var(--primary)" />,
    description: "Drag-and-drop visual interface for creating complex cross-platform integrations effortlessly.",
    href: "/",
  },
  {
    title: "Team Analytics",
    icon: <ChartColumn size={24} color="var(--primary)" />,
    description: "Real-time performance heatmaps and resource allocation insights to prevent team burnout.",
    href: "/",
  },
  {
    title: "Real-Time Collaboration",
    icon: <UsersRound size={24} color="var(--primary)" />,
    description: "Synchronous editing and AI-assisted brainstorming for globally distributed agile teams.",
    href: "/",
  },
  {
    title: "Predictive Reporting",
    icon: <ShieldCheck size={24} color="var(--primary)" />,
    description: "Auto-generated board-ready reports that forecast project completion dates with 98% accuracy.",
    href: "/",
  },
];
