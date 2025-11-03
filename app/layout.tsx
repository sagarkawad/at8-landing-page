import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "At8 - Scroll-Stopping Short-Form Ads",
  description:
    "At8 is a media and short-form advertising agency creating high-conversion videos, reels, and content for brands.",
  openGraph: {
    title: "At8 - Scroll-Stopping Short-Form Ads",
    description:
      "At8 is a media and short-form advertising agency creating high-conversion videos, reels, and content for brands.",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "At8 - Media and Short-Form Advertising Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "At8 - Scroll-Stopping Short-Form Ads",
    description:
      "At8 is a media and short-form advertising agency creating high-conversion videos, reels, and content for brands.",
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
