import { motion } from "motion/react";
import { User, Calendar, Globe, Languages, Target } from "lucide-react";
import { resumeData } from "../data";

export function About() {
  return (
    <section 
      id="about" 
      className="py-16 md:py-24 px-4 md:px-8 border-b border-stone-800/10 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold mb-2.5"
          >
            <User className="w-3.5 h-3.5" />
            Candidate Overview
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl font-extrabold tracking-tight text-white"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Objective Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 bg-stone-900/40 border border-stone-800/60 p-6 md:p-8 rounded-2xl flex flex-col justify-between backdrop-blur-sm shadow-md"
          >
            <div>
              <div className="flex items-center gap-2.5 text-blue-400 mb-4">
                <Target className="w-5 h-5 text-blue-300" />
                <h3 className="font-sans font-bold text-lg text-white">Career Objective</h3>
              </div>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light">
                "{resumeData.objective}"
              </p>
            </div>
            
            <div className="pt-6 border-t border-stone-800/50 mt-6 text-stone-400 text-xs font-mono leading-relaxed">
              * Dedicated to writing performant Python scripts, SQL aggregations, and building workflows for cloud platforms.
            </div>
          </motion.div>

          {/* Quick Particulars Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 bg-gradient-to-b from-stone-900/50 to-stone-900/20 border border-stone-800/60 p-6 md:p-8 rounded-2xl flex flex-col justify-center backdrop-blur-sm"
          >
            <h3 className="font-sans font-bold text-lg text-white mb-6 flex items-center gap-2.5">
              <span className="w-1.5 h-4 bg-purple-500 rounded-full" />
              Personal Profile
            </h3>

            <div className="space-y-4 font-sans text-sm">
              <div className="flex items-start gap-3.5">
                <Calendar className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-400 text-xs uppercase tracking-wider font-mono">Date of Birth</p>
                  <p className="text-white font-medium mt-0.5">{resumeData.personal.dob}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Globe className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-400 text-xs uppercase tracking-wider font-mono">Nationality</p>
                  <p className="text-white font-medium mt-0.5">{resumeData.personal.nationality}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Languages className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-400 text-xs uppercase tracking-wider font-mono">Languages Spoken</p>
                  <p className="text-white font-medium mt-0.5">
                    {resumeData.personal.languages.join(" & ")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
