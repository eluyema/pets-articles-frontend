import "./globals.css";

import { Inter, Merriweather } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
    title: 'Furry Kindness',
    description: 'Furry Kindness is your go-to resource for loving pet care. Discover helpful articles, expert tips, and thoughtful advice on how to care for your furry friends — from daily routines and nutrition to training, health, and emotional well-being.',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/logo.png" type="image/png"/>
            {/* Optional: for SVG */}
            {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
        </head>
        <body className={`${inter.className} ${merriweather.className}`}>
        {children}
        </body>
        </html>
    );
}

