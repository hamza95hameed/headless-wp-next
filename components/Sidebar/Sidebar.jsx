import React from 'react'
import { getAuthor, getAuthorImage } from '@/utils/common';
import Link from 'next/link'
import SidebarPost from '../SidebarPost/SidebarPost';
import { InstagramFeed } from '../InstagramFeed/InstagramFeed';

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
                        <p className="intro">Hi there, I’m <span>{getAuthor(post).name}.</span></p>
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
                <SidebarPost />
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
                        <InstagramFeed/>
                        <InstagramFeed dir={'rtl'}/>
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