import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghostroute Security",
  description: "A mega app with seamless access to multiple mini apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
