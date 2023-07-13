import {Metadata} from "next"
import Hero from "../components/Hero"

export const metadata: Metadata = {
    title: "Home",
    other: {
        meta: "###",
    },
}


export default function Home() {
    return (
        <main className="">
            <Hero
                description="123"
                imageSrc="/images/stain.png"
                title="123"
            />
        </main>
    )
}
