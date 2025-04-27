import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 inline-block text-transparent bg-clip-text"
        >
          Portfolio
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 font-semibold hover:text-indigo-500 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <button className="ml-4 w-24 text-white font-semibold bg-gradient-to-r from-purple-400 to-blue-400 py-2 rounded-lg hover:shadow-lg transition-all">
            Resume
          </button>
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoIosClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-md">
          <nav className="flex flex-col items-start px-6 py-4 space-y-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)} // Close menu after click
                className="text-gray-700 font-semibold hover:text-indigo-500 transition-colors duration-200 w-full"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full text-white font-semibold bg-gradient-to-r from-purple-400 to-blue-400 py-2 rounded-lg hover:shadow-lg transition-all">
              Resume
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
