import "@/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "SpeedBin",
  description: "Paste a code snippet and share it with others!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
