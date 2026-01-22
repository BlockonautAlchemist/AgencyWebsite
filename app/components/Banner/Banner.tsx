"use client";

import Image from "next/image";

const Banner = () => {
    return (
        <main className="relative isolate min-h-screen overflow-hidden bg-transparent">
            <div className="absolute inset-0 flex justify-center items-start pt-6 pointer-events-none z-20">
                <div className="h-[380px] sm:h-[420px] lg:h-[520px] flex items-start justify-center w-full">
                    <Image
                        src={'/assets/banner/shapes.svg'}
                        alt="decorative shapes"
                        width={1050}
                        height={520}
                        className="w-[900px] lg:w-[1050px] opacity-80"
                        priority
                    />
                </div>
            </div>
            <div className="px-6 lg:px-8 w-full relative z-30 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
                <div className="mx-auto max-w-7xl flex flex-col items-center text-center gap-6">
                    <div className="w-full">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl md:4px lh-96">
                            <span>We help businesses</span> <br /> <span>get noticed, get chosen,</span> <br /> <span>and get paid.</span>
                        </h1>
                        <p className="mt-3 text-lg leading-8 text-gray-700 mx-auto">
                            Creative design and smart ideas that help your business run better and sell more.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button type="button" className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'>
                            Get a Free Improvement Check
                        </button>
                        <button type="button" className='text-15px mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'>
                            See Examples
                        </button>
                    </div>

                    <div className="relative mx-auto h-[260px] sm:h-[320px] lg:h-[480px] w-full max-w-4xl">
                        <Image
                            src={'/assets/banner/RocketGrowthChart.webp'}
                            alt="banner-image"
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 1200px"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Banner;
