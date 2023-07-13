import Image from 'next/image'


interface Props {
    title: string
    description: string
    imageSrc: string
}

export default function Hero(props: Props) {
    const {title, description, imageSrc} = props
    return (
        <section id="hero">
            <div className="container min-h-[300px] flex">
                <div className="flex flex-col justify-center placement-center shrink-0 w-full md:basis-1/2 py-16">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div>
                        {/* TODO: Button */}
                    </div>
                </div>
                <div className="basis-1/2 flex justify-end items-center">
                    <Image
                        alt="Stain"
                        height={258 * 0.71}
                        src={imageSrc}
                        width={250 * 0.71}
                    />
                </div>
            </div>
        </section>
    )
}
