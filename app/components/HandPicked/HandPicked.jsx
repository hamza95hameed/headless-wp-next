"use client"
import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

const HandPicked = () => {
  return (
    <section className="hand-picked-area black-bg fix section__hover-line pt-75 pb-80">
        <div className="container">
            <div className="section__title-wrap section__title-white mb-40">
                <div className="row align-items-end">
                    <div className="col-sm-6">
                        <div className="section__title">
                            <span className="section__sub-title">hand-picked</span>
                            <h3 className="section__main-title">More to Watch</h3>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="section__read-more text-start text-sm-end">
                            <Link href="blog.html">Hand-Picked Post <i className="far fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="trending__slider dark-post-slider">
            <div className="swiper-container handpicked-active">
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
                                slidesPerView: 6,
                                spaceBetween: 40,
                            },
                          }}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="trending__post">
                                    <div className="trending__post-thumb tgImage__hover">
                                        <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                        <Link href="blog-details.html"><img src="/img/blog/blog19.jpg" alt="img" /></Link>
                                        <span className="is_trend"><i className="fas fa-bolt"></i></span>
                                    </div>
                                    <div className="trending__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="blog.html">Gaming</Link></li>
                                            <li><span className="by">By</span> <Link href="blog.html">miranda h.</Link></li>
                                        </ul>
                                        <h4 className="title tgcommon__hover"><Link href="blog-details.html">Scientists speculate that ours might not be held</Link></h4>
                                        <ul className="post__activity list-wrap">
                                            <li><i className="fal fa-signal"></i> 1.0k</li>
                                            <li><Link href="blog-details.html"><i className="fal fa-comment-dots"></i> 128</Link></li>
                                            <li><i className="fal fa-share-alt"></i> 29</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                        
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="trending__post">
                                    <div className="trending__post-thumb tgImage__hover">
                                        <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                        <Link href="blog-details.html"><img src="/img/blog/blog19.jpg" alt="img" /></Link>
                                        <span className="is_trend"><i className="fas fa-bolt"></i></span>
                                    </div>
                                    <div className="trending__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="blog.html">Gaming</Link></li>
                                            <li><span className="by">By</span> <Link href="blog.html">miranda h.</Link></li>
                                        </ul>
                                        <h4 className="title tgcommon__hover"><Link href="blog-details.html">Scientists speculate that ours might not be held</Link></h4>
                                        <ul className="post__activity list-wrap">
                                            <li><i className="fal fa-signal"></i> 1.0k</li>
                                            <li><Link href="blog-details.html"><i className="fal fa-comment-dots"></i> 128</Link></li>
                                            <li><i className="fal fa-share-alt"></i> 29</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                        
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="trending__post">
                                    <div className="trending__post-thumb tgImage__hover">
                                        <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                        <Link href="blog-details.html"><img src="/img/blog/blog19.jpg" alt="img" /></Link>
                                        <span className="is_trend"><i className="fas fa-bolt"></i></span>
                                    </div>
                                    <div className="trending__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="blog.html">Gaming</Link></li>
                                            <li><span className="by">By</span> <Link href="blog.html">miranda h.</Link></li>
                                        </ul>
                                        <h4 className="title tgcommon__hover"><Link href="blog-details.html">Scientists speculate that ours might not be held</Link></h4>
                                        <ul className="post__activity list-wrap">
                                            <li><i className="fal fa-signal"></i> 1.0k</li>
                                            <li><Link href="blog-details.html"><i className="fal fa-comment-dots"></i> 128</Link></li>
                                            <li><i className="fal fa-share-alt"></i> 29</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                        
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="trending__post">
                                    <div className="trending__post-thumb tgImage__hover">
                                        <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                        <Link href="blog-details.html"><img src="/img/blog/blog19.jpg" alt="img" /></Link>
                                        <span className="is_trend"><i className="fas fa-bolt"></i></span>
                                    </div>
                                    <div className="trending__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="blog.html">Gaming</Link></li>
                                            <li><span className="by">By</span> <Link href="blog.html">miranda h.</Link></li>
                                        </ul>
                                        <h4 className="title tgcommon__hover"><Link href="blog-details.html">Scientists speculate that ours might not be held</Link></h4>
                                        <ul className="post__activity list-wrap">
                                            <li><i className="fal fa-signal"></i> 1.0k</li>
                                            <li><Link href="blog-details.html"><i className="fal fa-comment-dots"></i> 128</Link></li>
                                            <li><i className="fal fa-share-alt"></i> 29</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                        
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="trending__post">
                                    <div className="trending__post-thumb tgImage__hover">
                                        <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                        <Link href="blog-details.html"><img src="/img/blog/blog19.jpg" alt="img" /></Link>
                                        <span className="is_trend"><i className="fas fa-bolt"></i></span>
                                    </div>
                                    <div className="trending__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="blog.html">Gaming</Link></li>
                                            <li><span className="by">By</span> <Link href="blog.html">miranda h.</Link></li>
                                        </ul>
                                        <h4 className="title tgcommon__hover"><Link href="blog-details.html">Scientists speculate that ours might not be held</Link></h4>
                                        <ul className="post__activity list-wrap">
                                            <li><i className="fal fa-signal"></i> 1.0k</li>
                                            <li><Link href="blog-details.html"><i className="fal fa-comment-dots"></i> 128</Link></li>
                                            <li><i className="fal fa-share-alt"></i> 29</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                        
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="trending__post">
                                    <div className="trending__post-thumb tgImage__hover">
                                        <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                        <Link href="blog-details.html"><img src="/img/blog/blog19.jpg" alt="img" /></Link>
                                        <span className="is_trend"><i className="fas fa-bolt"></i></span>
                                    </div>
                                    <div className="trending__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="blog.html">Gaming</Link></li>
                                            <li><span className="by">By</span> <Link href="blog.html">miranda h.</Link></li>
                                        </ul>
                                        <h4 className="title tgcommon__hover"><Link href="blog-details.html">Scientists speculate that ours might not be held</Link></h4>
                                        <ul className="post__activity list-wrap">
                                            <li><i className="fal fa-signal"></i> 1.0k</li>
                                            <li><Link href="blog-details.html"><i className="fal fa-comment-dots"></i> 128</Link></li>
                                            <li><i className="fal fa-share-alt"></i> 29</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                        
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="trending__post">
                                    <div className="trending__post-thumb tgImage__hover">
                                        <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                        <Link href="blog-details.html"><img src="/img/blog/blog19.jpg" alt="img" /></Link>
                                        <span className="is_trend"><i className="fas fa-bolt"></i></span>
                                    </div>
                                    <div className="trending__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="blog.html">Gaming</Link></li>
                                            <li><span className="by">By</span> <Link href="blog.html">miranda h.</Link></li>
                                        </ul>
                                        <h4 className="title tgcommon__hover"><Link href="blog-details.html">Scientists speculate that ours might not be held</Link></h4>
                                        <ul className="post__activity list-wrap">
                                            <li><i className="fal fa-signal"></i> 1.0k</li>
                                            <li><Link href="blog-details.html"><i className="fal fa-comment-dots"></i> 128</Link></li>
                                            <li><i className="fal fa-share-alt"></i> 29</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                        
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HandPicked