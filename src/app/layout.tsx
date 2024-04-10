import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import Wrapper from '@/components/Wrapper';
import './globals.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    const session = await getServerSession()

    return (
        <html lang='en'>
            <Wrapper session={session}>
                <body className={inter.className}>
                    {children}
                </body>
            </Wrapper>
        </html>
    )
}
