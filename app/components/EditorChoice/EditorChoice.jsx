import React from 'react'
import Link from 'next/link'

const EditorChoice = () => {
  return (
    <section className="featured-post-area section__hover-line pt-75">
        <div className="container">
            <div className="section__title-wrap mb-40">
                <div className="row align-items-end">
                    <div className="col-sm-6">
                        <div className="section__title">
                            <span className="section__sub-title">Featured</span>
                            <h3 className="section__main-title">Editor Choice</h3>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="section__read-more text-start text-sm-end">
                            <Link href="blog.html">More Featured Post <i className="far fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="featured__post">
                        <div className="featured__thumb" data-background="assets/img/blog/blog08.jpg">01</div>
                        <div className="featured__content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">nature</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">Yokolili L.</Link></li>
                            </ul>
                            <h4 className="title tgcommon__hover"><Link href="blog-details.html">A hypothetical collection of
                            potentially diverse</Link></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="featured__post">
                        <div className="featured__thumb" data-background="assets/img/blog/blog09.jpg">02</div>
                        <div className="featured__content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">seo</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">limonda a.</Link></li>
                            </ul>
                            <h4 className="title tgcommon__hover"><Link href="blog-details.html">Experimentally accessible by a connected community</Link></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="featured__post">
                        <div className="featured__thumb" data-background="assets/img/blog/blog10.jpg">03</div>
                        <div className="featured__content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">human</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">ukolili l.</Link></li>
                            </ul>
                            <h4 className="title tgcommon__hover"><Link href="blog-details.html">Stanford physicists Andrei
                            Linde In a new study</Link></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="featured__post">
                        <div className="featured__thumb" data-background="assets/img/blog/blog11.jpg">04</div>
                        <div className="featured__content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">technology</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">Pablo M.</Link></li>
                            </ul>
                            <h4 className="title tgcommon__hover"><Link href="blog-details.html">Observable universes each of which would comprise</Link></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="featured__post">
                        <div className="featured__thumb" data-background="assets/img/blog/blog12.jpg">05</div>
                        <div className="featured__content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">gaming</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">hilix x.</Link></li>
                            </ul>
                            <h4 className="title tgcommon__hover"><Link href="blog-details.html">Of observers the observable
                            known universe</Link></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="featured__post">
                        <div className="featured__thumb" data-background="assets/img/blog/blog13.jpg">06</div>
                        <div className="featured__content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="blog.html">medical</Link></li>
                                <li><span className="by">By</span> <Link href="blog.html">hilix x.</Link></li>
                            </ul>
                            <h4 className="title tgcommon__hover"><Link href="blog-details.html">Accessible to telescopes, is
                            about 90 billion years</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EditorChoice