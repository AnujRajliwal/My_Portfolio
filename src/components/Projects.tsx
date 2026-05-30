import { motion } from "motion/react";
import { FolderGit2, Calendar, Layout, Link2, ExternalLink } from "lucide-react";
import { resumeData } from "../data";

export function Projects() {
  return (
    <section 
      id="projects" 
      className="py-16 md:py-24 px-4 md:px-8 border-b border-stone-800/10 relative"
    >
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold mb-2.5"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            Software Portfolio
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl font-extrabold tracking-tight text-white"
          >
            Featured Technical Projects
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resumeData.projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-stone-900/40 hover:bg-stone-950/60 border border-stone-800/60 hover:border-blue-500/30 p-6 md:p-8 rounded-2xl flex flex-col justify-between backdrop-blur-md hover:shadow-xl hover:shadow-blue-500/5 group transition-all duration-300"
            >
              <div>
                {/* File Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 group-hover:bg-gradient-to-br group-hover:from-blue-900/30 group-hover:to-purple-900/30 group-hover:border-blue-500/20 transition-all duration-300">
                    <Layout className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-stone-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    B.Tech Project
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {proj.title}
                </h3>

                {/* Core Description */}
                <p className="text-stone-300 text-xs md:text-sm leading-relaxed mb-6 font-light font-sans">
                  {proj.description}
                </p>

                {/* Detailed bullet points based STRICTLY on his resume */}
                <ul className="text-stone-400 text-xs space-y-2.5 mb-6 pl-1 font-sans">
                  {proj.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies used */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-800/50">
                  {proj.tech.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono text-blue-300 bg-blue-950/20 md:bg-blue-950/30 border border-blue-500/20 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prompt-based GitHub Callout displaying Anuj's real GitHub account link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-stone-900/20 max-w-md mx-auto py-4 px-6 rounded-xl border border-stone-800/40"
        >
          <span className="text-xs text-stone-400 font-light font-sans flex items-center justify-center gap-1.5">
            <Link2 className="w-4 h-4 text-purple-400" />
            Find more code exploration on my
            <a 
              href={resumeData.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4 flex items-center gap-0.5 inline-flex"
            >
              GitHub profile <ExternalLink className="w-3 h-3" />
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
