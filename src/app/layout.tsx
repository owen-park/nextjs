import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OWEN APP",
  description: "Generated app by owen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
