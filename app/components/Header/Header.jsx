import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <div className="header__top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-6 order-2 order-lg-0">
                        <div className="header__top-search">
                            <form action="#">
                                <input type="text" placeholder="Search here..." />
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 order-0 order-lg-2 d-none d-md-block">
                        <div className="header__top-logo logo text-lg-center">
                            <Link href="/" className="logo-dark"><img src="/img/logo/logo.png" alt="Logo" /></Link>
                            <Link href="/" className="logo-light"><img src="/img/logo/w_logo.png" alt="Logo" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-6 order-3 d-none d-sm-block">
                        <div className="header__top-right">
                            <ul className="list-wrap">
                                <li className="news-btn"><Link href="#newsletter" className="btn"><span className="btn-text">subscribe</span></Link></li>
                                <li className="lang">
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            ENG
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link className="dropdown-item" href="#">SPA</Link></li>
                                            <li><Link className="dropdown-item" href="#">GRE</Link></li>
                                            <li><Link className="dropdown-item" href="#">CIN</Link></li>
                                            <li><Link className="dropdown-item" href="#">CIN</Link></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="header-fixed-height"></div>
        <div id="sticky-header" className="tg-header__area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tgmenu__wrap">
                            <nav className="tgmenu__nav">
                                <div className="logo d-block d-md-none">
                                    <Link href="/" className="logo-dark"><img src="/img/logo/logo.png" alt="Logo" /></Link>
                                    <Link href="/" className="logo-light"><img src="/img/logo/w_logo.png" alt="Logo" /></Link>
                                </div>
                                <div className="offcanvas-toggle">
                                    <Link href="#"><i className="flaticon-menu-bar"></i></Link>
                                </div>
                                <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                    <ul className="navigation">
                                        <li className="active menu-item-has-children"><Link href="#">Home</Link>
                                            <ul className="sub-menu">
                                                <li className="active"><Link href="/">Home Default</Link></li>
                                                <li><Link href="index-2.html">Home Interior</Link></li>
                                                <li><Link href="index-3.html">Home Travel</Link></li>
                                                <li><Link href="index-4.html">Home Technology</Link></li>
                                                <li><Link href="index-5.html">Home NFT</Link></li>
                                                <li><Link href="index-6.html">Home Fashion</Link></li>
                                                <li><Link href="index-7.html">Home Adventure</Link></li>
                                                <li><Link href="index-8.html">Home Minimal</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="lifestyle.html">Lifestyle</Link></li>
                                        <li><Link href="travel.html">Travel</Link></li>
                                        <li className="menu-item-has-children"><Link href="#">Post Type</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="blog.html">Our Blog</Link></li>
                                                <li><Link href="blog-details.html">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="nft.html">NFT</Link></li>
                                    </ul>
                                </div>
                                <div className="tgmenu__action">
                                    <ul className="list-wrap">
                                        <li className="mode-switcher">
                                            <nav className="switcher__tab">
                                                <span className="switcher__btn light-mode"><i className="flaticon-sun"></i></span>
                                                <span className="switcher__mode"></span>
                                                <span className="switcher__btn dark-mode"><i className="flaticon-moon"></i></span>
                                            </nav>
                                        </li>
                                        <li className="user"><Link href="#"><i className="far fa-user"></i></Link></li>
                                        <li className="header-cart"><Link href="#"><i className="far fa-shopping-basket"></i></Link></li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                        </div>
                        <div className="tgmobile__menu">
                            <nav className="tgmobile__menu-box">
                                <div className="close-btn"><i className="fas fa-times"></i></div>
                                <div className="nav-logo">
                                    <Link href="/" className="logo-dark"><img src="/img/logo/logo.png" alt="Logo" /></Link>
                                    <Link href="/" className="logo-light"><img src="/img/logo/w_logo.png" alt="Logo" /></Link>
                                </div>
                                <div className="tgmobile__search">
                                    <form action="#">
                                        <input type="text" placeholder="Search here..." />
                                        <button><i className="far fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="tgmobile__menu-outer">
                                </div>
                                <div className="social-links">
                                    <ul className="list-wrap">
                                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="tgmobile__menu-backdrop"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="offCanvas__wrap">
            <div className="offCanvas__body">
                <div className="offCanvas__toggle"><i className="flaticon-addition"></i></div>
                <div className="offCanvas__content">
                    <div className="offCanvas__logo logo">
                        <Link href="/" className="logo-dark"><img src="/img/logo/logo.png" alt="Logo" /></Link>
                        <Link href="/" className="logo-light"><img src="/img/logo/w_logo.png" alt="Logo" /></Link>
                    </div>
                    <p>Change how the world works with Biotellus, made for ecology.</p>
                    <ul className="offCanvas__instagram list-wrap">
                        <li><Link href="/img/blog/blog01.jpg" className="popup-image"><img src="/img/blog/blog01.jpg" alt="img" /></Link></li>
                        <li><Link href="/img/blog/blog02.jpg" className="popup-image"><img src="/img/blog/blog02.jpg" alt="img" /></Link></li>
                        <li><Link href="/img/blog/blog03.jpg" className="popup-image"><img src="/img/blog/blog03.jpg" alt="img" /></Link></li>
                        <li><Link href="/img/blog/blog04.jpg" className="popup-image"><img src="/img/blog/blog04.jpg" alt="img" /></Link></li>
                        <li><Link href="/img/blog/blog05.jpg" className="popup-image"><img src="/img/blog/blog05.jpg" alt="img" /></Link></li>
                        <li><Link href="/img/blog/blog06.jpg" className="popup-image"><img src="/img/blog/blog06.jpg" alt="img" /></Link></li>
                    </ul>
                </div>
                <div className="offCanvas__contact">
                    <h4 className="title">Get In Touch</h4>
                    <ul className="offCanvas__contact-list list-wrap">
                        <li><i className="fas fa-envelope-open"></i><Link href="mailto:info@webmail.com">info@webmail.com</Link></li>
                        <li><i className="fas fa-phone"></i><Link href="tel:88899988877">888 999 888 77</Link></li>
                        <li><i className="fas fa-map-marker-alt"></i> 12/A, New Booston, NYC</li>
                    </ul>
                    <ul className="offCanvas__social list-wrap">
                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="offCanvas__overlay"></div>

    </header>
  )
}

export default Header