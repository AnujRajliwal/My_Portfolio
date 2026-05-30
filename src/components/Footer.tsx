import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { resumeData } from "../data";

export function Footer() {
  const handleScrollToTop = () => {
    const el = document.getElementById("hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-850/50 py-12 px-4 md:px-8 print:hidden text-stone-500 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Credits */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
            <span className="text-white font-bold tracking-tight text-sm uppercase font-mono">{resumeData.name}</span>
          </div>
          <p className="text-xs text-stone-400 mt-2 font-light">
            AI & Data Science Student Portfolio. Accurate per resume records.
          </p>
        </div>

        {/* Middle: Profiles Linkages */}
        <div className="flex items-center gap-6">
          <a
            href={resumeData.github}
            target="_blank"
            rel="noreferrer"
            className="text-stone-400 hover:text-white transition-colors"
            title="GitHub Portfolio"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={resumeData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-stone-400 hover:text-white transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${resumeData.email}`}
            className="text-stone-400 hover:text-white transition-colors"
            title="Direct Contact Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Right Side: Back to top button */}
        <button
          onClick={handleScrollToTop}
          className="flex items-center gap-2 text-xs text-stone-450 hover:text-white transition-colors p-2 bg-stone-900 border border-stone-800 rounded-lg cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 text-purple-400" />
          Scroll up
        </button>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-stone-900 text-center text-[10px] text-stone-600 font-light font-mono">
        &copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}
