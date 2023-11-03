"use client";

import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'

import { RxArrowTopRight } from 'react-icons/rx'
import { ServiceData } from '@/app/Constants'

import spider1 from '../images/spider1.jpg'

export default function Slider() {
    return (
        <div className="flex items-center justify-center flex-col h-screen">
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    700: {
                        slidesPerView: 3,
                        spacesBetween: 15
                    }
                }}

                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={{ FreeMode, Pagination }}
                className="max-w-[90%] lg:max-w-[80%]"

            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className="flex gap-6 group relative shadow-lg text-white rounded-xl   lg:h-[400px] lg:w-[350px]">
                            {/* flex-col px-6 py-8 h-[250px] w-[215px] */}

                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <Image src={spider1} alt="spiderman" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

