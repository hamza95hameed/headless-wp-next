import React from 'react'
import Link from 'next/link'
import { formatDate, getAuthor, getCategory, getThumbnail } from '@/utils/common'

const StoriesPost = ({posts}) => {
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
                {posts.slice(0,2).map(post => (
                    <div className="col-md-6">
                        <div className="stories-post__item">
                            <div className="stories-post__thumb tgImage__hover">
                                <Link href={`/blog/${post.slug}`}><img src={getThumbnail(post)} width="100%" height="auto" alt="img" /></Link>
                            </div>
                            <div className="stories-post__content video__post-content">
                                <ul className="tgbanner__content-meta list-wrap">
                                    <li className="category"><Link href={`/category/${getCategory(post).slug}`}>{getCategory(post).name}</Link></li>
                                    <li><span className="by">By</span> <Link href={`/author/${getAuthor(post).slug}`}>{getAuthor(post).name}</Link></li>
                                    <li>{formatDate(post.date)}</li>
                                </ul>
                                <h3 className="title tgcommon__hover">
                                    <Link href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                {posts.slice(3,7).map(post => (
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="trending__post stories-small-post__item">
                            <div className="trending__post-thumb tgImage__hover">
                                <Link href="#" className="addWish"><i className="fal fa-heart"></i></Link>
                                <Link href={`/blog/${post.slug}`}><img src={getThumbnail(post)} width="100%" height="auto" alt="img" /></Link>
                            </div>
                            <div className="trending__post-content">
                                <ul className="tgbanner__content-meta list-wrap">
                                    <li className="category"><Link href={`/category/${getCategory(post).slug}`}>{getCategory(post).name}</Link></li>
                                    <li><span className="by">By</span> <Link href={`/author/${getAuthor(post).slug}`}>{getAuthor(post).name}</Link></li>
                                </ul>
                                <h4 className="title tgcommon__hover">
                                    <Link href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Link>
                                </h4>
                                <ul className="post__activity list-wrap">
                                    <li><i className="fal fa-signal"></i> 1.5k</li>
                                    <li><Link href={`/blog/${post.slug}`}><i className="fal fa-comment-dots"></i> 150</Link></li>
                                    <li><i className="fal fa-share-alt"></i> 32</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default StoriesPost