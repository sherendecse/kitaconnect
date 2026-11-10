import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'KITA Connect · Growing together', description: 'A little support. A world of possibilities. Your connected Kita Main family journey.', icons: {icon:'/favicon.svg'} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
