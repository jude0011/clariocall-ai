import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'AI Call Receptionist | Never Miss an Opportunity', description: 'An AI receptionist that answers calls, handles common questions and helps book appointments around the clock.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
