"use client";

import { useEffect, useState } from "react";

interface Track {
  title: string;
  artists: string[];
}

const tracks: Track[] = [
  // Perunggu
  { title: "Kalibata, 2012", artists: ["Perunggu"] },
  { title: "Haru Paling Biru", artists: ["Perunggu"] },
  { title: "Sampai Habis", artists: ["Perunggu"] },
  { title: "Langkah", artists: ["Perunggu"] },
  { title: "Gelap", artists: ["Perunggu"] },

  // Rumahsakit
  { title: "Pop Kinetik", artists: ["Rumahsakit"] },
  { title: "Duniawi", artists: ["Rumahsakit"] },
  { title: "Anomali", artists: ["Rumahsakit"] },

  // Killing Me Inside
  { title: "Home", artists: ["Killing Me Inside: Reunion"] },
  { title: "Sometimes", artists: ["Killing Me Inside: Reunion"] },
  { title: "Forever", artists: ["Killing Me Inside"] },

  // Saosin
  { title: "7 Years", artists: ["Saosin"] },

  // Pamungkas
  { title: "To The Bone", artists: ["Pamungkas"] },

  // NIKI
  { title: "Heirloompain", artists: ["NIKI"] },
  { title: "Lullaby", artists: ["NIKI"] },
  { title: "La La Lost You", artists: ["NIKI"] },
  { title: "Lowkey", artists: ["NIKI"] },

  // Bastille
  { title: "Into The Night", artists: ["Bastille"] },

  // Lord Huron
  { title: "The Night We Met", artists: ["Lord Huron"] },

  // Troye Sivan
  { title: "Youth", artists: ["Troye Sivan"] },

  // Ruth B.
  { title: "Lost Boy", artists: ["Ruth B."] },

  // Aquilo
  { title: "Silhouette", artists: ["Aquilo"] },

  // The Weeknd
  { title: "Call Out My Name", artists: ["The Weeknd"] },

  // Olivia Rodrigo
  { title: "Drivers License", artists: ["Olivia Rodrigo"] },

  // Hozier
  { title: "Cherry Wine", artists: ["Hozier"] },

  // Lewis Capaldi
  { title: "Before You Go", artists: ["Lewis Capaldi"] },
  { title: "Someone You Loved", artists: ["Lewis Capaldi"] },

  // Billie Eilish
  { title: "Ocean Eyes", artists: ["Billie Eilish"] },

  // Ed Sheeran
  { title: "Happier", artists: ["Ed Sheeran"] },

  // Taylor Swift
  { title: "Red", artists: ["Taylor Swift"] },
  { title: "All Too Well", artists: ["Taylor Swift"] },

  // John Mayer
  { title: "New Light", artists: ["John Mayer"] },

  // Bonus lagu lain untuk variasi
  { title: "Gravity", artists: ["John Mayer"] },
  { title: "Slow Dancing in a Burning Room", artists: ["John Mayer"] },
  { title: "Something in the Way", artists: ["Nirvana"] },
  { title: "Yellow", artists: ["Coldplay"] },
  { title: "Fix You", artists: ["Coldplay"] },
];


export default function RecentlyPlayed() {
  const [track, setTrack] = useState<Track>(tracks[0]);
  const intervalTime = 60 * 1000;

  useEffect(() => {
    const id = setInterval(() => {
      const randomTrack =
        tracks[Math.floor(Math.random() * tracks.length)];
      setTrack(randomTrack);
    }, intervalTime);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex justify-center mt-28"> {/* card turun lebih bawah */}
      <div className="relative max-w-[420px] p-3 flex items-start gap-3 rounded-2xl bg-transparent border-none">
        
        {/* Spotify Logo kecil */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="Spotify Logo"
          className="w-5 h-5 mt-1"
        />

        {/* Text container hampir sejajar dengan logo */}
        <div className="flex flex-col mt-0">
          <span className="text-xs text-zinc-400">
            Recently Played · Offline
          </span>

          <div className="flex gap-2 items-center mt-1">
            <span className="text-sm text-zinc-100 font-medium truncate">
              {track.title}
            </span>
            <span className="text-sm text-zinc-400 truncate">
              - {track.artists.join(", ")}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
