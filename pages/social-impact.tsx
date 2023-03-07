/** @format */
import React from "react";
import BlurImage from "../components/utils/BlurImage";
const para = {
    styles:
        "mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-7xl text-left",
};
const About = () => {
    return (
        <div className="mt-10">
            <div className="relative  md:block ">
                <div className="w-full h-[40vh] md:h-screen relative">
                    <BlurImage
                        image={
                            "https://res.cloudinary.com/dthpcwn8r/image/upload/v1675783536/IMG_9581-2_1_zbcea1.jpg"
                        }
                        width={500}
                        height={200}
                        alt={"Banner"}
                    />
                </div>
            </div>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
                <section className="bg-white ">
                    <div className="container px-6 py-16 mx-auto ">
                        <div className="max-w-7xl mx-auto">
                            <h1 className="text-4xl font-bold mt-24"> CONNECTING THE WORLD WITH A SUSTAINABLE LIFESTYLE</h1>
                            <p className=" text-gray-700 ">
                                <p className={para.styles} > At Incancestry, we support fashion and lifestyle by protecting, not harming the planet. Making it our mission to promote a sustainable environment, we work with the Andean communities to create products that don&apos;t damage the beautiful world around us.
                                </p>
                                <p className={para.styles} >
                                    Our products are made of 100% natural materials, with ethically raised alpaca fiber and wool. The dyes in our products are natural and undertaken by local Andean weavers who work from home.
                                </p>
                                <p className={para.styles} >
                                    We work with and listen to the advice and instructions of the artisans we work with, who are experts in the field of farming, harvesting and producing sustainable products.
                                    Because some plants cannot be used during certain seasons, our products are planned and produced according to what is available at a given time, making them available to people who could use them right there and then.
                                </p>
                                <p className={para.styles} >
                                    Most of the Andean communities live under the poverty line, struggling to make ends meet. By helping them produce and distribute their local products, we help ensure that their hometowns are safeguarded and taking part in a steady rate of trade that enables them to live and continue producing their work.
                                </p>
                                <p className={para.styles} >
                                    Our typical work practice always involves traditional and free range activities. In the mornings, Alpacas spend time grrazing the Andean landscape graze, and then they return back to their shelters.
                                </p>
                                <p className={para.styles} >
                                    The appreciation of animals is at the heart of what we do. That is why we facilitate the production of unique products made of alpaca fur taken from alpacas who were lost to devastatingly cold weather conditions, known as heladas.
                                </p>
                                <p className={para.styles} >
                                    Our goal is to not only help reduce waste and contribute to sustaining Andean communities who depend on the sale of alpaca products, but also raise awareness and build a global community who engages in discussion about sustainable production and a love for alpacas!</p>
                            </p>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
};

export default About;
