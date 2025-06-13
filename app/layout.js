import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata = {
  title: 'Osun Child & Youth Development Insights',
  description: 'A data-driven platform analyzing child and youth development in Osun State, Nigeria. Explore data on education, health, employment, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-dotted-matrix"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-console-dark/30 z-[-1] animate-scanline opacity-20 pointer-events-none"></div>

        <Header />
        
        <main className="relative z-10 pt-32 pb-32 px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
