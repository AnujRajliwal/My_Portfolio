import { motion } from "motion/react";
import { ArrowRight, Download, FileText, Sparkles, GraduationCap, Medal } from "lucide-react";
import { resumeData } from "../data";
import { TypingEffect } from "./TypingEffect";

export function Hero() {
  const handlePrint = () => {
    window.print();
  };

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-12 md:py-20 px-4 md:px-8 border-b border-stone-800/20"
    >
      {/* Visual lighting background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-purple-500/10 blur-[90px] pointer-events-none -z-10" />

      <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Academic Excellence Badge (Key Resume Achievement Highlight) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium tracking-wide mb-6 md:mb-8 backdrop-blur-sm shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          <span className="text-stone-300">Featured Milestone:</span> 
          <span className="font-bold text-white flex items-center gap-1">
            <Medal className="w-3.5 h-3.5 text-yellow-400" />
            98% Academic Record
          </span>
        </motion.div>

        {/* Hero Headers */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-mono text-stone-400 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4"
        >
          Hi, My name is
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          {resumeData.name}
        </motion.h1>

        {/* Typing Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-lg sm:text-xl md:text-3xl font-medium tracking-tight mb-8 md:mb-10 text-stone-100 font-sans h-[1.6em]"
        >
          <span>An aspiring </span>
          <TypingEffect />
        </motion.div>

        {/* Brief Pitch (derived only from objective / details) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="max-w-2xl text-stone-400 text-sm md:text-base leading-relaxed tracking-wide mb-10 md:mb-12 text-center font-sans font-light"
        >
          {resumeData.objective} Exploring new technologies and building robust AI tools, database systems, and enterprise components.
        </motion.p>

        {/* Highlight Banner of Core Academic Credentials */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl w-full mb-12"
        >
          <div className="bg-stone-900/45 hover:bg-stone-900/60 transition-colors border border-stone-800/50 p-4 rounded-xl text-left backdrop-blur-sm flex items-start gap-3">
            <GraduationCap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold">Graduation Track</p>
              <h4 className="text-white text-xs font-semibold font-sans mt-0.5 leading-snug">Graduation: CGPA 7.5</h4>
              <p className="text-[11px] text-stone-400 leading-normal mt-0.5">Arya College of Engineering (B.Tech AI & Data Science)</p>
            </div>
          </div>

          <div className="bg-stone-900/45 hover:bg-stone-900/60 transition-colors border border-stone-800/50 p-4 rounded-xl text-left backdrop-blur-sm flex items-start gap-3">
            <Medal className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold">Academic Distinction</p>
              <h4 className="text-white text-xs font-semibold font-sans mt-0.5 leading-snug">Secondary Score: 98%</h4>
              <p className="text-[11px] text-stone-400 leading-normal mt-0.5">Board of Secondary Education Haryana Academic Topper</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-7 rounded-xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm"
          >
            Explore Portfolio
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-stone-900 text-stone-300 hover:text-white border border-stone-800 hover:border-stone-700 py-3 px-7 rounded-xl hover:bg-stone-800/80 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm"
          >
            <Download className="w-4 h-4 text-stone-400" />
            Download Actionable Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
}
