"use client"
import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";

// TEXT PHRASES DATA FOR CAROUSEL
interface Data {
    text: string;
}

const data: Data[] = [
    {
        text: "More leads"
    },
    {
        text: "Clearer messaging"
    },
    {
        text: "Faster follow-ups"
    },
    {
        text: "Less manual work"
    },
    {
        text: "Better results"
    },
    {
        text: "More leads"
    },
    {
        text: "Clearer messaging"
    },
    {
        text: "Faster follow-ups"
    },
    {
        text: "Less manual work"
    },
    {
        text: "Better results"
    }
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 1,
            cssEase: "linear",
            pauseOnHover: false,
            pauseOnFocus: false,
            swipe: false,
            touchMove: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (

            <div className='text-center'>
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="py-14">
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i} className="flex items-center justify-center px-4">
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-full h-8 w-8 flex items-center justify-center bg-circlebg flex-shrink-0">
                                            <Image src="/assets/why/check.svg" alt="check-icon" width={20} height={20} />
                                        </div>
                                        <span className="text-xl font-medium text-gray-700 whitespace-nowrap">{item.text}</span>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                    <hr />
                </div>
            </div>

        )
    }
}
