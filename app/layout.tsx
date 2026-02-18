import "leaflet/dist/leaflet.css"; // WAJIB untuk leaflet
import "./globals.css";

export const metadata = {
  title: "ilhamnsrllh.",
  description: "Personal Website of Ilham Nasrullah",
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
