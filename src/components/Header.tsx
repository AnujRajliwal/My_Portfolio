import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText, Menu, X } from "lucide-react";
import { resumeData } from "../data";

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }

      // Track active section
      const sections = ["hero", "about", "skills", "experience", "projects", "education"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const navItems = [
    { label: "Overview", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Internships", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 z-[100] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <header 
        id="sticky-navbar"
        className="sticky top-0 left-0 w-full z-40 backdrop-blur-md bg-stone-950/70 border-b border-stone-800/40 print:hidden transition-all duration-300"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo element */}
          <div 
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-md shadow-purple-500/10 group-hover:scale-105 transition-transform">
              A
            </div>
            <span className="font-sans font-bold text-lg tracking-tight bg-gradient-to-r from-white to-stone-300 bg-clip-text text-transparent group-hover:text-white transition-colors">
              {resumeData.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-sans text-sm font-medium tracking-wide transition-colors relative py-1.5 cursor-pointer ${
                  activeSection === item.id 
                    ? "text-blue-400 font-semibold" 
                    : "text-stone-400 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={resumeData.github}
              target="_blank"
              rel="noreferrer"
              className="p-1 px-1 text-stone-400 hover:text-white hover:scale-105 transition-all"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1 px-1 text-stone-400 hover:text-white hover:scale-105 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${resumeData.email}`}
              className="p-1 px-1 text-stone-400 hover:text-white hover:scale-105 transition-all"
              title="Send Inquiry"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-semibold tracking-wide py-2 px-4 rounded-lg shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center justify-center p-2 text-stone-400 hover:text-white cursor-pointer"
              title="Download Resume"
            >
              <FileText className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-400 hover:text-white hover:bg-stone-900/50 rounded-lg cursor-pointer transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-800/50 bg-stone-950/95 backdrop-blur-xl px-4 py-4 space-y-3.5 shadow-xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? "bg-stone-900/85 text-blue-400 font-semibold"
                      : "text-stone-400 hover:bg-stone-900/40 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-5 pt-3 border-t border-stone-900 px-3">
              <a
                href={resumeData.github}
                target="_blank"
                rel="noreferrer"
                className="text-stone-400 hover:text-white"
              >
                <span className="flex items-center gap-1.5 text-xs font-sans">
                  <Github className="w-4 h-4" /> GitHub
                </span>
              </a>
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-stone-400 hover:text-white"
              >
                <span className="flex items-center gap-1.5 text-xs font-sans">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </span>
              </a>
              <a
                href={`mailto:${resumeData.email}`}
                className="text-stone-400 hover:text-white"
              >
                <span className="flex items-center gap-1.5 text-xs font-sans">
                  <Mail className="w-4 h-4" /> Email
                </span>
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold py-2.5 rounded-lg shadow-md cursor-pointer"
              >
                <FileText className="w-4.5 h-4.5" />
                Download / Print Resume
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
