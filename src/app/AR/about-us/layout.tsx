import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yess - About Us",
  description: "Yess - About Us",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <> {children}</>;
}
