import { LucideIcon } from "lucide-react";
import { ReactElement } from "react";

export type MenuItems = {
  title: string;
  href: string;
};

export type NavigationMenuItem = {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export type DropdownNavigationMenuItem = {
  men: NavigationMenuItem[];
  women: NavigationMenuItem[];
};
