import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "./themeprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shane Rookey's Professional Resume",
  description: "Learn more about Shane Rookey and contact him for hire.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main className="pb-2 bg-gray-200 dark:bg-gray-900">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
