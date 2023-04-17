import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const CoursesAreaStyleTwo = () => {
	return (
		<div className="advisor-area bg-f9f9f9 ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Course Advisor</span>
					<h2>Meet Our World-class Instructors</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>

				<Swiper className="advisor-slides-two owl-carousel owl-theme">
					<SwiperSlide>
						<div className="single-advisor-item">
							<div className="advisor-image">
								<img
									src="/images/advisor/advisor4.jpg"
									alt="image"
								/>

								<ul className="social-link">
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-facebook"></i>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-twitter"></i>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-instagram"></i>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>

							<div className="advisor-content">
								<h3>
									<Link href="/profile">
										<a>James Andy</a>
									</Link>
								</h3>
								<span>Project Management Expert</span>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-advisor-item">
							<div className="advisor-image">
								<img
									src="/images/advisor/advisor5.jpg"
									alt="image"
								/>

								<ul className="social-link">
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-facebook"></i>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-twitter"></i>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-instagram"></i>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>

							<div className="advisor-content">
								<h3>
									<Link href="/profile">
										<a>Jassica Hische</a>
									</Link>
								</h3>
								<span>Illustrator Expert</span>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-advisor-item">
							<div className="advisor-image">
								<img
									src="/images/advisor/advisor6.jpg"
									alt="image"
								/>

								<ul className="social-link">
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-facebook"></i>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-twitter"></i>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-instagram"></i>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>

							<div className="advisor-content">
								<h3>
									<Link href="/profile">
										<a>Alister Cock</a>
									</Link>
								</h3>
								<span>QA Project Expert</span>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-advisor-item">
							<div className="advisor-image">
								<img
									src="/images/advisor/advisor7.jpg"
									alt="image"
								/>

								<ul className="social-link">
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-facebook"></i>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-twitter"></i>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-instagram"></i>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>

							<div className="advisor-content">
								<h3>
									<Link href="/profile">
										<a>Lina Ninja</a>
									</Link>
								</h3>
								<span>QA Project Expert</span>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default CoursesAreaStyleTwo;
