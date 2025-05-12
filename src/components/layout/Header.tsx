
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] p-2 rounded-md">
            <Icon name="AppWindow" className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold font-montserrat text-[#1A1F2C]">UniApp iOS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <NavLinks isMobile onClick={() => setIsMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ isMobile = false, onClick }: { isMobile?: boolean; onClick?: () => void }) => {
  const links = [
    { name: "Главная", path: "/" },
    { name: "О проекте", path: "/about" },
    { name: "Участники", path: "/team" },
    { name: "Журнал", path: "/journal" },
    { name: "Ресурсы", path: "/resources" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`${
            isMobile
              ? "block py-2 px-4 hover:bg-gray-100 rounded-md w-full"
              : "text-[#1A1F2C] hover:text-[#9b87f5] transition-colors"
          } font-roboto font-medium`}
          onClick={onClick}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Header;
