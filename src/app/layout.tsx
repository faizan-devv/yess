import Providers from "../components/Providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yess - Home",
  description: "Yess - Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mui-color-scheme="dark">
      <body
        suppressHydrationWarning
        className="antialiased bg-[--background] text-[--foreground]"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
