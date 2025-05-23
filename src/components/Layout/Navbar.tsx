import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    {
      name: "Events",
      path: "/events",
      subItems: [
        { name: "Upcoming Events", path: "/events" },
        { name: "Events Gallery", path: "/events-gallery" },
      ],
    },
    { name: "Contact", path: "/contact" },
    {
      name: "About Us",
      path: "/about-us",
      subItems: [
        { name: "About Our Center", path: "/about-us" },
        { name: "Director Junaidh's Message", path: "/about-us/director-junaidh" },
        { name: "Director Shiny's Message", path: "/about-us/director-shiny" },
      ],
    },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/57fb37d3-75f4-440e-8dfc-f4ca09a7275e.png" 
              alt="Lifeway Logo" 
              className="h-12" 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.subItems ? (
              <div key={link.name} className="relative inline-block">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger 
                        className={`text-sm font-medium hover:text-lifeway-red transition-colors ${
                          location.pathname === link.path || 
                          (link.subItems && link.subItems.some(subItem => location.pathname === subItem.path))
                            ? "text-lifeway-red"
                            : "text-lifeway-black"
                        } bg-transparent hover:bg-transparent focus:bg-transparent p-0 h-auto`}
                      >
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[200px] bg-white p-2 rounded-md shadow-md">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-lifeway-red focus:bg-accent focus:text-accent-foreground text-xs"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="text-sm font-medium leading-none">
                                {subItem.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium hover:text-lifeway-red transition-colors ${
                  location.pathname === link.path
                    ? "text-lifeway-red"
                    : "text-lifeway-black"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          <Link to="/contact" className="btn-primary text-sm font-medium">
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-lifeway-black hover:text-lifeway-red transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-4">
          <nav className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) =>
              link.subItems ? (
                <div key={link.name} className="space-y-4 w-full">
                  <div className="text-lg font-medium text-lifeway-black text-center">
                    {link.name}
                  </div>
                  <div className="flex flex-col space-y-2">
                    {link.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block text-center text-base text-gray-600 hover:text-lifeway-red"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium hover:text-lifeway-red transition-colors ${
                    location.pathname === link.path
                      ? "text-lifeway-red"
                      : "text-lifeway-black"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="btn-primary w-full text-center text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
