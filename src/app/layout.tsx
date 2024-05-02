import "./globals.css";
import type { Metadata } from "next";
import "aos/dist/aos.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Webspirre Waitlist",
  description: "Find Web Design Inspiration!",
  openGraph: {
    siteName: "Webspirre Waitlist",
    title: "Webspirre Waitlist",
    description: "Find Web Design Inspiration!",
    url: "https://webspire-waitlist.netlify.app/",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webspirre Waitlist",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          {children}
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
