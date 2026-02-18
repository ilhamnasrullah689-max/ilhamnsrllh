"use client";

import dynamic from "next/dynamic";

// Dynamic import MapInner supaya hanya render di client
const MapInner = dynamic(() => import("./MapInner"), { ssr: false });

export default function MapCard() {
  return (
    <div className="w-[40%] bg-zinc-900 rounded-2xl overflow-hidden h-[140px] float">
      <MapInner />
    </div>
  );
}
