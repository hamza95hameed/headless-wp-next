"use client"
import React from 'react'
import Link from 'next/link'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export const InstagramFeed = ({dir}) => {
    const instaArr = [1,2,3,4,5,6,7,8,9,10];
    let classDir = '';
    if( dir ){
        classDir = '-2';
    }
    return (
        <div className={`swiper-container sidebarInsta-active${classDir}`}  dir={dir}>
            <Swiper
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                }}
                loop={true}
                slidesPerView={4}
                spaceBetween={15}
                centeredSlides={true}
                modules={[Autoplay]}
            >
                {instaArr.map((insta) => (
                    <SwiperSlide key={insta}>
                        <div className="swiper-slide">
                            <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta01.jpg" alt="img" /></Link>
                        </div>     
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
