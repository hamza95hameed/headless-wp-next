import React from 'react'
import Link from 'next/link'

const StoriesPost = () => {
  return (
    <section className="stories-post-area section__hover-line pt-75 pb-40">
        <div className="container">
            <div className="section__title-wrap mb-40">
                <div className="row align-items-end">
                    <div className="col-sm-6">
                        <div className="section__title">
                            <span className="section__sub-title">Stories</span>
                            <h3 className="section__main-title">Popular Stories</h3>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="section__read-more text-start text-sm-end">
                            <Link href="blog.html">Stories Post <i className="far fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-gutters-40">
                <div className="col-md-6">
                    <div className="stories-post__item">
                        <div className="stories-post__thumb tgImage__hover">
                            <Link href="blog-details.html"><img src="/img/blog/blog25.jpg" alt="img" /></Link>
                        </div>
                        <div className="stories-post__content video__post-content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">technology</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">alonso d.</Link></li>
                                <li>nov 21, 2022</li>
                            </ul>
                            <h3 className="title tgcommon__hover"><Link href="blog-details.html">The multiverse is a hypothetical group of the multiple universes.</Link></h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="stories-post__item">
                        <div className="stories-post__thumb tgImage__hover">
                            <Link href="blog-details.html"><img src="/img/blog/blog26.jpg" alt="img" /></Link>
                        </div>
                        <div className="stories-post__content video__post-content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">technology</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">alonso d.</Link></li>
                                <li>nov 22, 2022</li>
                            </ul>
                            <h3 className="title tgcommon__hover"><Link href="blog-details.html">Experimentally accessible by a connection to the multiple communities</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="trending__post stories-small-post__item">
                        <div className="trending__post-thumb tgImage__hover">
                            <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                            <Link href="blog-details.html"><img src="/img/blog/blog27.jpg" alt="img" /></Link>
                        </div>
                        <div className="trending__post-content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">Gaming</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">miranda h.</Link></li>
                            </ul>
                            <h4 className="title tgcommon__hover"><Link href="blog-details.html">Scientists speculate that ours might not be held</Link></h4>
                            <ul className="post__activity list-wrap">
                                <li><i className="fal fa-signal"></i> 1.5k</li>
                                <li><Link href="blog-details.html"><i className="fal fa-comment-dots"></i> 150</Link></li>
                                <li><i className="fal fa-share-alt"></i> 32</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="trending__post stories-small-post__item">
                        <div className="trending__post-thumb tgImage__hover">
                            <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                            <Link href="blog-details.html"><img src="/img/blog/blog28.jpg" alt="img" /></Link>
                        </div>
                        <div className="trending__post-content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">tech</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">miranda h.</Link></li>
                            </ul>
                            <h4 className="title tgcommon__hover"><Link href="blog-details.html">The Multiverse is the collection of alternate universes</Link></h4>
                            <ul className="post__activity list-wrap">
                                <li><i className="fal fa-signal"></i> 1.5k</li>
                                <li><Link href="blog-details.html"><i className="fal fa-comment-dots"></i> 150</Link></li>
                                <li><i className="fal fa-share-alt"></i> 32</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="trending__post stories-small-post__item">
                        <div className="trending__post-thumb tgImage__hover">
                            <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                            <Link href="blog-details.html"><img src="/img/blog/blog29.jpg" alt="img" /></Link>
                        </div>
                        <div className="trending__post-content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">movie</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">miranda h.</Link></li>
                            </ul>
                            <h4 className="title tgcommon__hover"><Link href="blog-details.html">That share a universal hierarchy a large variety of these</Link></h4>
                            <ul className="post__activity list-wrap">
                                <li><i className="fal fa-signal"></i> 1.2k</li>
                                <li><Link href="blog-details.html"><i className="fal fa-comment-dots"></i> 150</Link></li>
                                <li><i className="fal fa-share-alt"></i> 26</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="trending__post stories-small-post__item">
                        <div className="trending__post-thumb tgImage__hover">
                            <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                            <Link href="blog-details.html"><img src="/img/blog/blog30.jpg" alt="img" /></Link>
                        </div>
                        <div className="trending__post-content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">sports</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">miranda h.</Link></li>
                            </ul>
                            <h4 className="title tgcommon__hover"><Link href="blog-details.html">Universes were originated from another due to a major</Link></h4>
                            <ul className="post__activity list-wrap">
                                <li><i className="fal fa-signal"></i> 1.2k</li>
                                <li><Link href="blog-details.html"><i className="fal fa-comment-dots"></i> 150</Link></li>
                                <li><i className="fal fa-share-alt"></i> 26</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StoriesPost