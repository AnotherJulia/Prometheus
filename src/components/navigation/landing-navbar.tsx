import Link from "next/link";
import { buttonVariants } from "../ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { cn } from "@/library/utils";

const LandingNavbar = () => {
  return (
    <div className="w-full justify-end items-center space-x-10 sm:flex hidden">
      <>
        <NavigationMenu>
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  }),
                  "text-foreground"
                )}
                href="https://ariatos.com"
              >
                Ariatos
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </>
    </div>
  );
};

export default LandingNavbar;
