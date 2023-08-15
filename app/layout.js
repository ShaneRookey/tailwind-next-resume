'use client'
import Header from '@/components/header'
import Socials from '@/components/socials'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import '../styles/globals.css'
import { ThemeProvider } from './themeprovider'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <title>Shane Rookey</title>
        </Head>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className='bg-gray-100 px-10 dark:bg-gray-900 pb-2 min-h-screen'>
            <Header />
            {children}
            <Socials />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
