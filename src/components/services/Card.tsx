import Image from "next/image";
import blue from "./blue_icon.svg";

interface CardProps {
    title: string;
    subtitle: string;
    imgSvg: string;
}

export default function CardTest(props: CardProps) {
    return (
        <div className=" bg-white rounded-3xl border-2  md:h-auto lg:h-80 lg:w-60  flex flex-col items-center  px-3 mx-auto max-w-xs mb-6">
            <Image
                className="mb-7 mt-6"
                alt="blue icon"
                height={90}
                src={props.imgSvg}
                width={90}
            />

            <h6 className="text-xl  font-bold text-center sm:mb-7 mb-1">
                {props.title}
            </h6>
            <p className="text-lg  text-center md:pb-16 pb-10">
                {props.subtitle}
            </p>
        </div>
    );
}
