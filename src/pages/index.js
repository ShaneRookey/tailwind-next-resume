import Header from '@/components/header';
import Socials from '@/components/socials';
import Summary from '@/components/summary';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
        <Head>
            <title>Shane Rookey Portfolio</title>
            <meta name="description" content='Generated' />
            <link rel="icon" href='/favicon.ico' />
        </Head>

        <main className='bg-gray-100 px-10 dark:bg-gray-900'>
            <section className='min-h-screen'>
                <Header onDarkModeClick={() => setDarkMode(!darkMode)}/>
                <Summary />
            </section>
            <section className='pb-2'>
                <Socials />
            </section>
        </main>
        </div>
    )
}
