import Image from "next/image"
import Circle from "./svg/Circle"
import Polygon from "./svg/Polygon"


interface Props {
    title: string
    description: string
    ctaText: string
    imageSrc: string
}

export default function Hero(props: Props) {
    return (
        <section className="container pt-5 pb-12 grid grid-rows-1 grid-cols-1 md:grid-cols-2">
            <div className="relative">
                <div className="flex flex-col justify-center md:pr-20 md:pl-10">
                    <h1 className="mb-7 mt-5 md:mt-14 lg:mt-20">{props.title}</h1>
                    <p>{props.description}</p>
                    <div className="mt-7 mb-16 md:mb-4">
                        <button className="button">
                            {props.ctaText}
                        </button>
                    </div>
                </div>
                <div
                    className="absolute z-[-1] flex gap-5 scale-[0.5] bottom-[-20px] left-[-100px] md:scale-[0.75] md:left-[-50px] lg:scale-[1] lg:bottom-0 lg:left-[-25px]">
                    <img
                        alt="Dots SVG"
                        src="/svg/dots.svg" />
                    <img
                        alt="Dots SVG"
                        src="/svg/dots.svg" />
                </div>
            </div>
            <div className="relative md:ml-2 mr-[-1.5rem]">
                <div className="rounded-es-[100px] overflow-hidden">
                    <img
                        alt={props.title}
                        height={512}
                        src={props.imageSrc}
                        width={754}
                    />
                </div>
                <div className="text-gust absolute flex z-[-1] top-[-64px] right-0 md:top-0 md:left-[-64px] md:right-auto lg:top-0">
                    <Circle />
                </div>
                <div className="text-rameo absolute z-[-1] bottom-[-48px] right-6 md:bottom-0 lg:right-4">
                    <Polygon />
                </div>
            </div>
        </section>

    )
}
