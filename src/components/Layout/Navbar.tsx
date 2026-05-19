import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { WHATSAPP_URL } from "@/lib/constants";
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
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
    {
      name: "About Us",
      path: "/about-us",
      subItems: [
        { name: "About Our Center", path: "/about-us" },
        { name: "Directors' Message", path: "/about-us/directors-message" },
      ],
    },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const headerBg =
    isScrolled || isMenuOpen
      ? "bg-white shadow-md py-2"
      : "bg-white/95 backdrop-blur-md shadow-sm py-3 md:bg-transparent md:shadow-none md:py-4";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="navbar-gutter flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/57fb37d3-75f4-440e-8dfc-f4ca09a7275e.png"
              alt="Lifeway Rehabilitation and Child Development Centre logo"
              className="h-11 sm:h-14 w-auto"
              width={120}
              height={48}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8" aria-label="Main navigation">
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
          <Link
            to="/appointments"
            className="btn-primary text-sm font-medium"
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-lifeway-black hover:text-lifeway-red transition-colors p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center relative z-[60]"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-20 px-4 pb-8 overflow-y-auto">
          <nav className="flex flex-col space-y-6 items-center max-w-md mx-auto w-full" aria-label="Mobile navigation">
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
              to="/appointments"
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
