import "leaflet/dist/leaflet.css"; // WAJIB untuk leaflet
import "./globals.css";

export const metadata = {
  title: "My Map App",
  description: "Map with React Leaflet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
