import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/Theme/ModeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLogo } from "@/hooks/useLogo";
import { cn } from "@/lib/utils";

const entityLinks = [
  { href: "/entities/films", label: "Films" },
  { href: "/entities/people", label: "People" },
  { href: "/entities/planets", label: "Planets" },
  { href: "/entities/starships", label: "Starships" },
  { href: "/entities/vehicles", label: "Vehicles" },
  { href: "/entities/species", label: "Species" },
];

const Header = () => {
  const { fullLogo } = useLogo();

  return (
    <header className="p-4 border-b-2 border-muted-foreground">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src={fullLogo} alt="Star Wars Search" className="max-w-60" />
        </Link>

        <div className="flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={cn(
                    "font-orbitron px-4 py-2 rounded-md",
                    "hover:bg-theme-primary/10 hover:text-theme-primary",
                    "transition-colors duration-200"
                  )}
                >
                  Search
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "font-orbitron",
                    "hover:bg-theme-primary/10 hover:text-theme-primary",
                    "data-[state=open]:bg-theme-primary/10",
                    "data-[state=open]:text-theme-primary"
                  )}
                >
                  Entities
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-1 p-2 bg-card">
                    {entityLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className={cn(
                              "block select-none rounded-md p-2",
                              "hover:bg-theme-primary/10 hover:text-theme-primary",
                              "transition-colors duration-200",
                              "font-orbitron"
                            )}
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
