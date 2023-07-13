export default function Services() {
    return (
        <section className="container">
            <div className="flex justify-around">
                <div className="self-center">
                    <div className="w-96 text-black text-4xl font-normal">
                        How can we help you?
                    </div>
                    <p className="w-96 text-neutral-600 text-base font-normal leading-relaxed">
                        With us you can find 17 different sets, ranging from a
                        gorgeous room of mirrors, a colorful prison to a
                        professional green screen for video editing.
                    </p>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-4 items-center">
                    <div className="flex flex-col justify-center items-center row-span-3 w-80 h-96 bg-white rounded-3xl shadow border border-zinc-100">
                        <div className="w-28 h-28 bg-indigo-100 rounded-2xl mb-10"></div>
                        <h6 className="w-64 text-center text-black text-2xl font-normal">
                            Business Corporate meet-up
                        </h6>
                        <p className="w-60 text-center text-neutral-500 text-base font-normal leading-snug">
                            {
                                "Celebrate your child's Bar Mitzvah in style and create memories!"
                            }
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-80 h-96 bg-white rounded-3xl shadow border border-zinc-100">
                        <div className="w-28 h-28 bg-purple-200 rounded-2xl mb-10"></div>
                        <h6 className="w-64 text-center text-black text-2xl font-normal">
                            Bar Mitzvah Birthday Party
                        </h6>
                        <p className="w-60 text-center text-neutral-500 text-base font-normal leading-snug">
                            {
                                "Celebrate your child's Bar Mitzvah in style and create memories!"
                            }
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-80 h-96 bg-white rounded-3xl shadow border border-zinc-100">
                        <div className="w-28 h-28 bg-orange-100 rounded-2xl mb-10"></div>
                        <h6 className="w-64 text-center text-black text-2xl font-normal">
                            Book personal party
                        </h6>
                        <p className="w-60 text-center text-neutral-500 text-base font-normal leading-snug">
                            {
                                "Celebrate your child's Bar Mitzvah in style and create memories!"
                            }
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
