import Image from 'next/image';

interface cardDataType {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/ourbuyers.svg',
        heading: "Look More Professional",
        subheading: "Clean design and visuals that build trust.",
    },
    {
        imgSrc: '/assets/buyers/projectcompleted.svg',
        heading: "Communicate Clearly",
        subheading: "Messaging that makes it easy to choose you.",
    },
    {
        imgSrc: '/assets/buyers/happybuyers.svg',
        heading: "Capture More Leads",
        subheading: "Simple ways to turn visitors into inquiries.",
    },
    {
        imgSrc: '/assets/buyers/teammembers.svg',
        heading: "Run More Efficiently",
        subheading: "Smart tools that save time every day.",
    }

]

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((items, i) => (
                    <div className='bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center text-center' key={i}>
                        <div className='flex justify-center border border-border p-2 w-10 rounded-lg'>
                            <Image src={items.imgSrc} alt={items.imgSrc} width={30} height={30} />
                        </div>
                        <h3 className='text-2xl text-navyblue font-semibold mt-5'>{items.heading}</h3>
                        <p className='text-lg font-normal text-gray-600 mt-2'>{items.subheading}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Buyers;
