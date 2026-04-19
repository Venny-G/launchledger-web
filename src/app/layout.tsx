import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "LaunchLedger | Software for Clustered Electric Propulsion Systems",
    template: "%s | LaunchLedger",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "LaunchLedger",
    "clustered electric propulsion",
    "Hall-effect thrusters",
    "plume interaction",
    "thruster spacing",
    "spacecraft integration",
  ],
  openGraph: {
    title: "LaunchLedger | Software for Clustered Electric Propulsion Systems",
    description: siteConfig.extendedDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchLedger",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={body.variable}>
      <body className="font-sans antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cyan focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate"
        >
          Skip to content
        </a>
        <div className="page-lines relative isolate overflow-hidden">
          <SiteHeader />
          <main id="content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
