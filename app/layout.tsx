import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "CV BeruangLaut.ID — Rekayasa Teknologi untuk Hari Ini dan Masa Depan",
  description:
    "CV BeruangLaut.ID — Kecerdasan Buatan, Robotika, Otomasi, IoT, Computer Vision, dan Rekayasa Perangkat Lunak.",
  keywords: [
    "BeruangLaut.ID",
    "Kecerdasan Buatan",
    "Robotika",
    "Otomasi",
    "IoT",
    "Computer Vision",
    "Rekayasa Perangkat Lunak",
  ],
  icons: {
    icon: "/114.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}