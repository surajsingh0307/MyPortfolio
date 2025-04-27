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
      className={`fixed lg:px-16 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 inline-block text-transparent bg-clip-text">
          Portfolio
        </a>
        <nav className="hidden sm:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 font-semibold hover:text-indigo-500 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <button className="w-20 text-white font-semibold bg-gradient-to-r from-purple-400 to-blue-400 p-2 rounded-lg hover:shadow-lg transition-all">
            Resume
          </button>
        </nav>

        {/* hamburger button for mobile */}

        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoIosClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}

      {menuOpen && (
        <nav className="bg-amber-50 sm:hidden flex flex-col items-start space-y-8 my-2 px-4 py-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 font-semibold hover:text-indigo-500 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <button className="w-full text-white font-semibold bg-gradient-to-r from-purple-400 to-blue-400 p-2 rounded-lg hover:shadow-lg transition-all">
            Resume
          </button>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
