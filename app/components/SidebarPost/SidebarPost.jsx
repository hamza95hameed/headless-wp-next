"use client"
import React from 'react'
import Slider from "react-slick";
import Link from 'next/link';

const SidebarPost = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    var bgImage = `/img/category/side_post01.jpg`;
    return (
        <Slider {...settings} className="sidePost-active">
            <div>
                <div className="sidePost__item" style={{ backgroundImage: `url(${bgImage})`}}>
                    <div className="sidePost__content">
                        <Link href="blog.html" className="tag">Technology</Link>
                        <h5 className="title tgcommon__hover"><Link href="blog-details.html">Tips for helping to make an your startup a success</Link></h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="sidePost__item" style={{ backgroundImage: `url(${bgImage})`}}>
                    <div className="sidePost__content">
                        <Link href="blog.html" className="tag">Travel</Link>
                        <h5 className="title tgcommon__hover"><Link href="blog-details.html">Tips for helping to make an your startup a success</Link></h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="sidePost__item" style={{ backgroundImage: `url(${bgImage})`}}>
                    <div className="sidePost__content">
                        <Link href="blog.html" className="tag">Gaming</Link>
                        <h5 className="title tgcommon__hover"><Link href="blog-details.html">Tips for helping to make an your startup a success</Link></h5>
                    </div>
                </div>
            </div>
        </Slider>

    )
}

export default SidebarPost