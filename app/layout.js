import Header from '@/components/header'
import Socials from '@/components/socials'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import '../styles/globals.css'
import { ThemeProvider } from './themeprovider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shane Rookey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='bg-gray-100 px-10 dark:bg-gray-900 pb-2 min-h-screen'>
          <Head>
            <title>Shane Rookey</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Header />
              {children}
              <Socials />
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
