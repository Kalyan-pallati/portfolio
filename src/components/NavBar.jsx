import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // Close the mobile menu automatically when a link is clicked
    setIsMobileMenuOpen(false); 
    
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Work", id: "work" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMobileMenuOpen
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 cursor-pointer group z-50"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-purple-500/20 transition duration-300">
            C
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white group-hover:text-gray-200 transition">
            ChaeDoesEdit
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium text-gray-400">
            {navLinks.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-white cursor-pointer transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection("pricing")}
            className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            Pricing
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            // Close (X) Icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Menu Icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 py-6" : "max-h-0 py-0 border-transparent"
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          <ul className="flex flex-col items-center gap-6 text-base font-medium text-gray-400 w-full">
            {navLinks.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-white cursor-pointer transition-colors duration-200 w-full text-center"
              >
                {item.label}
              </li>
            ))}
          </ul>
          
          <button
            onClick={() => scrollToSection("pricing")}
            className="w-full max-w-xs px-5 py-3 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors mt-2"
          >
            Pricing
          </button>
        </div>
      </div>
    </nav>
  );
}