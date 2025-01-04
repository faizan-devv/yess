import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yess - AR Solutions",
  description: "Yess - AR Solutions",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <> {children}</>;
}
