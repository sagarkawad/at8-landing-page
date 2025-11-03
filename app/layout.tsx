import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'At8 - Scroll-Stopping Short-Form Ads',
  description: 'At8 is a media and short-form advertising agency creating high-conversion videos, reels, and content for brands.',
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
