import React from 'react'
import { getThumbnail, getCategory, getAuthor, getAuthorImage } from '@/utils/common';
import Link from 'next/link'

const Sidebar = ({post, categories}) => {
    categories = categories.filter(category => category.name !== 'Uncategorized')
    return (
        <aside className="blog-sidebar">
            <div className="widget sidebar-widget">
                <div className="tgAbout-me">
                    <div className="tgAbout-thumb">
                        <img src={getAuthorImage(post)} alt="me" />
                    </div>
                    <div className="tgAbout-info">
                        <p className="intro">Hi there, I’m <span>{getAuthor(post)}.</span></p>
                        <span className="designation">Content Writer</span>
                    </div>
                    <div className="tgAbout-social">
                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                        <Link href="#"><i className="fab fa-behance"></i></Link>
                        <Link href="#"><i className="fab fa-youtube"></i></Link>
                    </div>
                </div>
            </div>
            <div className="widget sidebar-widget widget_categories">
                <h4 className="widget-title">Trending Category</h4>
                <ul className="list-wrap">
                    {categories.map((category) => (  
                        <li>
                            <div className="thumb"><Link href={`/category/${category.slug}`}><img src="/img/category/side_category01.jpg" alt="img" /></Link></div>
                            <Link href={`/category/${category.slug}`}>{category.name}</Link>
                            <span className="float-right">{category.count}</span>
                        </li>
                    ))}                    
                </ul>
            </div>
            <div className="widget sidebar-widget">
                <div className="sidePost-active">
                    <div className="sidePost__item" data-background="/img/category/ide_post01.jpg">
                        <div className="sidePost__content">
                            <Link href="blog.html" className="tag">Technology</Link>
                            <h5 className="title tgcommon__hover"><Link href="blog-details.html">Tips for helping to make an your startup a success</Link></h5>
                        </div>
                    </div>
                    <div className="sidePost__item" data-background="/img/category/ide_post02.jpg">
                        <div className="sidePost__content">
                            <Link href="blog.html" className="tag">Travel</Link>
                            <h5 className="title tgcommon__hover"><Link href="blog-details.html">Tips for helping to make an your startup a success</Link></h5>
                        </div>
                    </div>
                    <div className="sidePost__item" data-background="/img/category/ide_post02.jpg">
                        <div className="sidePost__content">
                            <Link href="blog.html" className="tag">Gaming</Link>
                            <h5 className="title tgcommon__hover"><Link href="blog-details.html">Tips for helping to make an your startup a success</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widget sidebar-widget">
                <h4 className="widget-title">Instagram Feeds</h4>
                <div className="sidebarInsta__wrap">
                    <div className="sidebarInsta__top">
                        <div className="sidebarInsta__logo">
                            <img src="/img/instagram/insta_logo.png" alt="img" />
                        </div>
                        <div className="sidebarInsta__info">
                            <h6 className="name"><Link href="#">ins.co/sarso.co</Link></h6>
                            <span className="designation">Code Supply Co.</span>
                        </div>
                    </div>
                    <div className="sidebarInsta__slider-wrap">
                        <div className="swiper-container sidebarInsta-active">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta01.jpg" alt="img" /></Link>
                                </div>
                                <div className="swiper-slide">
                                    <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta02.jpg" alt="img" /></Link>
                                </div>
                                <div className="swiper-slide">
                                    <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta03.jpg" alt="img" /></Link>
                                </div>
                                <div className="swiper-slide">
                                    <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta04.jpg" alt="img" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-container sidebarInsta-active-2" dir="rtl">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta05.jpg" alt="img" /></Link>
                                </div>
                                <div className="swiper-slide">
                                    <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta06.jpg" alt="img" /></Link>
                                </div>
                                <div className="swiper-slide">
                                    <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta07.jpg" alt="img" /></Link>
                                </div>
                                <div className="swiper-slide">
                                    <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta08.jpg" alt="img" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebarInsta__bottom">
                        <Link href="https://www.instagram.com/" target="_blank" className="btn"><i className="fab fa-instagram"></i><span className="text">Follow Me</span></Link>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar