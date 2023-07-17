import Card from "./Card";
import blueIcon from "../../assets/svg/services/blue_icon.svg";
import purpleIcon from "../../assets/svg/services/purple_icon.svg";
import yellowIcon from "../../assets/svg/services/yellow_icon.svg";
import Ellipse_87 from "../svg/Ellipse_87";
import Dots from "../svg/Dots";

export default function ServicesTest() {
    return (
        <section className="containerTest ">
            <div className="flex flex-col md:flex-row md:justify-around relative ">
                <div className="absolute  z-[-1] w-full h-full">
                    <div className="flex justify-between w-full h-full">
                        <div className="  h-44 w-44 md:self-center self-start opacity-50 mb-28 bg-orange-100 rounded-tl-[100px]"></div>
                        <div className=" md:h-4/6 h-2/6 my-2 w-3/4 self-center  bg-fuchsia-50 rounded-tl-[150px] "></div>
                    </div>
                    <div className="flex  md:justify-between -mt-60 z-[-1] relative justify-around">
                        <div className=" flex gap-3 sm:scale-100 ">
                            <div className="hidden md:block">
                                <Dots color={"#E7F0FC"} />
                            </div>
                            <div>
                                <Dots color={"#E7F0FC"} />
                            </div>
                        </div>
                        <div className="self-end -mb-10 overflow-hidden	">
                            <Ellipse_87 />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center  md:items-start xs:px-20 mb-6  md:justify-center md:pr-5">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold md:text-start">
                        How can we help you?
                    </div>
                    <p className="text-lg   text-center md:text-start max-w-md">
                        With us you can find 17 different sets, ranging from a
                        gorgeous room of mirrors, a colorful prison to a
                        professional green screen for video editing.
                    </p>
                </div>
                <div className="md:flex">
                    <div className="md:self-center md:mr-7">
                        <Card
                            title="Business Corporate meet-up"
                            subtitle="Celebrate your child's Bar Mitzvah in style and create memories!"
                            imgSvg={blueIcon}
                        />
                    </div>
                    <div>
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
            </div>
        </section>
    );
}
