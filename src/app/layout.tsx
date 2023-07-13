import "./globals.css"
import type {Metadata} from "next"
import {Rubik} from "next/font/google"
import Favicon from "../components/Favicon"
import SiteHeader from "../components/SiteHeader"


const font = Rubik({
    weight: ["400", "600"],
    subsets: ["cyrillic", "hebrew", "latin"],
})

export const metadata: Metadata = {
    title: {
        template: "SetUp Israel · %s",
        default: "SetUp Israel",
    },
}


interface Props {
    children: React.ReactNode
}

export default function RootLayout({children}: Props) {
    return (
        <html lang="en">
            <Favicon />
            <body className={`${font.className} min-h-screen w-screen flex flex-col overflow-x-hidden antialiased`}>
                <SiteHeader />
                <div className="flex-grow">
                    {children}
                </div>
            </body>
        </html>
    )
}
