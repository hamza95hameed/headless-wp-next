import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb"
import Link from 'next/link'
import { getThumbnail, getCategory, getAuthor, formatDate } from '@/utils/common';
import Sidebar from '@/app/components/Sidebar/Sidebar'

export default async function Page({ params }) {
	let post       = await fetch(`http://localhost:3000/api/posts?slug=${params.slug}&type=slug`);
	post 	       = await post.json();
	post 	       = post[0];
	let categories = await fetch('http://localhost:3000/api/categories');
	categories     = await categories.json();
	return (
		<>
			<Breadcrumb type={'blog'} name={post.title.rendered}></Breadcrumb>
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
							<div className="blog-details-wrap">
								<ul className="tgbanner__content-meta list-wrap">
									<li className="category"><Link href={`/category/${getCategory(post).slug}`}>{getCategory(post).name}</Link></li>
									<li><span className="by">By</span> <Link href={`/author/${getAuthor(post).slug}`}>{getAuthor(post).name}</Link></li>
									<li>{formatDate(post.date)}</li>
									<li>23 comments</li>
								</ul>
								<h2 className="title" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
								<div className="blog-details-thumb">
									<img src={getThumbnail(post)} alt="" />
								</div>
								<div className="blog-details-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
									
								</div>
								<div className="blog-details-bottom">
									<div className="row align-items-baseline">
										<div className="col-xl-6 col-md-7">
											<div className="blog-details-tags">
												<ul className="list-wrap mb-0">
													{categories.filter((category) => post.categories.includes(category.id)).map((category) => (
														<li key={category.id}>
															<Link href={`/category/${category.slug}`}>{category.name}</Link>
														</li>
													))}						
												</ul>
											</div>
										</div>
										<div className="col-xl-6 col-md-5">
											<div className="blog-details-share">
												<h6 className="share-title">Share Now:</h6>
												<ul className="list-wrap mb-0">
													<li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
													<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
													<li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
													<li><Link href="#"><i className="fab fa-behance"></i></Link></li>
													<li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="blog-avatar-wrap">
									<div className="blog-avatar-img">
										<Link href="#"><i className="far fa-check"></i><img src="/img/others/avatar.png" alt="img" /></Link>
									</div>
									<div className="blog-avatar-content">
										<p>Monty Hython is a Writer at Sarsa and has been covering emerging technologies &
											venture capital there since 2013. He covers a wide variety of news from early and late stage startups to massive tech behemoths.</p>
										<h5 className="name">Alison Fiano</h5>
										<span className="designation">OG Author</span>
									</div>
								</div>
								<div className="blog-prev-next-posts">
									<div className="row">
										<div className="col-xl-6 col-lg-8 col-md-6">
											<div className="pn-post-item">
												<div className="thumb">
													<Link href="blog-details.html"><img src="/img/lifestyle/life_style06.jpg" alt="img" /></Link>
												</div>
												<div className="content">
													<span>Prev Post</span>
													<h5 className="title tgcommon__hover"><Link href="blog-details.html">3 Stocks to Buy and Hold Through the Panic...</Link></h5>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-lg-8 col-md-6">
											<div className="pn-post-item next-post">
												<div className="thumb">
													<Link href="blog-details.html"><img src="/img/lifestyle/life_style07.jpg" alt="img" /></Link>
												</div>
												<div className="content">
													<span>Next Post</span>
													<h5 className="title tgcommon__hover"><Link href="blog-details.html">Mood Boards for Product Designers dome...</Link></h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<Sidebar post={post} categories={categories}></Sidebar>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}