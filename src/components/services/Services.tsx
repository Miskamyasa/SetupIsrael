import Card from "./Card";
import blueIcon from "../../assets/svg/services/blue_icon.svg";
import purpleIcon from "../../assets/svg/services/purple_icon.svg";
import yellowIcon from "../../assets/svg/services/yellow_icon.svg";
import dots from "../../assets/svg/services/dots_service.svg";
import Ellipse_87 from "../svg/Ellipse_87";
import Image from "next/image";

export default function Services() {
    return (
        <section className="container ">
            <div className="flex justify-between relative mb-10">
            <div className="absolute w-9/12 h-4/5  right-0 top-28   bg-fuchsia-50 rounded-tl-[150px] z-[-1] "></div>
                <div className="absolute z-[-2] left-0 bottom-[40px]">
                    <Image alt="Dots SVG" height={300} src={dots} width={400} />
                </div>
                <div className="absolute z-[-1] right-[10px] bottom-[-20px] ">
                    <Ellipse_87 />
                </div>
                <div className="self-center relative pt-20 ">
                    <div className="absolute w-44 h-44  top-[-10px] left-[-60px] right-0 opacity-50 bg-orange-100 rounded-tl-[100px] z-[-1]"></div>
                    <div className="w-5/7 text-black text-4xl font-bold ">
                        How can we help you?
                    </div>
                    <p className="w-96 text-neutral-600 text-base font-normal leading-relaxed">
                        With us you can find 17 different sets, ranging from a
                        gorgeous room of mirrors, a colorful prison to a
                        professional green screen for video editing.
                    </p>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-4 items-center pt-4  w-3/5">
                    <div className="row-span-3">
                        <Card
                            title="Business Corporate meet-up"
                            subtitle="Celebrate your child's Bar Mitzvah in style and create memories!"
                            imgSvg={blueIcon}
                        />
                    </div>
                    <div>
                        <Card
                            title="Bar Mitzvah Birthday Party"
                            subtitle="Celebrate your child's Bar Mitzvah in style and create memories!"
                            imgSvg={purpleIcon}
                        />
                    </div>
                    <div>
                        <Card
                            title="Book personal party"
                            subtitle="Celebrate your child's Bar Mitzvah in style and create memories!"
                            imgSvg={yellowIcon}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
