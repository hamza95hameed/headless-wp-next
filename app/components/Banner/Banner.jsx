import React from 'react'
import Link from 'next/link'
import { formatDate, getAuthor, getCategory, getThumbnail } from '@/utils/common'

const Banner = ({posts}) => {
    return (
        <section className="tgbanner__area">
            <div className="container">
                <div className="tgbanner__grid">
                    <div className="tgbanner__post big-post">
                        <div className="tgbanner__thumb tgImage__hover">
                            <Link href={`/blog/${posts[0].slug}`}><img src={getThumbnail(posts[0])} alt="img" /></Link>
                        </div>
                        <div className="tgbanner__content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href={`/category/${getCategory(posts[0]).slug}`}>{getCategory(posts[0]).name}</Link></li>
                                <li><span className="by">By</span> <Link href={`/author/${getAuthor(posts[0]).slug}`}>{getAuthor(posts[0]).name}</Link></li>
                                <li>{ formatDate(posts[0].date )}</li>
                            </ul>
                            <h2 className="title tgcommon__hover">
                                <Link href={`/blog/${posts[0].slug}`} dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }}></Link>
                            </h2>
                        </div>
                    </div>
                    <div className="tgbanner__side-post">
                        <div className="tgbanner__post small-post">
                            <div className="tgbanner__thumb tgImage__hover">
                                <Link href={`/blog/${posts[1].slug}`}><img src={getThumbnail(posts[1])} alt="img" /></Link>
                            </div>
                            <div className="tgbanner__content">
                                <ul className="tgbanner__content-meta list-wrap">
                                    <li className="category"><Link href={`/category/${getCategory(posts[1]).slug}`}>{getCategory(posts[1]).name}</Link></li>
                                </ul>
                                <h2 className="title tgcommon__hover">
                                    <Link href={`/blog/${posts[1].slug}`} dangerouslySetInnerHTML={{ __html: posts[1].title.rendered }}></Link>
                                </h2>
                            </div>
                        </div>
                        <div className="tgbanner__post small-post">
                            <div className="tgbanner__thumb tgImage__hover">
                                <Link href={`/blog/${posts[2].slug}`}><img src={getThumbnail(posts[2])} alt="img" /></Link>
                            </div>
                            <div className="tgbanner__content">
                                <ul className="tgbanner__content-meta list-wrap">
                                    <li className="category"><Link href={`/category/${getCategory(posts[2]).slug}`}>{getCategory(posts[2]).name}</Link></li>
                                </ul>
                                <h2 className="title tgcommon__hover">
                                    <Link href={`/blog/${posts[2].slug}`} dangerouslySetInnerHTML={{ __html: posts[2].title.rendered }}></Link>
                                </h2>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner