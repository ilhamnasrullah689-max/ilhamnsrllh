"use client";

import { useEffect, useState } from "react";

interface Track {
  title: string;
  artists: string[];
}

// Playlist pop / indie / emo
const tracks: Track[] = [
  // Perunggu
  { title: "Kalibata, 2012", artists: ["Perunggu"] },
  { title: "Haru Paling Biru", artists: ["Perunggu"] },
  { title: "Amalan Baik", artists: ["Perunggu"] },
  { title: "Pikiran Yang Matang", artists: ["Perunggu"] },
  { title: "Gemilang", artists: ["Perunggu"] },
  { title: "33x", artists: ["Perunggu"] },
  { title: "Tapi", artists: ["Perunggu"] },

  // Bernadya
  { title: "Untungnya, Hidup Harus Tetap Berjalan", artists: ["Bernadya"] },
  { title: "Kini Mereka Tahu", artists: ["Bernadya"] },
  { title: "Apa Mungkin", artists: ["Bernadya"] },
  { title: "Teruslah", artists: ["Bernadya"] },

  // Killing Me Inside: Reunion
  { title: "Home", artists: ["Killing Me Inside: Reunion"] },
  { title: "Sometimes", artists: ["Killing Me Inside: Reunion"] },
  { title: "Forever", artists: ["Killing Me Inside"] },
  { title: "Diary of Pas Away", artists: ["Killing Me Inside"] },
  { title: "Jangan Pergi", artists: ["Killing Me Inside ft. Tiffany Orie"] },

  // Pamungkas
  { title: "To The Bone", artists: ["Pamungkas"] },
  { title: "One Only", artists: ["Pamungkas"] },
  { title: "Kenangan Manis", artists: ["Pamungkas"] },
  { title: "Flying Solo", artists: ["Pamungkas"] },

  // NIKI
  { title: "Heirloompain", artists: ["NIKI"] },
  { title: "Lullaby", artists: ["NIKI"] },
  { title: "La La Lost You", artists: ["NIKI"] },
  { title: "Lowkey", artists: ["NIKI"] },
  { title: "Indigo", artists: ["NIKI"] },

  // Troye Sivan
  { title: "Youth", artists: ["Troye Sivan"] },
  { title: "The Good Side", artists: ["Troye Sivan"] },
  { title: "Easy", artists: ["Troye Sivan"] },

  // Lord Huron
  { title: "The Night We Met", artists: ["Lord Huron"] },
  { title: "Time to Run", artists: ["Lord Huron"] },
  { title: "Fool for Love", artists: ["Lord Huron"] },

  // Bastille
  { title: "Into The Night", artists: ["Bastille"] },
  { title: "Pompeii", artists: ["Bastille"] },
  { title: "Good Grief", artists: ["Bastille"] },

  // Emo Pop tambahan
  { title: "Ocean Eyes", artists: ["Billie Eilish"] },
  { title: "Lost Cause", artists: ["Billie Eilish"] },
  { title: "Before You Go", artists: ["Lewis Capaldi"] },
  { title: "Someone You Loved", artists: ["Lewis Capaldi"] },
  { title: "Cherry Wine", artists: ["Hozier"] },
];

export default function RecentlyPlayed() {
  const [track, setTrack] = useState<Track | null>(null);
  const intervalTime = 60 * 1000; // 60 detik

  useEffect(() => {
    // Set track random pertama di client
    setTrack(tracks[Math.floor(Math.random() * tracks.length)]);

    // Interval auto ganti tiap 60 detik
    const id = setInterval(() => {
      setTrack(prev => {
        let newTrack;
        do {
          newTrack = tracks[Math.floor(Math.random() * tracks.length)];
        } while (prev && newTrack.title === prev.title);
        return newTrack;
      });
    }, intervalTime);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex justify-center mt-28">
      <div className="relative max-w-[420px] p-3 flex items-start gap-3 rounded-2xl bg-transparent border-none">
        {/* Logo Spotify */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="Spotify Logo"
          className="w-5 h-5 mt-1"
        />
        <div className="flex flex-col mt-0">
          <span className="text-xs text-zinc-400">
            Recently Played . Offline
          </span>
          <div className="flex gap-2 items-center mt-1">
            {track ? (
              <>
                <span className="text-sm text-zinc-100 font-medium truncate">
                  {track.title}
                </span>
                <span className="text-sm text-zinc-400 truncate">
                  - {track.artists.join(", ")}
                </span>
              </>
            ) : (
              <span className="text-sm text-zinc-400">Loading...</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
