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
                ctaText="Contact Now"
                description="With us you can find 17 different sets, ranging from a gorgeous room of mirrors, a colorful prison to a professional green screen for video editing."
                imageSrc="https://placekitten.com/754/512"
                title="Unlock the Potential of our Space and book it Today!"
            />
            <Services />
        </main>
    )
}
