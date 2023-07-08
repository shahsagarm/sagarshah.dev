import { Inter } from 'next/font/google';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sagar Shah | Full Stack Developer From Ahmedabad, India',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-0 text-gray-600 antialiased`}
      >
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
