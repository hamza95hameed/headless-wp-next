import React from 'react'
import Link from 'next/link'

const Trending = () => {
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
                            <div className="swiper-slide">
                                <div className="trending__post">
                                    <div className="trending__post-thumb tgImage__hover">
                                        <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                        <Link href="/blog/1"><img src="/img/blog/blog04.jpg" alt="img" /></Link>
                                        <span className="is_trend"><i className="fas fa-bolt"></i></span>
                                    </div>
                                    <div className="trending__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">Gaming</Link></li>
                                            <li><span className="by">By</span> <Link href="/blog">miranda h.</Link></li>
                                        </ul>
                                        <h4 className="title tgcommon__hover"><Link href="/blog/1">Scientists speculate that ours might not be held</Link></h4>
                                        <ul className="post__activity list-wrap">
                                            <li><i className="fal fa-signal"></i> 1.0k</li>
                                            <li><Link href="/blog/1"><i className="fal fa-comment-dots"></i> 128</Link></li>
                                            <li><i className="fal fa-share-alt"></i> 29</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="trending__post">
                                    <div className="trending__post-thumb tgImage__hover">
                                        <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                        <Link href="/blog/1"><img src="/img/blog/blog05.jpg" alt="img" /></Link>
                                    </div>
                                    <div className="trending__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">tech</Link></li>
                                            <li><span className="by">By</span> <Link href="/blog">miranda h.</Link></li>
                                        </ul>
                                        <h4 className="title tgcommon__hover"><Link href="/blog/1">The Multiverse is the collection of alternate universes</Link></h4>
                                        <ul className="post__activity list-wrap">
                                            <li><i className="fal fa-signal"></i> 1.0k</li>
                                            <li><Link href="/blog/1"><i className="fal fa-comment-dots"></i> 115</Link></li>
                                            <li><i className="fal fa-share-alt"></i> 19</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="trending__post">
                                    <div className="trending__post-thumb tgImage__hover">
                                        <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                        <Link href="/blog/1"><img src="/img/blog/blog06.jpg" alt="img" /></Link>
                                        <span className="is_trend"><i className="fas fa-bolt"></i></span>
                                    </div>
                                    <div className="trending__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">movie</Link></li>
                                            <li><span className="by">By</span> <Link href="/blog">miranda h.</Link></li>
                                        </ul>
                                        <h4 className="title tgcommon__hover"><Link href="/blog/1">That share a universal hierarchy a large variety of these</Link></h4>
                                        <ul className="post__activity list-wrap">
                                            <li><i className="fal fa-signal"></i> 1.2k</li>
                                            <li><Link href="/blog/1"><i className="fal fa-comment-dots"></i> 110</Link></li>
                                            <li><i className="fal fa-share-alt"></i> 16</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="trending__post">
                                    <div className="trending__post-thumb tgImage__hover">
                                        <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                        <Link href="/blog/1"><img src="/img/blog/blog07.jpg" alt="img" /></Link>
                                    </div>
                                    <div className="trending__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">sports</Link></li>
                                            <li><span className="by">By</span> <Link href="/blog">miranda h.</Link></li>
                                        </ul>
                                        <h4 className="title tgcommon__hover"><Link href="/blog/1">Universes were originated from another due to a major</Link></h4>
                                        <ul className="post__activity list-wrap">
                                            <li><i className="fal fa-signal"></i> 1.5k</li>
                                            <li><Link href="/blog/1"><i className="fal fa-comment-dots"></i> 150</Link></li>
                                            <li><i className="fal fa-share-alt"></i> 42</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="trending__post">
                                    <div className="trending__post-thumb tgImage__hover">
                                        <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                        <Link href="/blog/1"><img src="/img/blog/blog08.jpg" alt="img" /></Link>
                                    </div>
                                    <div className="trending__post-content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category"><Link href="/blog">sports</Link></li>
                                            <li><span className="by">By</span> <Link href="/blog">miranda h.</Link></li>
                                        </ul>
                                        <h4 className="title tgcommon__hover"><Link href="/blog/1">A hypothetical collection of potentially diverse</Link></h4>
                                        <ul className="post__activity list-wrap">
                                            <li><i className="fal fa-signal"></i> 1.5k</li>
                                            <li><Link href="/blog/1"><i className="fal fa-comment-dots"></i> 150</Link></li>
                                            <li><i className="fal fa-share-alt"></i> 32</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Trending