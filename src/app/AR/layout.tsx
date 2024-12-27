import type { Metadata } from "next";

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
      <body className="antialiased bg-[--background] text-[--foreground]">
        {children}
      </body>
    </html>
  );
}
