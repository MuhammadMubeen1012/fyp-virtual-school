import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <Link href="/">
                                <a className="logo">
                                    {/*<img src="/images/logo2.png" alt="logo" />*/}
                                    <h2 className={"text-white"} >Ek-School</h2>
                                </a>
                            </Link>

                            <p>Ek-School is the best national virtual school whose endeavor is to propagate, and prosper a online schooling option with one curriculum and standard for all Pakistanis through the digital medium.</p>

                            <ul className="social-link">
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6  ">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Courses</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Events</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*<div className="col-lg-2 col-md-6 col-sm-6">*/}
                    {/*    */}
                    {/*</div>*/}

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i>
                                    2023 Ek-School - The national Virtual School System.
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+44587154756">+92 3156 7890</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:hello@edemy.com">ekschool@iba-suk.edu.pk</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p><i className='bx bx-copyright'></i>{currentYear} Ek-School - The National Virtual School System. </p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </footer>
    );
}

export default Footer;
