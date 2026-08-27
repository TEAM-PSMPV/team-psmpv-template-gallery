import type { Metadata } from "next";
import "./globals.css";
import "./bento.css";

export const metadata: Metadata = {
  title: "TEAM-PSMPV Design Templates",
  description: "Explore TEAM-PSMPV website design templates by industry.",
  applicationName: "TEAM-PSMPV Template Gallery",
  icons: { icon: "/team-psmpv-logo.png", shortcut: "/team-psmpv-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
