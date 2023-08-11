"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { OffCanvas } from '../OffCanvas/OffCanvas';
import { toggleBodyClass, toggleThemeMode } from '@/utils/common';

const Header = ({ categories }) => {
    const pathname        = usePathname()
    let   isSubMenuOpen   = false;
    const openSubMenu = () =>{
        isSubMenuOpen = !isSubMenuOpen;
    }
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
                                    <div className="offcanvas-toggle" onClick={() => toggleBodyClass('canvas')}>
                                        <Link href="#"><i className="flaticon-menu-bar"></i></Link>
                                    </div>
                                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                        <ul className="navigation">
                                            <li className={pathname == "/" ? "active" : ""}><Link href="/">Home</Link></li>
                                            <li className="menu-item-has-children"><Link href="#">Categories</Link>
                                                <ul className="sub-menu">
                                                    {categories.filter((category) => category.name != 'Uncategorized').map((category) => (
                                                        <li key={category.id} className={pathname == `/category/${category.slug}` ? "active" : ""}>
                                                            <Link href={`/category/${category.slug}`}>{category.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tgmenu__action">
                                        <ul className="list-wrap">
                                            <li className="mode-switcher">
                                                <nav className="switcher__tab">
                                                    <span className="switcher__btn light-mode"><i className="flaticon-sun"></i></span>
                                                    <span className="switcher__mode" onClick={toggleThemeMode}></span>
                                                    <span className="switcher__btn dark-mode"><i className="flaticon-moon"></i></span>
                                                </nav>
                                            </li>
                                            <li className="user"><Link href="#"><i className="far fa-user"></i></Link></li>
                                            <li className="header-cart"><Link href="#"><i className="far fa-shopping-basket"></i></Link></li>
                                        </ul>
                                    </div>
                                </nav>
                                <div className="mobile-nav-toggler" id="mobile-nav-toggler" onClick={() => toggleBodyClass('mobile')}><i className="fas fa-bars"></i></div>
                            </div>
                            <div className="tgmobile__menu">
                                <nav className="tgmobile__menu-box">
                                    <div className="close-btn" onClick={() => toggleBodyClass('mobile')}><i className="fas fa-times"></i></div>
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
                                        <ul className="navigation">
                                            <li className={pathname == "/" ? "active" : ""}><Link href="/">Home</Link></li>
                                            <li className="menu-item-has-children"><Link href="#">Categories</Link>
                                                <ul className={`sub-menu ${isSubMenuOpen ? 'd-block' : ''}`}>
                                                    {categories.filter((category) => category.name != 'Uncategorized').map((category) => (
                                                        <li key={category.id} className={pathname == `/category/${category.slug}` ? "active" : ""}>
                                                            <Link href={`/category/${category.slug}`}>{category.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className={`dropdown-btn ${isSubMenuOpen ? 'open' : ''}`} onClick={ () => openSubMenu()}><span className="plus-line"></span></div>
                                            </li>
                                        </ul>
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
            <OffCanvas></OffCanvas>
        </header>
    )
}

export default Header