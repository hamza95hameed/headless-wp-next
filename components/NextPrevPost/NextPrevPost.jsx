import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { getThumbnail } from '@/utils/common';

const NextPrevPost = ({prevPost, nextPost}) => {
    return (
        <div className="blog-prev-next-posts">
            <div className="row">
                {prevPost && <div className="col-xl-6 col-lg-8 col-md-6">
                    <div className="pn-post-item">
                        <div className="thumb">
                            <Link href={`/blog/${prevPost.slug}`}><Image width={820} height={440} loading="eager" priority={true} src={getThumbnail(prevPost)} alt="alt" /></Link>
                        </div>
                        <div className="content">
                            <span>Prev Post</span>
                            <h5 className="title tgcommon__hover"><Link href={`/blog/${prevPost.slug}`} dangerouslySetInnerHTML={{ __html: prevPost.title.rendered }}></Link></h5>
                        </div>
                    </div>
                </div>}
                {nextPost && <div className="col-xl-6 col-lg-8 col-md-6">
                    <div className="pn-post-item next-post">
                        <div className="thumb">
                            <Link href={`/blog/${nextPost.slug}`}><Image width={820} height={440} loading="eager" priority={true} src={getThumbnail(nextPost)} alt="alt" /></Link>
                        </div>
                        <div className="content">
                            <span>Next Post</span>
                            <h5 className="title tgcommon__hover"><Link href={`/blog/${nextPost.slug}`} dangerouslySetInnerHTML={{ __html: nextPost.title.rendered }}></Link></h5>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default NextPrevPost