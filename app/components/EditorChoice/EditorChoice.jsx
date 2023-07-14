import React from 'react'
import Link from 'next/link'

const EditorChoice = ({categories}) => {
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
                {categories.filter(category => category.name !== 'Uncategorized').map((category,index) => (
                    <div className="col-lg-4 col-sm-6">
                        <div className="featured__post">
                            <div className="featured__thumb" data-background="assets/img/blog/blog08.jpg">0{ index + 1 }</div>
                            <div className="featured__content">
                                <ul className="tgbanner__content-meta list-wrap">
                                    <li className="category"><Link href="blog.html">{category.name}</Link></li>
                                    {/* <li><span className="by">By</span> <Link href="blog.html">Yokolili L.</Link></li> */}
                                </ul>
                                <h4 className="title tgcommon__hover"><Link href="blog-details.html">A hypothetical collection of
                                potentially diverse</Link></h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default EditorChoice