import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Osun State Development Insights v2.0 [Deep Analysis]',
  description: 'A comprehensive, interactive data dashboard providing a deep analysis of key development indicators for Osun State, Nigeria. This version includes expanded content on strategic analysis, digital literacy, the informal economy, healthcare financing, and intergenerational dynamics.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-inter bg-slate-900 text-slate-200">
        {children}
      </body>
    </html>
  );
}
