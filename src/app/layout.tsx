import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Sagar Shah | Full Stack Developer From Ahmedabad, India.';
const description =
  'A self-proclaimed designer who specializes in full stack development (React.js & Node.js), from Ahmedabad, India.';
const url = 'https://sagarshah.dev';
const ogImageUrl = `${url}/images/open-graph-sagar.png`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
  ],
  creator: 'Sagar Shah',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: ogImageUrl,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@shahsagarm',
    images: ogImageUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BWPBE3C0MV"
        ></Script>
        <Script id="google-anayltics-script">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-BWPBE3C0MV');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-gray-0 text-gray-600 antialiased`}
      >
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
