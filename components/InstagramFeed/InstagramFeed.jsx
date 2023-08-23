"use client"
import React from 'react'
import Link from 'next/link'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

export const InstagramFeed = ({ instaFeed, start, dir }) => {
    let classDir = '';
    if (dir) {
        classDir = '-2';
    }
    return (
        <div className={`swiper-container sidebarInsta-active${classDir}`} dir={dir}>
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
                {instaFeed.slice(start, start + 10).map((insta) => (
                    <SwiperSlide key={insta.id}>
                        <div className="swiper-slide">
                            <Link href={insta.permalink} target="_blank"><Image src={insta.media_url} alt={insta.caption} width={80} height={50} /></Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
