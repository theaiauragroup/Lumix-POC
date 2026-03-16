import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumix Studio | Hot Yoga & Reformer Pilates — Palmdale, CA",
  description: "Lumix Studio is Palmdale's premier hot yoga and reformer Pilates studio. Modern Reformer, Hot Yoga Sculpt, Hot Yoga Flow, and Hot Mat Pilates classes daily. Book your first class.",
  keywords: "hot yoga Palmdale, reformer Pilates Palmdale, yoga studio Antelope Valley, Pilates classes near me, Lumix Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
