"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapInner() {
  const [isMounted, setIsMounted] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  // Array warna neon
  const neonColors = ["#FFD700", "#00FFFF", "#FF69B4", "#39FF14", "#FF4500"];

  useEffect(() => {
    setIsMounted(true);

    // ganti warna tiap 14 detik
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % neonColors.length);
    }, 14000);

    return () => clearInterval(colorInterval);
  }, []);

  const { radius, opacity } = usePulseCircle();
  const koordinatMalang: [number, number] = [-7.96318, 112.60837];
  const currentColor = neonColors[colorIndex];

  if (!isMounted) return null;

  return (
    <MapContainer
      center={koordinatMalang}
      zoom={3} // zoom out supaya pulau Indonesia terlihat
      scrollWheelZoom={true}
      className="w-full h-full rounded-2xl"
      attributionControl={false}
      zoomControl={false}
    >
      {/* Dark silver / black map */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
      />

      {/* Lingkaran pulse neon */}
      <CircleMarker
        center={koordinatMalang}
        pathOptions={{
          color: currentColor,
          fillColor: currentColor,
          fillOpacity: opacity,
        }}
        radius={radius}
        eventHandlers={{
          click: () => setShowLabel((prev) => !prev),
        }}
      >
        {showLabel && (
          <Tooltip
            direction="bottom"
            permanent
            className="bg-[#0b0b0c] text-white px-2 py-1 rounded shadow-md text-xs font-semibold"
            offset={[0, 15]}
            interactive={false}
          >
            <span>Malang, Indonesia</span> {/* wrap teks pakai span */}
          </Tooltip>
        )}
      </CircleMarker>
    </MapContainer>
  );
}

// Hook pulse circle
function usePulseCircle() {
  const [radius, setRadius] = useState(8);
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    let growing = true;
    const interval = setInterval(() => {
      setRadius((r) => {
        if (r >= 14) growing = false;
        if (r <= 8) growing = true;
        return growing ? r + 0.5 : r - 0.5;
      });
      setOpacity((o) => (growing ? 0.15 : 0.3));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return { radius, opacity };
}
