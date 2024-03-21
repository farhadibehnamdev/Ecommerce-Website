import {
  Repeat,
  Fingerprint,
  FileBarChart,
  PieChart,
  SquarePlus,
  MousePointerClick,
} from "lucide-react";

export const menuItem = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Our Story",
    href: "/about-us",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

export const men = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: PieChart,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools and find out expectations",
    href: "#",
    icon: SquarePlus,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers with our engagement tool",
    href: "#",
    icon: MousePointerClick,
  },
];
export const women = [
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: Repeat,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: Fingerprint,
  },
  {
    name: "Reports",
    description: "Edit, manage and create newly informed decisions",
    href: "#",
    icon: FileBarChart,
  },
];
