import { motion } from "motion/react";
import { Briefcase, Calendar, Award, Code, Presentation, Landmark, Trophy } from "lucide-react";
import { resumeData } from "../data";

export function Internships() {
  return (
    <section 
      id="experience" 
      className="py-16 md:py-24 px-4 md:px-8 border-b border-stone-800/10 bg-stone-900/10 relative"
    >
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Internships */}
          <div className="lg:col-span-7">
            {/* Heading */}
            <div className="mb-10 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold mb-2"
              >
                <Briefcase className="w-3.5 h-3.5" />
                Industry Exposure
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="font-display text-2xl md:text-3xl font-extrabold text-white"
              >
                Work & Internships Timeline
              </motion.h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full" />
            </div>

            {/* Timelines list */}
            <div className="space-y-8 relative pl-5 md:pl-7 border-l-2 border-stone-800/80">
              {resumeData.internships.map((intern, idx) => (
                <motion.div
                  key={intern.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative group bg-stone-900/30 hover:bg-stone-900/60 border border-stone-800/50 hover:border-blue-500/10 p-6 rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  {/* Glowing Node Dot */}
                  <span className="absolute -left-[27px] md:-left-[35px] top-7 w-4 h-4 rounded-full bg-stone-950 border-2 border-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)] group-hover:scale-125 transition-transform" />

                  {/* Header info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-base md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {intern.role}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-stone-400 font-medium">
                        {intern.company}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-900 border border-stone-800 rounded-full text-[10px] md:text-xs font-mono text-blue-300 font-semibold self-start md:self-center">
                      <Calendar className="w-3.5 h-3.5" />
                      {intern.duration}
                    </div>
                  </div>

                  {/* Bullet specifics - STRICTLY from resume */}
                  <ul className="space-y-2.5 text-stone-300 text-xs font-sans pl-1">
                    {intern.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Extracurricular Activities */}
          <div className="lg:col-span-5">
            {/* Heading */}
            <div className="mb-10 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-purple-400 font-bold mb-2"
              >
                <Award className="w-3.5 h-3.5" />
                Beyond Curriculum
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="font-display text-2xl md:text-3xl font-extrabold text-white"
              >
                Activities & Expos
              </motion.h2>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-3 rounded-full" />
            </div>

            {/* Activity Boxes */}
            <div className="space-y-6">
              {resumeData.extracurriculars.map((categoryItem, idx) => (
                <motion.div
                  key={categoryItem.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-stone-900/45 border border-stone-850 p-6 rounded-xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4 text-purple-400">
                    {categoryItem.category === "Hackathons" ? (
                      <div className="p-2.5 bg-purple-950/30 border border-purple-500/20 rounded-lg">
                        <Trophy className="w-5 h-5 text-purple-300" />
                      </div>
                    ) : (
                      <div className="p-2.5 bg-purple-950/30 border border-purple-500/20 rounded-lg">
                        <Presentation className="w-5 h-5 text-purple-300" />
                      </div>
                    )}
                    <h3 className="font-sans font-bold text-base text-white">{categoryItem.category}</h3>
                  </div>

                  <div className="space-y-2.5">
                    {categoryItem.events.map((event) => (
                      <div 
                        key={event}
                        className="flex items-center gap-2.5 p-2.5 bg-stone-900/40 border border-stone-800/30 rounded-lg"
                      >
                        <Code className="w-4 h-4 text-stone-500" />
                        <span className="text-stone-300 text-xs font-semibold font-sans">{event}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specific place details from header/bottom of resume for expo and college hackathons */}
                  <p className="text-[10px] text-stone-400 font-mono mt-4 text-right">
                    * Hosted/conducted at affiliated entities (RTU/JECRC/Arya Verse)
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
