import Image from "next/image";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/provide/marketing.svg",
        country: "Branding & Visual Design",
        paragraph: 'Logos, graphics, and visuals that help your business look professional and trustworthy.',

    },
    {
        imgSrc: "/assets/provide/graphic.svg",
        country: "Messaging & Copywriting",
        paragraph: 'Clear, simple language that helps customers understand and choose you.',

    },
    {
        imgSrc: "/assets/provide/uidesign.svg",
        country: "Lead Capture & Follow-Ups",
        paragraph: 'Forms, chat, and responses that turn interest into conversations.',

    },
    {
        imgSrc: "/assets/provide/heaking.svg",
        country: "Smart Tools & Custom Ideas",
        paragraph: 'Simple tools and AI-powered ideas that save time and improve results.',
    },
]


const Provide = () => {
    return (
        <div id="services">

            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                    {/* COLUMN-1 */}
                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center p-10">
                            <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start text-navyblue">What This Means for Your Business</p>
                            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-gray-700">We help businesses improve how they present themselves, communicate with customers, and handle day-to-day work. The focus is always on practical changes that make things clearer, easier, and more effective.</h4>
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    {/* COLUMN-2 */}
                    <div className='col-span-6 lg:col-span-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl'>
                            {Aboutdata.map((item, i) => (
                                <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                    <h4 className="text-2xl font-semibold text-navyblue">{item.country}</h4>
                                    <h4 className='text-lg font-normal text-gray-600 my-2'>{item.paragraph}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Provide;
