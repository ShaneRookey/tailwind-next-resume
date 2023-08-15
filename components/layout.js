import { ThemeProvider } from "@/app/themeprovider";
import Head from "next/head";
import Header from "./header";
import Socials from "./socials";

function Layout({ children }) {
    
    return ( 
        <>
            <Head>
                <title>Shane Rookey</title>
                <meta name="description" content='Generated' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <main className='bg-gray-100 px-10 dark:bg-gray-900 pb-2 min-h-screen'>
                    <Header />
                    {children}
                    <Socials />
                </main>
            </ThemeProvider>
        </>
    );
}

export default Layout;