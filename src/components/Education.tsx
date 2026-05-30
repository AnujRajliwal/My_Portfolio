import { motion } from "motion/react";
import { GraduationCap, Landmark, Award, BookOpen } from "lucide-react";
import { resumeData } from "../data";

export function Education() {
  return (
    <section 
      id="education" 
      className="py-16 md:py-24 px-4 md:px-8 border-b border-stone-800/10"
    >
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
            <BookOpen className="w-3.5 h-3.5" />
            Scholastic Profile
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl font-extrabold tracking-tight text-white"
          >
            Academic Foundations
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
        </div>

        {/* Academic pipeline Cards */}
        <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto">
          {resumeData.education.map((edu, idx) => (
            <motion.div
              key={edu.level}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-stone-900/40 hover:bg-stone-900/60 transition-all border border-stone-800/50 p-6 rounded-2xl md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-sm shadow-md"
            >
              <div className="flex items-start md:items-center gap-4">
                <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 flex-shrink-0 text-blue-400 mt-1 md:mt-0">
                  <GraduationCap className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-450 font-bold bg-indigo-950/40 text-indigo-300 border border-indigo-900/40 px-2 py-0.5 rounded-full">
                    {edu.level}
                  </span>
                  
                  <h3 className="font-sans font-bold text-base md:text-lg text-white mt-2.5">
                    {edu.school}
                  </h3>
                  
                  <p className="flex items-center gap-1.5 text-xs text-stone-400 mt-1 font-sans">
                    <Landmark className="w-3.5 h-3.5 text-stone-500" />
                    Affiliated to : {edu.affiliation}
                  </p>
                  
                  {edu.details && (
                    <p className="text-stone-300 text-xs mt-2 font-sans font-light">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>

              {/* Score Highlight Box */}
              <div className="md:text-right flex-shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-stone-800/40">
                <p className="text-[10px] font-mono tracking-wider text-stone-500 uppercase">Performance Mark</p>
                <div className="inline-flex items-center gap-1.5 mt-1 bg-gradient-to-r from-blue-950/40 to-purple-950/40 border border-blue-500/20 px-4 py-1.5 rounded-xl">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="font-sans font-extrabold text-base text-white">
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
