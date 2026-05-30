import { resumeData } from "../data";

export function ResumePrint() {
  return (
    <div 
      id="printable-ats-resume"
      className="hidden print:block print:p-8 print:text-black print:bg-white text-stone-900 text-xs leading-relaxed max-w-[800px] mx-auto bg-white font-serif"
    >
      {/* Header */}
      <div className="text-center border-b-2 border-stone-800 pb-3 mb-4">
        <h1 className="text-2xl font-bold tracking-tight uppercase mb-1">{resumeData.name}</h1>
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 text-[10px] text-stone-700 font-sans">
          <span>Email: {resumeData.email}</span>
          <span>•</span>
          <span>LinkedIn: linkedin.com/in/anuj-1a201230b</span>
          <span>•</span>
          <span>GitHub: github.com/AnujRajliwal</span>
        </div>
      </div>

      {/* Career Objective */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-stone-400 pb-0.5 mb-1.5">Career Objective</h2>
        <p className="text-[10px] text-stone-800 text-justify">{resumeData.objective}</p>
      </div>

      {/* Technical Skills */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-stone-400 pb-0.5 mb-1.5">Technical Skills</h2>
        <div className="text-[10px] text-stone-800">
          <strong>Programming & Database:</strong> Python programming (with Pandas, NumPy, visualization), SQL (SQLite, DuckDB joins/aggregations), JAVA (OOP basics), Linux command utilities.
        </div>
      </div>

      {/* Academic Qualifications */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-stone-400 pb-0.5 mb-1.5">Educational Qualifications</h2>
        <table className="w-full text-left text-[10px] border-collapse">
          <thead>
            <tr className="border-b border-stone-300 font-bold">
              <th className="py-1">Degree/Course</th>
              <th className="py-1">Institution</th>
              <th className="py-1">University/Board</th>
              <th className="py-1 text-right">Score</th>
            </tr>
          </thead>
          <tbody>
            {resumeData.education.map((edu) => (
              <tr key={edu.level} className="border-b border-stone-200">
                <td className="py-1 font-semibold">{edu.level}</td>
                <td className="py-1">{edu.school.replace(", Jhajjar, Haryana", "").replace(", Charkhi Dadri, Haryana", "")}</td>
                <td className="py-1">{edu.affiliation}</td>
                <td className="py-1 text-right font-semibold">{edu.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Internships */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-stone-400 pb-0.5 mb-1.5">Professional Internships</h2>
        <div className="space-y-2.5">
          {resumeData.internships.map((intern) => (
            <div key={intern.role} className="text-[10px] text-stone-800">
              <div className="flex justify-between font-semibold mb-0.5">
                <span>{intern.role}</span>
                <span>{intern.duration}</span>
              </div>
              <div className="italic text-stone-600 text-[9px] mb-1">{intern.company}</div>
              <ul className="list-disc pl-4 space-y-0.5 text-[9px]">
                {intern.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-stone-400 pb-0.5 mb-1.5">Academic projects</h2>
        <div className="space-y-3">
          {resumeData.projects.map((proj) => (
            <div key={proj.title} className="text-[10px] text-stone-800">
              <div className="flex justify-between font-semibold mb-0.5">
                <span>{proj.title}</span>
                <span className="text-[9px] text-stone-600 font-normal">Technologies: {proj.tech.join(", ")}</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-[9px]">
                {proj.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Extracurricular Activities */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-stone-400 pb-0.5 mb-1.5">Extra Curricular Activities</h2>
        <ul className="list-disc pl-4 space-y-1 text-[10px] text-stone-800">
          <li><strong>Hackathons Participated:</strong> Code-E-Manipal, Hack Arya Verse</li>
          <li><strong>Project Exhibitions:</strong> Project Expo once representation under JECRC Foundation</li>
        </ul>
      </div>

      {/* Personal Particulars */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-stone-400 pb-0.5 mb-1.5">Personal Details</h2>
        <table className="w-full text-left text-[10px] max-w-sm">
          <tbody>
            <tr>
              <td className="py-0.5 font-bold w-1/3">Date of Birth:</td>
              <td className="py-0.5">{resumeData.personal.dob}</td>
            </tr>
            <tr>
              <td className="py-0.5 font-bold">Nationality:</td>
              <td className="py-0.5">{resumeData.personal.nationality}</td>
            </tr>
            <tr>
              <td className="py-0.5 font-bold">Languages Known:</td>
              <td className="py-0.5">{resumeData.personal.languages.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-[8px] text-stone-400 text-center mt-6 border-t border-stone-200 pt-2 font-sans">
        * Autogenerated on-demand from Anuj's Interactive Academic Portfolio. Certified content is accurate as of February 2026.
      </div>
    </div>
  );
}
