import { useEffect, useState } from "react";
import placeholder from "../assets/placeholder.jpeg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-purple-500/20 transition duration-300">
            C
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white group-hover:text-gray-200 transition">
            ChaeDoesEdit
          </h1>
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Work", id: "work" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative cursor-pointer hover:text-white transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => scrollToSection("pricing")}
            className="hidden md:block px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            Pricing
          </button>
        </div>
      </div>
    </nav>

        <section id="home" className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 lg:pt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
              Hello, I’m Chae
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Crafting Visuals <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                That Resonate.
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              I help creators and brands transform raw footage into high-impact narratives that grab attention, retain viewers, and drive conversions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition transform duration-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                View Work
              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 hover:border-white text-white font-medium transition duration-200">
                Contact Me
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-[28rem] md:w-96 md:h-[34rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-[2rem] blur-2xl opacity-40 rotate-6 transform"></div>
              <div className="absolute inset-0 border border-white/10 rounded-[2rem] bg-[#1a1a1a] overflow-hidden rotate-0 transform transition hover:-rotate-1 duration-500">
                <img
                  src={placeholder}
                  alt="Chae portrait"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-purple-500"></span>
                About Me
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                I specialize in <span className="text-white font-medium">short-form content</span> and social-first video editing. My focus is on clean cuts, smooth transitions, rhythm, and storytelling that keeps viewers watching until the very last second.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Reel Editing</h3>
              <p className="text-gray-400 leading-relaxed">
                High-retention Instagram & YouTube Shorts edits designed for maximum reach and engagement.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Transitions & FX</h3>
              <p className="text-gray-400 leading-relaxed">
                Seamless transitions, dynamic motion graphics, and polished visual flow to keep the energy high.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-pink-500/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Color Grading</h3>
              <p className="text-gray-400 leading-relaxed">
                Cinematic color correction and platform-optimized grading to make your footage pop.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Selected Work
              </h2>
              <p className="text-gray-400 max-w-xl text-base">
                A selection of my recent edits and full portfolio.
              </p>
            </div>
            <a href="https://drive.google.com/drive/folders/1Sg0K3_gUdi97HNqKiVVnbBGW4a6Xw-Ak?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2 group transition-colors text-sm">
              View All Projects 
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://www.instagram.com/reel/DTDgtfXk1Nr/?igsh=cWxpd3FyOXBkejRo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-48 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 hover:border-purple-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-5 opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </div>
              <div className="z-10">
                <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-600/40 transition-colors">
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors">
                  Instagram Reel #1
                </h3>
                <p className="text-gray-500 text-xs group-hover:text-gray-300 transition-colors">
                  High-Energy / Short Form
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>

            <a
              href="https://www.instagram.com/reel/DRxCyiWEkmF/?igsh=ajl4Mm1ic3Rwemxs"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-48 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 hover:border-purple-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-5 opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </div>
              <div className="z-10">
                <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-600/40 transition-colors">
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors">
                  Instagram Reel #2
                </h3>
                <p className="text-gray-500 text-xs group-hover:text-gray-300 transition-colors">
                  Creator / Storytelling
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>

            <a
              href="https://drive.google.com/drive/folders/1Sg0K3_gUdi97HNqKiVVnbBGW4a6Xw-Ak?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-48 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 hover:border-blue-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-5 opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </div>
              <div className="z-10">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600/40 transition-colors">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                </div>
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">
                  Full Portfolio
                </h3>
                <p className="text-gray-500 text-xs group-hover:text-gray-300 transition-colors">
                  Google Drive (All Projects)
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </section>

        <section id="pricing" className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pricing
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
            Flexible packages designed for creators and brands at different stages.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* STARTER */}
            <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-gray-400 mb-6 text-sm">
                Perfect for trying out my editing style.
            </p>

            <div className="text-4xl font-extrabold mb-6">
                ₹4000
                <span className="text-base font-medium text-gray-400"> / 3 REELS</span>
            </div>

            <ul className="space-y-3 text-sm text-gray-300 mb-8">
                <li>• Clean cuts </li>
                <li>• Music Sync</li>
                <li>• Basic transitions</li>
                <li>• 2 revisions</li>
            </ul>
            </div>

            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/40 scale-[1.02] shadow-[0_0_40px_rgba(168,85,247,0.2)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-black text-xs font-bold rounded-full">
                BEST SELLER
            </div>

            <h3 className="text-xl font-bold mb-2">Creator</h3>
            <p className="text-gray-300 mb-6 text-sm">
                Best for consistent content and growth.
            </p>

            <div className="text-4xl font-extrabold mb-6">
                ₹6500
                <span className="text-base font-medium text-gray-300"> / 5 REELS</span>
            </div>

            <ul className="space-y-3 text-sm text-gray-200 mb-8">
                <li>• Smooth transitions</li>
                <li>• Color Correction</li>
                <li>• Captions Included</li>
                <li>• 3 revisions</li>
            </ul>
            </div>

            <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Growth</h3>
            <p className="text-gray-400 mb-6 text-sm">
                For brands and high-volume creators.
            </p>

            <div className="text-4xl font-extrabold mb-6">
                ₹12000
                <span className="text-base font-medium text-gray-300"> / 10 REELS</span>
            </div>

            <ul className="space-y-3 text-sm text-gray-300 mb-8">
                <li>• Advanced Transitions</li>
                <li>• Color Grading</li>
                <li>• Captions + Effects</li>
                <li>• Prioirty Dlivery</li>
                <li>• 5 revisions</li>
            </ul>
            </div>
            </div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let’s Work Together
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
                Got a project or need consistent edits?  
                Reach out through any of these.
            </p>

            <div className="flex justify-center gap-12">
                <a
                href="https://www.instagram.com/chaithanya.vuppala"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
                >
                <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600/40 transition-all duration-300 group-hover:scale-110">
                    <FaInstagram className="text-purple-400 text-2xl" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-purple-400 transition">
                    Instagram
                </span>
                </a>

                <a
                href="mailto:chaedoesedit@gmail.com"
                className="group flex flex-col items-center gap-3"
                >
                <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/40 transition-all duration-300 group-hover:scale-110">
                    <MdEmail className="text-blue-400 text-2xl" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-blue-400 transition">
                    Email
                </span>
                </a>
                <a
                href="https://wa.me/918074589862"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
                >
                <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center group-hover:bg-green-600/40 transition-all duration-300 group-hover:scale-110">
                    <FaWhatsapp className="text-green-400 text-2xl" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-green-400 transition">
                    WhatsApp
                </span>
                </a>

            </div>
            </section>

      </div>
    </div>
  );
}