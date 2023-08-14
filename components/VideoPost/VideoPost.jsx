import React from 'react'
import Link from 'next/link'
import { formatDate, getCategory, getThumbnail, getAuthor } from '@/utils/common'

const VideoPost = ({posts}) => {
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
                            <Link href={`/blog/${posts[0].slug}`}><img src={getThumbnail(posts[0])} alt="img" /></Link>
                        </div>
                        <div className="video__post-content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href={`/category/${getCategory(posts[0]).slug}`}>{getCategory(posts[0]).name}</Link></li>
                                <li><span className="by">By</span> <Link href={`/author/${getAuthor(posts[0]).slug}`}>{getAuthor(posts[0]).name}</Link></li>
                                <li>{formatDate(posts[0].date)}</li>
                            </ul>
                            <h3 className="title tgcommon__hover"><Link href={`/blog/${posts[0].slug}`}dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }}></Link></h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                    {posts.slice(1,5).map(post => (
                        <div className="video__post-item side-post">
                            <div className="video__post-thumb tgImage__hover">
                                <Link href={`/blog/${post.slug}`} className="popup-video"><img src={getThumbnail(post)} alt="img" /></Link>
                            </div>
                            <div className="video__post-content">
                                <ul className="tgbanner__content-meta list-wrap">
                                    <li className="category"><Link href={`/category/${getCategory(post).slug}`}>{getCategory(post).name}</Link></li>
                                    <li><span className="by">By</span> <Link href={`/author/${getAuthor(post).slug}`}>{getAuthor(post).name}</Link></li>
                                </ul>
                                <h3 className="title tgcommon__hover">
                                    <Link href={`/blog/${post.slug}`}dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Link>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default VideoPost