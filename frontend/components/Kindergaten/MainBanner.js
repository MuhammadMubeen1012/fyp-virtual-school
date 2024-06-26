import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="kindergarten-main-banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="kindergarten-banner-content">
                            <div className="image">
                                <img src="/images/bird1.png" alt="image" />
                            </div>

                            <h1>experience best <span>Virtual School</span>  here</h1>
                            <p>School with one curriculum and directions for the quality and same level of education for all.</p>

                            <Link href="/login">
                                <a className="default-btn-style-two">
                                    <i className="flaticon-user"></i> Register Here
                                </a>
                            </Link>

                            <div className="circle-shape">
                                <img src="/images/circle.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="kindergarten-banner-image">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="image">
                                        <img src="/images/kids1.png" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="image">
                                        <img src="/images/kids2.png" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="image">
                                        <img src="/images/kids3.png" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="image text-left">
                                        <img src="/images/kids4.png" className="mt-4" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kindergarten-shape1">
                <img src="/images/kindergarten-shape/k-shape1.png" alt="image" />
            </div>
            <div className="kindergarten-shape2">
                <img src="/images/kindergarten-shape/k-shape2.png" alt="image" />
            </div>
            <div className="kindergarten-shape3">
                <img src="/images/kindergarten-shape/k-shape3.png" alt="image" />
            </div>
            <div className="kindergarten-shape4">
                <img src="/images/kindergarten-shape/k-shape4.png" alt="image" />
            </div>
            <div className="kindergarten-shape5">
                <img src="/images/kindergarten-shape/k-shape5.png" alt="image" />
            </div>
            <div className="kindergarten-shape6">
                <img src="/images/kindergarten-shape/k-shape6.png" alt="image" />
            </div>
        </div>
    )

}

export default MainBanner;
