
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { SoundProvider } from "@/components/providers/sound-provider";
import "./globals.css";
import { SITE_URL } from "@/constants";
import MouseEffects from "@/components/mouse-effects";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yitbarek.K — Full-stack Developer",
    template: "%s | Yitbarek.K",
  },
  description:
    "Yitbarek.K is a developer focused on full-stack web development, programming, databases, and building useful software.",
  keywords: [
    "Yitbarek",
    "Yitbarek.K",
    "Full-stack Developer",
    "Web Developer",
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "MySQL",
    "Web Development",
    "Software Development",
  ],
  authors: [{ name: "Yitbarek.K" }],
  creator: "Yitbarek.K",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Yitbarek.K — Full-stack Developer",
    description:
      "Explore Yitbarek.K's projects, programming skills, and software development journey.",
    siteName: "Yitbarek.K",
    images: [
      {
        url: "/me.webp",
        width: 1200,
        height: 630,
        alt: "Yitbarek.K — Full-stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yitbarek.K — Full-stack Developer",
    description:
      "Explore Yitbarek.K's projects, technical skills, and software development journey.",
    images: ["/me.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >
          <SoundProvider>
            <MouseEffects interactionMode="wavy" duration={0.3}>
              <Navbar />
              {children}
              <Footer />
            </MouseEffects>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
