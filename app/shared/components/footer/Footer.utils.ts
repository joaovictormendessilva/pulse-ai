import GithubIcon from "@/public/lucide-github.svg";
import LinkedInIcon from "@/public/lucide-linkedin.svg";
import TwitterIcon from "@/public/lucide-twitter.svg";

export const footerData = {
  brand: {
    name: "Pulse AI",
    description: "Empowering humanity with artificial intelligence that works for people, not against them.",
    socials: [
      { label: "Twitter", icon: TwitterIcon, href: "/" },
      { label: "Github", icon: GithubIcon, href: "/" },
      { label: "LinkedIn", icon: LinkedInIcon, href: "/" },
    ],
  },
  navGroups: [
    {
      title: "PRODUCT",
      links: [
        { label: "Features", href: "/" },
        { label: "Pricing", href: "/" },
        { label: "API", href: "/" },
        { label: "Integrations", href: "/" },
        { label: "Enterprise", href: "/" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "Documentation", href: "/" },
        { label: "Case Studies", href: "/" },
        { label: "Blog", href: "/" },
        { label: "Community", href: "/" },
        { label: "Support", href: "/" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About Us", href: "/" },
        { label: "Careers", href: "/" },
        { label: "Security", href: "/" },
        { label: "Privacy", href: "/" },
        { label: "Terms", href: "/" },
      ],
    },
  ],
};
