import MapCard from "./components/MapCard";
import RecentlyPlayed from "./components/RecentlyPlayed";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen text-[#e8e6df] flex justify-center relative overflow-hidden">

      {/* TITLE */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
  <h1 className="text-3xl font-semibold tracking-tight">
    ilhamnsrllh<span className="text-[#d4af37]">.</span>
  </h1>
</div>

      <div className="w-full max-w-[420px] p-3 mt-24">

        {/* ROW 1: PROFILE + MAP */}
        <div className="flex gap-3 mb-3">

          {/* PROFILE */}
          <div className="w-[60%] card rounded-2xl p-5 space-y-2 float card-hover">
            <h2 className="text-base font-medium">
              Ilham Nasrullah
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Software Engineer.<br />
              Design → Build → Ship.
            </p>
          </div>

          {/* MAPCARD */}
          <MapCard />

        </div>

        {/* ROW 2: RESUME + SOCIAL */}
        <div className="flex gap-3 mb-3">

          <a
            href="/resume"
            className="w-[40%] card rounded-2xl p-4 flex items-center justify-between card-hover"
          >
            <span className="text-zinc-400 text-sm">Resume</span>
            <span className="text-[#d4af37]">↗</span>
          </a>

          <div className="w-[60%] card rounded-2xl p-8 flex items-center justify-center gap-8 text-xl">

            <a
              href="mailto:ilhamnasrullah689@gmail.com"
              className="icon-hover"
            >
              <Mail size={20} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-hover"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-hover"
            >
              <Linkedin size={20} />
            </a>

          </div>

        </div>

        {/* ROW 3: RECENTLY PLAYED */}
        <div className="mt-16 flex justify-center">
          <RecentlyPlayed />
        </div>

      </div>
    </main>
  );
}
