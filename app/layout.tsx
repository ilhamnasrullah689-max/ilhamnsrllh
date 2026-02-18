import "leaflet/dist/leaflet.css"; // WAJIB untuk leaflet
import "./globals.css";

export const metadata = {
  title: "Ilham Nasrullah",
  description: "Fresh DevOps Engineer based in Malang, Indonesia.",
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
