import { Footer, Navbar } from "@/components/page"
import "./globals.css"
import type { Metadata } from "next"
import { Karla } from "next/font/google"

const inter = Karla({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Gerard Sayson",
    description: "Hey! I\'m gsn.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex min-h-screen flex-col items-center p-7 md:p-16 lg:p-24">
                    <div className="z-10 max-w-2xl w-full">
                        <Navbar/>
                        {children}
                        <Footer/>
                    </div>
                </main>
            </body>
        </html>
    )
}
