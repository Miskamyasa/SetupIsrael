import Image from "next/image";
import blue from "./blue_icon.svg";

interface CardProps {
    title: string;
    subtitle: string;
    imgSvg: string;
}

export default function CardTest(props: CardProps) {
    return (
        <div className=" bg-white rounded-3xl border-2  md:h-auto h-80  flex flex-col items-center  px-3 mx-auto max-w-xs mb-6 ">
            <Image
                className="mb-7 mt-6"
                alt="blue icon"
                height={90}
                src={props.imgSvg}
                width={90}
            />

            <h6 className="text-xl sm:text-xl md:text-2xl  font-bold text-center mb-7">
                {props.title}
            </h6>
            <p className="text-lg sm:text-lg md:text-xl text-center md:pb-16">
                {props.subtitle}
            </p>
        </div>
    );
}
