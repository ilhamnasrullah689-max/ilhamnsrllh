"use client";

import { Mail, Globe, MapPin } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] font-mono text-[#0b0b0c] flex justify-center p-3 sm:p-6 text-sm sm:text-base">

      {/* BACK LINK */}
      <a
        href="/"
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 text-xs sm:text-sm text-zinc-500 hover:text-zinc-800 transition"
      >
        ← back
      </a>

      {/* CONTAINER */}
      <div className="w-full max-w-xl mt-16 sm:mt-20 space-y-8 sm:space-y-12 px-3 sm:px-6">

        {/* ABOUT */}
        <section className="space-y-3 sm:space-y-4">
          <h1 className="text-lg sm:text-2xl font-medium tracking-tight leading-snug">
            Ilham Nasrullah{" "}
            <span className="text-zinc-600 font-normal">
              as a Software Engineer
            </span>
          </h1>

          <p className="leading-relaxed text-xs sm:text-base">
            Passionate about building efficient, scalable, and secure software solutions.
          </p>

          {/* CONTACT */}
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-zinc-600">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Malang, Indonesia</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>ilhamnasrullah689@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Globe size={14} />
              <span>ilhamnsrllh.com</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-xl font-semibold">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
            {["Next.js", "TailwindCSS", "TypeScript", "Node.js"
            ].map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 rounded bg-[#e0e0e0]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-xl font-semibold">
            Work Experiences
          </h2>

          <div className="space-y-2">
            <p className="font-medium">
              Libuzo Zenith Tech. | Fulltime
            </p>

            <p className="text-xs sm:text-sm text-zinc-600">
              Software Engineer 2025 – Present
            </p>

            <p className="leading-relaxed text-xs sm:text-base">
              Currently working on developing and maintaining web applications using Next.js, TailwindCSS, TypeScript, and Node.js.
            </p>

            <p className="text-xs text-zinc-500 italic">
              Ongoing progress...
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-xl font-semibold">
            Education
          </h2>

          <p className="leading-relaxed text-xs sm:text-base">
            State Islamic University — Graduated in 2021
            <br />
            Bachelor’s Degree in Social Sciences Edu.
          </p>
        </section>

        {/* PROJECTS */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-xl font-semibold">
            Projects
          </h2>

          <div className="space-y-2">
            <p className="font-medium">
              My Personal Website
            </p>

            <p className="leading-relaxed text-xs sm:text-base">
              A personal website built with Next.js, TailwindCSS,
              TypeScript, and Node.js.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
