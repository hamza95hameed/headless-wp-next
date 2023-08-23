import React from 'react'
import Link from 'next/link'
import Image from "next/image";

const NextPrevPost = ({post}) => {
    return (
        <div className="blog-prev-next-posts">
            <div className="row">
                <div className="col-xl-6 col-lg-8 col-md-6">
                    <div className="pn-post-item">
                        <div className="thumb">
                            <Link href="blog-details.html"><img src="/img/lifestyle/life_style06.jpg" alt="img" /></Link>
                        </div>
                        <div className="content">
                            <span>Prev Post</span>
                            <h5 className="title tgcommon__hover"><Link href="blog-details.html">3 Stocks to Buy and Hold Through the Panic...</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-8 col-md-6">
                    <div className="pn-post-item next-post">
                        <div className="thumb">
                            <Link href="blog-details.html"><img src="/img/lifestyle/life_style07.jpg" alt="img" /></Link>
                        </div>
                        <div className="content">
                            <span>Next Post</span>
                            <h5 className="title tgcommon__hover"><Link href="blog-details.html">Mood Boards for Product Designers dome...</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextPrevPost