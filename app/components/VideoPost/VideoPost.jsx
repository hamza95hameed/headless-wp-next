import React from 'react'
import Link from 'next/link'

const VideoPost = () => {
  return (
    <section className="video-post-area section__hover-line white-bg pt-75 pb-80">
        <div className="container">
            <div className="section__title-wrap mb-40">
                <div className="row align-items-end">
                    <div className="col-sm-6">
                        <div className="section__title">
                            <span className="section__sub-title">Video</span>
                            <h3 className="section__main-title">Recent Video Post</h3>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="section__read-more text-start text-sm-end">
                            <Link href="blog.html">More Video Post <i className="far fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-8 col-lg-7">
                    <div className="video__post-item big-post">
                        <div className="video__post-thumb">
                            <Link href="blog-details.html"><img src="/img/blog/blog14.jpg" alt="img" /></Link>
                            <Link href="https://www.youtube.com/watch?v=FT3ODSg1GFE" className="popup-video"><i className="fas fa-play"></i></Link>
                        </div>
                        <div className="video__post-content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">technology</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">alonso d.</Link></li>
                                <li>nov 21, 2022</li>
                            </ul>
                            <h3 className="title tgcommon__hover"><Link href="blog-details.html">The multiverse is a hypothetical group of multiple universes.</Link></h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                    <div className="video__post-item side-post">
                        <div className="video__post-thumb tgImage__hover">
                            <Link href="https://www.youtube.com/watch?v=FT3ODSg1GFE" className="popup-video"><img src="/img/blog/blog15.jpg" alt="img" /><i className="fas fa-play"></i></Link>
                        </div>
                        <div className="video__post-content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">medical</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">alonso d.</Link></li>
                            </ul>
                            <h3 className="title tgcommon__hover"><Link href="blog-details.html">Stanford physicists Andrei
                            Linde In a new study</Link></h3>
                        </div>
                    </div>
                    <div className="video__post-item side-post">
                        <div className="video__post-thumb tgImage__hover">
                            <Link href="https://www.youtube.com/watch?v=FT3ODSg1GFE" className="popup-video"><img src="/img/blog/blog16.jpg" alt="img" /><i className="fas fa-play"></i></Link>
                        </div>
                        <div className="video__post-content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">medical</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">alonso d.</Link></li>
                            </ul>
                            <h3 className="title tgcommon__hover"><Link href="blog-details.html">Accessible to telescopes, is about 90 billion years</Link></h3>
                        </div>
                    </div>
                    <div className="video__post-item side-post">
                        <div className="video__post-thumb tgImage__hover">
                            <Link href="https://www.youtube.com/watch?v=FT3ODSg1GFE" className="popup-video"><img src="/img/blog/blog17.jpg" alt="img" /><i className="fas fa-play"></i></Link>
                        </div>
                        <div className="video__post-content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">medical</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">alonso d.</Link></li>
                            </ul>
                            <h3 className="title tgcommon__hover"><Link href="blog-details.html">Observable universes each of which would comprise</Link></h3>
                        </div>
                    </div>
                    <div className="video__post-item side-post">
                        <div className="video__post-thumb tgImage__hover">
                            <Link href="https://www.youtube.com/watch?v=FT3ODSg1GFE" className="popup-video"><img src="/img/blog/blog18.jpg" alt="img" /><i className="fas fa-play"></i></Link>
                        </div>
                        <div className="video__post-content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">medical</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">alonso d.</Link></li>
                            </ul>
                            <h3 className="title tgcommon__hover"><Link href="blog-details.html">Experimentally accessible by a connected community</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default VideoPost