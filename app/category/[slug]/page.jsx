import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb'
import { getThumbnail, getCategory, getAuthor, formatDate } from '@/utils/common';
import Sidebar from '@/app/components/Sidebar/Sidebar';

export default async function Page({ params }) {
    let categories = await fetch('http://localhost:3000/api/categories');
	categories     = await categories.json();
    let cat        = categories.find((category) => category.slug === params.slug)
    let posts      = await fetch(`http://localhost:3000/api/posts?slug=${cat.id}&type=categories`);
	posts          = await posts.json();

    return (
        <>
            <Breadcrumb type={'category'} name={cat.name}></Breadcrumb>
            <section className="blog-details-area pt-80 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-1">
                            <div className="blog-details-social">
                                <ul className="list-wrap">
                                    <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-behance"></i></Link></li>
                                    <li><Link href="#"><i className="fas fa-share"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-post-wrapper">
                                {posts.map((post) => (
                                    <div className="latest__post-item" key={post.id}>
                                        <div className="latest__post-thumb tgImage__hover">
                                            <Link href={`/blog/${post.slug}`}><img src={getThumbnail(post)} width="100%" alt="img" /></Link>
                                        </div>
                                        <div className="latest__post-content">
                                            <ul className="tgbanner__content-meta list-wrap">
                                                <li className="category"><Link href={`/category/${getCategory(post).slug}`}>{getCategory(post).name}</Link></li>
                                                <li><span className="by">By</span> <Link href={`/author/${getAuthor(post).slug}`}>{getAuthor(post).name}</Link></li>
                                                <li>{formatDate(post.date)}</li>
                                            </ul>
                                            <h3 className="title tgcommon__hover">
                                                <Link href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Link>
                                            </h3>
                                            {/* <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p> */}
                                            <div className="latest__post-read-more">
                                                <Link href={`/blog/${post.slug}`}>Read More <i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="pagination__wrap">
                                    <ul className="list-wrap">
                                        <li className="active"><Link href="#">01</Link></li>
                                        <li><Link href="#">02</Link></li>
                                        <li><Link href="#">...</Link></li>
                                        <li><Link href="#">06</Link></li>
                                        <li><Link href="#"><i className="fas fa-angle-double-right"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                        <Sidebar post={posts[0]} categories={categories}></Sidebar>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}