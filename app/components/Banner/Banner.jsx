import React from 'react'
import Link from 'next/link'

const Banner = () => {
  return (
    <section className="tgbanner__area">
        <div className="container">
            <div className="tgbanner__grid">
                <div className="tgbanner__post big-post">
                    <div className="tgbanner__thumb tgImage__hover">
                        <Link href="/blog/test"><img src="/img/blog/blog01.jpg" alt="img" /></Link>
                    </div>
                    <div className="tgbanner__content">
                        <ul className="tgbanner__content-meta list-wrap">
                            <li className="category"><Link href="/category/technology">technology</Link></li>
                            <li><span className="by">By</span> <Link href="/category/technology">alonso d.</Link></li>
                            <li>nov 21, 2022</li>
                        </ul>
                        <h2 className="title tgcommon__hover"><Link href="/blog/test">The multiverse is a hypothetical group of multiple universes.</Link></h2>
                    </div>
                </div>
                <div className="tgbanner__side-post">
                    <div className="tgbanner__post small-post">
                        <div className="tgbanner__thumb tgImage__hover">
                            <Link href="/blog/test"><img src="/img/blog/blog02.jpg" alt="img" /></Link>
                        </div>
                        <div className="tgbanner__content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="/category/technology">multiverse</Link></li>
                            </ul>
                            <h2 className="title tgcommon__hover"><Link href="/blog/test">Together these universes comprise everything that exists</Link></h2>
                        </div>
                    </div>
                    <div className="tgbanner__post small-post">
                        <div className="tgbanner__thumb tgImage__hover">
                            <Link href="/blog/test"><img src="/img/blog/blog03.jpg" alt="img" /></Link>
                        </div>
                        <div className="tgbanner__content">
                            <ul className="tgbanner__content-meta list-wrap">
                                <li className="category"><Link href="/category/technology">technology</Link></li>
                            </ul>
                            <h2 className="title tgcommon__hover"><Link href="/blog/test">Bubble universes or baby black hole universes may exist...</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner