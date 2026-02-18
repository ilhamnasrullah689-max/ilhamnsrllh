"use client";

import { Mail, Globe, MapPin } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] font-mono text-[#0b0b0c] flex justify-center p-4 sm:p-6 text-base">

      {/* BACK LINK */}
      <a
        href="/"
        className="fixed top-6 left-6 z-50 text-sm text-zinc-500 hover:text-zinc-800 transition"
      >
        ← back
      </a>

      {/* CONTAINER FLAT */}
      <div className="w-full max-w-[680px] mt-20 space-y-12 px-4 sm:px-6">

        {/* ABOUT */}
        <section className="space-y-4">
          <h1 className="text-xl sm:text-2xl font-medium tracking-tight">
            Ilham Nasrullah{" "}
            <span className="text-zinc-600 font-normal"> as a DevOps Engineer Jr.</span>
          </h1>

          <p className="leading-relaxed text-[#0b0b0c] text-sm sm:text-base">
            I focus on cloud infrastructure, containerization, and automating CI/CD pipelines to build reliable and scalable systems.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-zinc-600 justify-start">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Malang, Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>ilhamnasrullah689@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span>ilhamnsrllh.com</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold text-[#0b0b0c]">Skills</h2>
          <div className="flex flex-wrap gap-3 text-sm justify-start">
            {[
              "Linux Fundamentals",
              "Cloud Infrastructure",
              "Docker & Kubernetes",
              "CI/CD Pipelines",
              "Nginx & Apache",
              "React & Next.js",
              "Git & GitHub",
              "JavaScript & TypeScript"
            ].map(skill => (
              <span
                key={skill}
                className="px-2 py-1 rounded bg-[#e0e0e0] text-[#0b0b0c] text-xs sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold text-[#0b0b0c]">Work Experiences</h2>

          <p className="font-medium text-[#0b0b0c]">Libuzo Zenith Tech. | Fulltime</p>
          <p className="text-sm text-zinc-600">DevOps Engineer Jr. 2025 – Present</p>
          <p className="text-sm sm:text-base leading-relaxed text-[#0b0b0c]">
            Manage Linux servers, CI/CD pipelines, Docker/Kubernetes, and automation for reliable deployments.
          </p>
          <p className="text-sm text-zinc-500 italic">On going progress...</p>
        </section>

        {/* EDUCATION */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold text-[#0b0b0c]">Education</h2>
          <p className="text-sm sm:text-base text-[#0b0b0c]">
            State Islamic University - graduated 2021<br/>
            Bachelor’s Degree in Social Sciences Education
          </p>
        </section>

        {/* PROJECTS */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold text-[#0b0b0c]">Projects</h2>
          <p className="font-medium text-[#0b0b0c]">My Personal Website</p>
          <p className="text-sm sm:text-base leading-relaxed text-[#0b0b0c]">
            A personal website built with Next.js, TailwindCSS, TypeScript, and Node.
          </p>
        </section>

      </div>
    </main>
  );
}
