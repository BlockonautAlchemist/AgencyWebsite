import Image from "next/image";

interface datatype {
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Greensburg Based",
        paragraph: 'Local, reachable, and easy to work with.',
    },
    {
        heading: "Fast Turnarounds",
        paragraph: 'Small improvements, delivered quickly.',
    },
    {
        heading: "Clear Pricing",
        paragraph: 'No confusion. No surprises.',
    },
    {
        heading: "Ongoing Support",
        paragraph: 'One time help or monthly support.',
    },
]

const Network = () => {
    return (
        <div className="bg-babyblue" id="project">
            <div className="mx-auto max-w-2xl py-20 pb-32 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81 text-navyblue">Based in Greensburg, Pennsylvania</h3>

                <div className="relative w-full my-8">
                    <Image src={'/assets/network/greensburg-pa.webp'} alt={"Greensburg, Pennsylvania"} width={1400} height={800} className="w-full h-auto" />
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse 80% 65% at 50% 50%, rgba(226,243,249,0) 35%, rgba(226,243,249,1) 100%)'
                        }}
                    />
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(226,243,249,1) 0%, rgba(226,243,249,0) 18%, rgba(226,243,249,0) 82%, rgba(226,243,249,1) 100%)'
                        }}
                    />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8 mt-8'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 shadow-xl'>
                            <h4 className="text-xl font-medium text-midnightblue mb-3">{item.heading}</h4>
                            <p className='text-lg font-normal text-gray-600'>{item.paragraph}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Network;
