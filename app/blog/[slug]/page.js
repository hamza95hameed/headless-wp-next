import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb"
import Link from 'next/link'

export default function Page({ params }) {
  return (
    <>
      <Breadcrumb></Breadcrumb>
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
                  <li className="category"><Link href="blog.html">technology</Link></li>
                  <li><span className="by">By</span> <Link href="blog.html">alonso d.</Link></li>
                  <li>nov 22, 2022</li>
                  <li>23 comments</li>
                </ul>
                <h2 className="title">Envato officially goes carbon neutral ahead of Earth Day</h2>
                <div className="blog-details-thumb">
                  <img src="/img/lifestyle/life_style01.jpg" alt="" />
                </div>
                <div className="blog-details-content">
                  <p>In partnership with Sydney startup Trace, Envato is delivering on its sustainability promise as a B-Corp and meeting part of its recent commitment to the To Whom It Should Concern campaign. Envato is now officially carbon neutral, as part of a comprehensive new sustainability.</p>
                  <p>When we signed on to the To Whom It May Concern campaign we made a pledge to be 100% renewable by 2030 and carbon zero by 2040,” said Envato CEO Hichame Assi. “It’s a commitment made on the back of our B Corp certification, and one we believe reflects not just our values but a broader sense of how businesses can contribute to fighting climate change.</p>
                  <p>We are proud that our people can make a positive impact on the world around us through their work at Envato. And while there is still lots of work to do to realise carbon, we’re nonetheless pleased we’ve reached this sustainability milestone and thrilled to partner with Trace to further track and refine the management of our carbon footprint. An through Trace, Envato is now able to more comprehensively measure the amount of carbon emissions the business generates. This includes not just its physical offices in Melbourne, Guadalajara and Los Angeles, but also includes an estimate of the footprint of its 600 plus staff who work flexibly around the world, as well as the usage tied to its tech infrastructure including our cloud computing services.</p>
                  <div className="blog-details-inner">
                    <h3 className="inner-title">Building the Future of Artificial Intelligence</h3>
                    <p>When we signed on to the To Whom It May Concern campaign we made a pledge to be 100% renewable by 2030 and carbon zero by 2040,” said Envato CEO Hichame Assi. “It’s a commitment made on the back of our B Corp certification, and one we believe reflects not just our values but a broader sense of how businesses can contribute to fighting climate change.</p>
                    <div className="blog-details-images">
                      <div className="row">
                        <div className="col-md-4 col-sm-6">
                          <div className="details-inner-image">
                            <img src="/img/lifestyle/life_style02.jpg" alt="img" />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <div className="details-inner-image">
                            <img src="/img/lifestyle/life_style03.jpg" alt="img" />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <div className="details-inner-image">
                            <img src="/img/lifestyle/life_style04.jpg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>The Mount Sandy project in South Australia is one of those supported by Envato through Trace. Its permanent protection of the regionally and culturally important pocket. Trace CEO and Co-Founder Catherine Long said Envato was a perfect example of a fast-moving tech business that already has a demonstrable commitment to sustain.
                      “But they needed a solution for measuring and managing their carbon footprint that matched the speed & efficiency of the way they work footprint that matched the speed.</p>
                  </div>
                  <blockquote>
                    <p>“ 20 years ago today, Steve introduced the world to iMac. It set Apple on a new course and forever changed the way people look at computers. ”</p>
                    <div className="blockquote-cite">
                      <div className="image">
                        <img src="/img/others/about_me.png" alt="" />
                      </div>
                      <div className="info">
                        <h5>Miranda H. Halim</h5>
                        <span>Head Of Idea</span>
                      </div>
                    </div>
                  </blockquote>
                  <p>We are proud that our people can make a positive impact on the world around us through their work at Envato. And while there is still lots of work to do to realise carbon, we’re nonetheless pleased we’ve reached this sustainability milestone and thrilled to partner with Trace to further track and refine the management of our carbon footprint. An
                    through Trace, Envato is now able to more comprehensively measure the amount of carbon emissions the business generates. This includes not just its physical offices in Melbourne, Guadalajara and Los Angeles, but also includes an estimate of the footprint of its 600 plus staff who work flexibly around the world, as well as the usage tied to its ech infrastructure including our cloud computing services.</p>
                  <div className="blog-details-inner">
                    <h3 className="inner-title">The Creative Cloud</h3>
                    <p>When we signed on to the To Whom It May Concern campaign we made a pledge to be 100% renewable by 2030 and carbon zero by 2040,” said Envato CEO Hichame Assi..</p>
                    <ul className="list-wrap">
                      <li><span>The games generate:</span>Revenue through sales of digital items, such as special costumes, which appear in a rotating storefront that is updated daily.</li>
                      <li><span>Players use in-game:</span>Currency to customize their appearance, and the daily refresh of the store incentives players to buy fresh gear or risk missing out on it entirely.</li>
                      <li><span>Players have:</span> Already spent more than $1 billion on Fortnite’s in-game purchases, according to IGN report.</li>
                    </ul>
                  </div>
                  <div className="details-advertisement">
                    <Link href="#"><img src="/img/others/advertisement02.png" alt="img" /></Link>
                  </div>
                  <p>Envato is now able to more comprehensively measure the amount of carbon emissions the business generates. includes not just its physical offices in Melbourne, Guadalajara and Los Angeles, but also includes an estimate of footprint of its 600 plus staff who work flexibly around the world, as well as the usage tied to its tech infrastructure including our cloud computing services lexibly around the world.</p>
                </div>
                <div className="blog-details-bottom">
                  <div className="row align-items-baseline">
                    <div className="col-xl-6 col-md-7">
                      <div className="blog-details-tags">
                        <ul className="list-wrap mb-0">
                          <li><Link href="#">technology</Link></li>
                          <li><Link href="#">finance</Link></li>
                          <li><Link href="#">business</Link></li>
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
              <aside className="blog-sidebar">
                <div className="widget sidebar-widget">
                  <div className="tgAbout-me">
                    <div className="tgAbout-thumb">
                      <img src="/img/others/about_me.png" alt="me" />
                    </div>
                    <div className="tgAbout-info">
                      <p className="intro">Hi there, I’m <span>Rosalina D.</span></p>
                      <span className="designation">Content Writer</span>
                    </div>
                    <div className="tgAbout-social">
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-behance"></i></Link>
                      <Link href="#"><i className="fab fa-youtube"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="widget sidebar-widget widget_categories">
                  <h4 className="widget-title">Trending Category</h4>
                  <ul className="list-wrap">
                    <li>
                      <div className="thumb"><Link href="blog.html"><img src="/img/category/side_category01.jpg" alt="img" /></Link></div>
                      <Link href="blog.html">technology</Link>
                      <span className="float-right">12</span>
                    </li>
                    <li>
                      <div className="thumb"><Link href="blog.html"><img src="/img/category/side_category02.jpg" alt="img" /></Link></div>
                      <Link href="blog.html">business</Link>
                      <span className="float-right">08</span>
                    </li>
                    <li>
                      <div className="thumb"><Link href="blog.html"><img src="/img/category/side_category03.jpg" alt="img" /></Link></div>
                      <Link href="blog.html">fitness</Link>
                      <span className="float-right">13</span>
                    </li>
                    <li>
                      <div className="thumb"><Link href="blog.html"><img src="/img/category/side_category04.jpg" alt="img" /></Link></div>
                      <Link href="blog.html">Gadgets</Link>
                      <span className="float-right">09</span>
                    </li>
                    <li>
                      <div className="thumb"><Link href="blog.html"><img src="/img/category/side_category05.jpg" alt="img" /></Link></div>
                      <Link href="blog.html">politics</Link>
                      <span className="float-right">15</span>
                    </li>
                  </ul>
                </div>
                <div className="widget sidebar-widget">
                  <div className="sidePost-active">
                    <div className="sidePost__item" data-background="/img/category/side_post01.jpg">
                      <div className="sidePost__content">
                        <Link href="blog.html" className="tag">Technology</Link>
                        <h5 className="title tgcommon__hover"><Link href="blog-details.html">Tips for helping to make an your startup a success</Link></h5>
                      </div>
                    </div>
                    <div className="sidePost__item" data-background="/img/category/side_post02.jpg">
                      <div className="sidePost__content">
                        <Link href="blog.html" className="tag">Travel</Link>
                        <h5 className="title tgcommon__hover"><Link href="blog-details.html">Tips for helping to make an your startup a success</Link></h5>
                      </div>
                    </div>
                    <div className="sidePost__item" data-background="/img/category/side_post02.jpg">
                      <div className="sidePost__content">
                        <Link href="blog.html" className="tag">Gaming</Link>
                        <h5 className="title tgcommon__hover"><Link href="blog-details.html">Tips for helping to make an your startup a success</Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget sidebar-widget">
                  <h4 className="widget-title">Instagram Feeds</h4>
                  <div className="sidebarInsta__wrap">
                    <div className="sidebarInsta__top">
                      <div className="sidebarInsta__logo">
                        <img src="/img/instagram/insta_logo.png" alt="img" />
                      </div>
                      <div className="sidebarInsta__info">
                        <h6 className="name"><Link href="#">ins.co/sarso.co</Link></h6>
                        <span className="designation">Code Supply Co.</span>
                      </div>
                    </div>
                    <div className="sidebarInsta__slider-wrap">
                      <div className="swiper-container sidebarInsta-active">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta01.jpg" alt="img" /></Link>
                          </div>
                          <div className="swiper-slide">
                            <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta02.jpg" alt="img" /></Link>
                          </div>
                          <div className="swiper-slide">
                            <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta03.jpg" alt="img" /></Link>
                          </div>
                          <div className="swiper-slide">
                            <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta04.jpg" alt="img" /></Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-container sidebarInsta-active-2" dir="rtl">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta05.jpg" alt="img" /></Link>
                          </div>
                          <div className="swiper-slide">
                            <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta06.jpg" alt="img" /></Link>
                          </div>
                          <div className="swiper-slide">
                            <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta07.jpg" alt="img" /></Link>
                          </div>
                          <div className="swiper-slide">
                            <Link href="https://www.instagram.com/" target="_blank"><img src="/img/instagram/side_insta08.jpg" alt="img" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sidebarInsta__bottom">
                      <Link href="https://www.instagram.com/" target="_blank" className="btn"><i className="fab fa-instagram"></i><span className="text">Follow Me</span></Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}