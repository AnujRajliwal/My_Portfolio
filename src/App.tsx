/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ParticleBackground } from "./components/ParticleBackground";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Internships } from "./components/Internships";
import { Education } from "./components/Education";
import { ResumePrint } from "./components/ResumePrint";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen relative font-sans select-none overflow-x-hidden selection:bg-purple-500/30 selection:text-white print:bg-white print:text-black">
      {/* Particle background effect (for desktop/web views) */}
      <div className="print:hidden">
        <ParticleBackground />
      </div>

      {/* Screen layout */}
      <div className="flex flex-col min-h-screen print:hidden">
        {/* Sticky Header Nav */}
        <Header />

        {/* Content Modules */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Internships />
          <Projects />
          <Education />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Structured ATS print-only representation */}
      <ResumePrint />
    </div>
  );
}

