import { useState, useEffect } from "react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-purple-500/20 transition duration-300">
            C
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white group-hover:text-gray-200 transition">
            ChaeDoesEdit
          </h1>
        </div>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {["Home", "About", "Work"].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <button className="hidden md:block px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Pricing
          </button>
        </div>
      </div>
    </nav>
  );
}