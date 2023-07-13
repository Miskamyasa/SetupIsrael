import {Metadata} from 'next'
import Hero from '../components/hero/Hero'

export const metadata: Metadata = {
    title: 'Home',
    other: {
        meta: '###',
    },
}



export default function Home() {
    return (
        <main className="">
            <Hero
                title="123"
                description="123"
                imageSrc="/images/stain.png"
            />
        </main>
    )
}
