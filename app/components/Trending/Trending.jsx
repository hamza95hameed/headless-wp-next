"use client"
import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { getThumbnail, getCategory, getAuthor, slugify } from '@/utils/common';
import 'swiper/css';

const Trending = ({ posts }) => {
    return (
        <section className="trending-post-area section__hover-line pt-25">
            <div className="container">
                <div className="section__title-wrap mb-40">
                    <div className="row align-items-end">
                        <div className="col-sm-6">
                            <div className="section__title">
                                <span className="section__sub-title">Popular Posts</span>
                                <h3 className="section__main-title">Trending News</h3>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="section__read-more text-start text-sm-end">
                                <Link href="/blog">More Post <i className="far fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trending__slider">
                    <div className="swiper-container trending-active">
                        <div className="swiper-wrapper">
                            <Swiper
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1440: {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                    },
                                }}
                                modules={[Autoplay]}
                            >
                                {posts.map((post) => (
                                    <SwiperSlide key={post.id}>
                                        <div className="swiper-slide">
                                            <div className="trending__post">
                                                <div className="trending__post-thumb tgImage__hover">
                                                    <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                                    <Link href={`/blog/${post.slug}`}><img src={getThumbnail(post)} width="100%" height="auto" alt="img" /></Link>
                                                    <span className="is_trend"><i className="fas fa-bolt"></i></span>
                                                </div>
                                                <div className="trending__post-content">
                                                    <ul className="tgbanner__content-meta list-wrap">
                                                        <li className="category"><Link href={`/category/${slugify(post)}`}>{getCategory(post)}</Link></li>
                                                        <li><span className="by">By</span> <Link href="/blog">{getAuthor(post)}</Link></li>
                                                    </ul>
                                                    <h4 className="title tgcommon__hover">
                                                        <Link href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Link>
                                                    </h4>
                                                    <ul className="post__activity list-wrap">
                                                        <li><i className="fal fa-signal"></i> 1.0k</li>
                                                        <li><Link href={`/blog/${post.slug}`}><i className="fal fa-comment-dots"></i> 128</Link></li>
                                                        <li><i className="fal fa-share-alt"></i> 29</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending