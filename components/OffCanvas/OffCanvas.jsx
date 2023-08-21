"use client";
import React from 'react'
import Link from 'next/link'
import { toggleBodyClass } from '@/utils/common';
export const OffCanvas = () => {
    return (
        <>
            <div className="offCanvas__wrap">
                <div className="offCanvas__body">
                    <div className="offCanvas__toggle" onClick={ () => toggleBodyClass('canvas')}><i className="flaticon-addition"></i></div>
                    <div className="offCanvas__content">
                        <div className="offCanvas__logo logo">
                            <Link href="/" className="logo-dark"><img src="/img/logo/logo.png" alt="Logo" /></Link>
                            <Link href="/" className="logo-light"><img src="/img/logo/w_logo.png" alt="Logo" /></Link>
                        </div>
                        <p>Change how the world works with Biotellus, made for ecology.</p>
                        {/* <ul className="offCanvas__instagram list-wrap">
                            <li><Link href="" className="popup-image"><img src="" alt="img" /></Link></li>
                            <li><Link href="" className="popup-image"><img src="" alt="img" /></Link></li>
                            <li><Link href="" className="popup-image"><img src="" alt="img" /></Link></li>
                            <li><Link href="" className="popup-image"><img src="" alt="img" /></Link></li>
                            <li><Link href="" className="popup-image"><img src="" alt="img" /></Link></li>
                            <li><Link href="" className="popup-image"><img src="" alt="img" /></Link></li>
                        </ul> */}
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
        </>
    )
}
