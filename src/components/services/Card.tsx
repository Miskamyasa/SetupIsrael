import Image from "next/image";
import blue from "./blue_icon.svg";

interface CardProps {
    title: string;
    subtitle: string;
    imgSvg: string;
}

export default function Card(props: CardProps) {
    return (
        <div className="flex flex-col justify-center items-center w-80 h-96 bg-white rounded-3xl border">
            <Image
                className="mb-10"
                alt="blue icon"
                height={112}
                src={props.imgSvg}
                width={112}
            />

            <h6 className="w-64 text-center text-black text-2xl font-medium">
                {props.title}
            </h6>
            <p className="w-60 text-center text-neutral-500 text-base font-normal leading-snug">
                {props.subtitle}
            </p>
        </div>
    );
}
