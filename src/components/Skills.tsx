import { motion } from "motion/react";
import { Terminal, Code2, Database, Layers, CheckCircle2 } from "lucide-react";

interface SkillItem {
  name: string;
  category: "Languages" | "Data & Systems" | "Platforms";
  percentage: number;
  description: string;
}

export function Skills() {
  const list: SkillItem[] = [
    {
      name: "Python Programming",
      category: "Languages",
      percentage: 85,
      description: "Writing scripts and utilizing scientific tools (Pandas, NumPy, Matplotlib) for data structures and custom visualization pipelines."
    },
    {
      name: "SQL & Databases",
      category: "Data & Systems",
      percentage: 82,
      description: "Handling relational queries, multi-table joins, complex aggregations, and tabular storage with SQLite and DuckDB."
    },
    {
      name: "JAVA",
      category: "Languages",
      percentage: 70,
      description: "Developing robust data solutions with primary Object-Oriented Programming (OOP) fundamentals."
    },
    {
      name: "Linux Systems",
      category: "Data & Systems",
      percentage: 75,
      description: "Configuring scripts and performing CLI actions with standard file structures and basic shell functions."
    },
    {
      name: "AI & ML Frameworks",
      category: "Platforms",
      percentage: 80,
      description: "Handling data preprocessing, structuring datasets, evaluating machine learning models, and training regression or classifier tasks."
    },
    {
      name: "Salesforce Cloud Apex",
      category: "Platforms",
      percentage: 75,
      description: "Configuring CRM triggers, formulating Apex core modules, and automating database workflow actions."
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-16 md:py-24 px-4 md:px-8 border-b border-stone-800/10 bg-stone-900/10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-purple-400 font-bold mb-2.5"
          >
            <Terminal className="w-3.5 h-3.5" />
            Capabilities Matrix
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl font-extrabold tracking-tight text-white"
          >
            Technical Stack & Skills
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Progress Bars */}
          <div className="space-y-6">
            <h3 className="font-sans font-bold text-lg text-white mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-400" />
              Core Competencies
            </h3>

            <div className="space-y-6">
              {list.map((skill, index) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between items-end">
                    <span className="font-sans font-semibold text-sm text-stone-200">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-blue-400 font-bold">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Dynamic Progress Bar */}
                  <div className="h-2 bg-stone-900 rounded-full overflow-hidden border border-stone-800/60">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full"
                    />
                  </div>
                  
                  <p className="text-[11px] text-stone-400 font-light leading-normal">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Focus Areas Cards */}
          <div className="flex flex-col justify-center space-y-6 lg:pl-6">
            <h3 className="font-sans font-bold text-lg text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-400" />
              Technical Domain Focus
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-stone-900/40 border border-stone-800/50 p-5 rounded-xl backdrop-blur-sm"
            >
              <h4 className="font-sans font-bold text-sm text-white mb-2 flex items-center gap-2">
                <Database className="w-4 h-4 text-purple-400" />
                Data & Database Engineering
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Possess robust proficiency structuring localized file database pipelines (SQLite, DuckDB). Proficient in formulating complex relational joins, aggregations, and visual charts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-stone-900/40 border border-stone-800/50 p-5 rounded-xl backdrop-blur-sm"
            >
              <h4 className="font-sans font-bold text-sm text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                Automation & Machine Learning
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Active capabilities in writing, cleaning, and sanitizing datasets in Python pipelines. Hands-on experience executing Salesforce automation scripts, apex validation, and modeling classifiers.
              </p>
            </motion.div>

            {/* Certifications & Framework badges */}
            <div className="pt-4">
              <h4 className="text-stone-400 text-xs font-mono uppercase tracking-wider mb-3">Associated Tools</h4>
              <div className="flex flex-wrap gap-2">
                {["NumPy", "Pandas", "Matplotlib", "SQLite", "DuckDB", "Apex", "Linux Shell", "ML Basics"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-stone-300 bg-stone-900 border border-stone-800 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
