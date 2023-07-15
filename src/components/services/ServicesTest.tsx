import CardTest from "./CardTest";
import blueIcon from "../../assets/svg/services/blue_icon.svg";
import purpleIcon from "../../assets/svg/services/purple_icon.svg";
import yellowIcon from "../../assets/svg/services/yellow_icon.svg";
import dots from "../../assets/svg/services/dots_service.svg";
import Ellipse_87 from "../svg/Ellipse_87";
import Image from "next/image";

export default function ServicesTest() {
    return (
        <section className="container ">
            <div className="flex flex-col md:grid md:grid-cols-12 md:gap-10 ">
            {/* <div className="absolute w-9/12 h-4/5  right-0 top-28   bg-fuchsia-50 rounded-tl-[150px] z-[-1]"></div> */}
                {/* <div className="absolute z-[-2] left-0 bottom-[40px]">
                    <Image alt="Dots SVG" height={300} src={dots} width={400} />
                </div> */}
                {/* <div className="absolute z-[-1] right-[10px] bottom-[-20px] ">
                    <Ellipse_87 />
                </div> */}
                <div className="flex flex-col items-center  md:items-start xs:px-20 mb-6  md:justify-center md:col-span-5 ">
                    {/* <div className="absolute w-44 h-44  top-[-10px] left-[-60px] right-0 opacity-50 bg-orange-100 rounded-tl-[100px] z-[-1]"></div> */}
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold md:text-start">
                        How can we help you?
                    </div>
                    <p className="text-lg  md:text-xl lg:text-2xl text-center md:text-start">
                        With us you can find 17 different sets, ranging from a
                        gorgeous room of mirrors, a colorful prison to a
                        professional green screen for video editing.
                    </p>
                </div>
                <div className="w-full md:grid md:grid-rows-2 md:grid-flow-col md:gap-1 items-center md:col-span-7">
                    <div className="md:row-span-3 ">
                        <CardTest
                            title="Business Corporate meet-up"
                            subtitle="Celebrate your child's Bar Mitzvah in style and create memories!"
                            imgSvg={blueIcon}
                        />
                    </div>
                    <div>
                        <CardTest
                            title="Bar Mitzvah Birthday Party"
                            subtitle="Celebrate your child's Bar Mitzvah in style and create memories!"
                            imgSvg={purpleIcon}
                        />
                    </div>
                    <div>
                        <CardTest
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
