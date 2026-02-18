"use client";

import { useEffect, useState } from "react";

interface Track {
  name: string;
  artist: string;
  url: string;
  thumb: string;
}

export default function TrackCard() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [current, setCurrent] = useState(0);

  const fetchTracks = async () => {
    try {
      const res = await fetch("/api/spotify/recently-played");
      const data = await res.json();
      if (data.tracks) setTracks(data.tracks);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTracks();
    const refreshInterval = setInterval(fetchTracks, 60000); // refresh setiap 60s
    return () => clearInterval(refreshInterval);
  }, []);

  useEffect(() => {
    const rotate = setInterval(() => {
      setCurrent((prev) => (tracks.length ? (prev + 1) % tracks.length : 0));
    }, 10000);
    return () => clearInterval(rotate);
  }, [tracks]);

  if (!tracks.length) return <p className="text-xs text-zinc-400">Loading...</p>;

  const track = tracks[current];

  return (
    <div className="bg-zinc-900 rounded-2xl p-4 float flex items-center justify-between gap-3 hover:shadow-lg transition">
      <div className="flex items-center gap-3">
        <img src={track.thumb} className="w-14 h-14 rounded object-cover bg-zinc-800" />
        <div>
          <h4 className="text-sm font-medium">{track.name}</h4>
          <p className="text-xs text-zinc-400">{track.artist}</p>
        </div>
      </div>
      <a href={track.url} target="_blank" className="text-xs px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 transition">
        Open in Spotify
      </a>
    </div>
  );
}
