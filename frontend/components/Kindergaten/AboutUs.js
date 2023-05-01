import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="kindergarten-about-image">
                            <div className="main-image">
                                <img src="/images/kindergarten-about-img1.png" alt="image" />
                                <img src="/images/kindergarten-about-img2.png" alt="image" />
                            </div>
                            <div className="shape">
                                <img src="/images/kite1.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span className="sub-title">About Us</span>
                            <h2 className="font-weight-black">We are the best Virtual School to make revolution</h2>
                            <p>Ek school is the best national virtual school whose endeavor is to propagate, promote and prosper a online schooling option with one curriculum and standard for all Pakistanis through the digital medium.</p>
                            <p>We aim to empower students, parents, teachers, institutions and society at large. Through a system of well spelled out curricula, syllabus and processes, we are keen to develop an equality best virtual schooling.</p>

                            <ul className="about-list">
                                <li><span><i className='bx bx-check'></i> Online Live Classes</span></li>
                                <li><span><i className='bx bx-check'></i> Online Assessment</span></li>
                                <li><span><i className='bx bx-check'></i> Learning Management System (LMS)</span></li>
                                <li><span><i className='bx bx-check'></i> Communication with Teachers</span></li>
                            </ul>

                            <Link href="/about-5" >
                                <a className="default-btn-style-two">
                                    <i className="flaticon-user"></i> More About Us
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kindergarten-shape7">
                <img src="/images/kindergarten-shape/k-shape7.png" alt="image" />
            </div>
            <div className="kindergarten-shape8">
                <img src="/images/kindergarten-shape/k-shape8.png" alt="image" />
            </div>
        </div>
    )
}

export default AboutUs;
