import { men, menuItem, women } from "@/data/navigation-data";
import {
  DropdownNavigationMenuItem,
  MenuItems,
} from "@/types/navigation-menu-items.type";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const DropdownMenuComponent = () => {
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-1 bg-transparent data-[hover=true]:bg-transparent hover:font-medium hover:drop-shadow-md"
            endContent={<ChevronDownIcon className="w-4 h-4" />}
            radius="sm"
            variant="light"
          >
            Features
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="ACME features"
          className="w-fit text-black mx-2"
          classNames={{
            list: [
              "grid grid-cols-2 gap-2 mx-auto",
              "divide-x-1",
              "divide-zinc-300",
            ],
          }}
        >
          <DropdownSection title="Men" className="pl-4  w-fit">
            {menuItems.men.map((item, index) => (
              <DropdownItem
                className="mb-2"
                key={item.name}
                href={item.href}
                description={item.description}
                startContent={
                  <item.icon className="w-4 h-4 flex items-center justify-center" />
                }
              >
                {item.name}
              </DropdownItem>
            ))}
          </DropdownSection>
          <DropdownSection title="Women" className="pl-4 w-fit">
            {menuItems.women.map((item, index) => (
              <DropdownItem
                className="mb-2"
                key={item.name}
                href={item.href}
                description={item.description}
                startContent={
                  <item.icon className="w-4 h-4 flex items-center justify-center" />
                }
              >
                {item.name}
              </DropdownItem>
            ))}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
export const menuItems: DropdownNavigationMenuItem = { men: men, women: women };
export const menus: MenuItems[] = menuItem;
export const TopNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <NavbarContent justify="center">
      {menus.map((menu) => {
        const isActive = pathname === menu.href;
        return (
          <NavbarItem
            className={`${isActive && "font-medium drop-shadow-md"} cursor-pointer hover:font-medium hover:drop-shadow-md hover:transition-colors`}
            key={`navigation-${menu.href}`}
          >
            {menu.title === "Features" ? (
              <DropdownMenuComponent />
            ) : (
              <Link href={menu.href}>{menu.title}</Link>
            )}
          </NavbarItem>
        );
      })}

      <NavbarItem className="hidden sm:flex gap-3"></NavbarItem>
    </NavbarContent>
  );
};
