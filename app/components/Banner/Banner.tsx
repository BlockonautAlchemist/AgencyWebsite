"use client";

const Banner = () => {
    return (
        <main 
            className="relative isolate overflow-hidden bg-transparent [overflow-anchor:none] hero-section"
            style={{ minHeight: '100svh' }}
        >
            {/* Main content - pt-24 accounts for fixed navbar (h-20 = 80px + extra spacing) */}
            <div className="relative z-20 px-6 lg:px-8 w-full pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
                <div className="mx-auto max-w-7xl flex flex-col items-center text-center gap-6">
                    <div className="w-full">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl md:4px lh-96">
                            <span>We help businesses</span> <br /> <span>get noticed, get chosen,</span> <br /> <span>and get paid.</span>
                        </h1>
                        <p className="mt-3 text-lg leading-8 text-bluegrey mx-auto">
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
                </div>
            </div>
        </main>
    )
}

export default Banner;
