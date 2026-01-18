import Image from "next/image";

const Newsletter = () => {
    return (
        <div className='relative z-3 -mt-20 mb-20'>
            <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <div className='hidden lg:block'>
                        <div className='float-right pt-20 relative'>
                            <Image src={'/assets/newsletter/email-marketing.webp'} alt="email marketing" width={588} height={334} />
                            <div className="absolute top-10 right-0">
                                <Image src={'/assets/newsletter/leaf.svg'} alt="leafimg" width={81} height={81}/>
                            </div>
                            <div className="absolute bottom-8 left-2">
                                <Image src={'/assets/newsletter/circel.svg'} alt="circleimg" width={30} height={30}/>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    <div className="p-10 flex flex-col justify-center">
                        <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">Sign up to our newsletter.</h3>
                        <h4 className="text-base font-normal mb-7 text-white/90">Real work. Real decisions.

We document our process as we work and share ideas you can use right away.</h4>
                        <div className="flex gap-0">
                            <input type="Email address" name="q" className="py-4 text-sm w-full text-gray-900 bg-white rounded-l-lg pl-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent" placeholder="enter email address" autoComplete="off" />
                            <button className="bg-midblue hover:bg-blue text-white font-medium py-2 px-4 rounded-r-lg transition-colors">
                                <Image src={'/assets/newsletter/plane.svg'} alt="plane-img" width={20} height={20} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Newsletter;