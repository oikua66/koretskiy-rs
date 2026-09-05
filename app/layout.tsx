import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { business } from '../lib/business';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(business.website.canonicalUrl),
  title: business.siteName,
  description: 'Praktična inženjerska rešenja za domove, poslovne i javne objekte u Srbiji.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    siteName: business.siteName,
    title: business.siteName,
    description: 'Praktična inženjerska rešenja za domove, poslovne i javne objekte u Srbiji.',
    url: '/',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
