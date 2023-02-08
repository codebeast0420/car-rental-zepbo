import Footer from "@/src/components/global/footer";
import MainTheme from "@/src/components/global/mainTheme";
import Navbar from "@/src/components/global/navbar";
import React, { FC, useState } from "react";

const RVDetail: FC = () => {

	const [tab, setTab] = useState(0);

	return (
		<MainTheme>
			<Navbar current={4} />
			<div className="w-100" style={{ backgroundColor: 'black', height: '100px' }}></div>
			<section className="ftco-section ftco-car-details">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-12 row">
							<div className="car-details col-md-7">
								<div className="img rounded" style={{ backgroundImage: "url(../images/car-1.jpg)" }}></div>
								<div className="text text-center">
									<span className="subheading">Cheverolet</span>
									<h2>Mercedes Grand Sedan</h2>
								</div>
							</div>
							<div className="col-md-5">
								<h3 className="text-center">Specifications</h3>
								<table className="table table-dark table-striped rv-specifications">
									<tbody>
										<tr>
											<td>Sleeps</td>
											<td>3</td>
										</tr>
										<tr>
											<td>Length</td>
											<td>21 ft 7 in</td>
										</tr>
										<tr>
											<td>Ext Width</td>
											<td>7 ft 1 in</td>
										</tr>
										<tr>
											<td>Ext height</td>
											<td>9 ft 11 in</td>
										</tr>
										<tr>
											<td>Hitch Weight</td>
											<td>437 lbs</td>
										</tr>
										<tr>
											<td>Gross Weight</td>
											<td>3937 lbs</td>
										</tr>
										<tr>
											<td>Dry Weight</td>
											<td>3145 lbs</td>
										</tr>
										<tr>
											<td>Cargo Weight</td>
											<td>1023 lbs</td>
										</tr>
										<tr>
											<td>Fresh Water Capacity</td>
											<td>32 gals</td>
										</tr>
										<tr>
											<td>Grey Water Capacity</td>
											<td>25 gals</td>
										</tr>
										<tr>
											<td>Black Water Capacity</td>
											<td>25 gals</td>
										</tr>
										<tr>
											<td>Tire Size</td>
											<td>14&quot;</td>
										</tr>
										<tr>
											<td>VIN</td>
											<td>4X4TCK616HK037791</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md d-flex align-self-stretch">
							<div className="media block-6 services">
								<div className="media-body py-md-4">
									<div className="d-flex mb-3 align-items-center">
										<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-dashboard"></span></div>
										<div className="text">
											<h3 className="heading mb-0 pl-3">
												Mileage
												<span>40,000</span>
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md d-flex align-self-stretch">
							<div className="media block-6 services">
								<div className="media-body py-md-4">
									<div className="d-flex mb-3 align-items-center">
										<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-pistons"></span></div>
										<div className="text">
											<h3 className="heading mb-0 pl-3">
												Transmission
												<span>Manual</span>
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md d-flex align-self-stretch">
							<div className="media block-6 services">
								<div className="media-body py-md-4">
									<div className="d-flex mb-3 align-items-center">
										<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-car-seat"></span></div>
										<div className="text">
											<h3 className="heading mb-0 pl-3">
												Seats
												<span>5 Adults</span>
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md d-flex align-self-stretch">
							<div className="media block-6 services">
								<div className="media-body py-md-4">
									<div className="d-flex mb-3 align-items-center">
										<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-backpack"></span></div>
										<div className="text">
											<h3 className="heading mb-0 pl-3">
												Luggage
												<span>4 Bags</span>
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md d-flex align-self-stretch">
							<div className="media block-6 services">
								<div className="media-body py-md-4">
									<div className="d-flex mb-3 align-items-center">
										<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-diesel"></span></div>
										<div className="text">
											<h3 className="heading mb-0 pl-3">
												Fuel
												<span>Petrol</span>
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 pills">
							<div className="bd-example bd-example-tabs">
								<div className="d-flex justify-content-center">
									<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

										<li className="nav-item">
											<a className={tab === 0 ? "nav-link active" : "nav-link"} style={{ cursor: 'pointer' }} onClick={() => setTab(0)}>Features</a>
										</li>
										<li className="nav-item">
											<a className={tab === 1 ? "nav-link active" : "nav-link"} style={{ cursor: 'pointer' }} onClick={() => setTab(1)}>Description</a>
										</li>
										<li className="nav-item">
											<a className={tab === 2 ? "nav-link active" : "nav-link"} style={{ cursor: 'pointer' }} onClick={() => setTab(2)}>Review</a>
										</li>
									</ul>
								</div>

								<div className="tab-content" id="pills-tabContent">
									<div className={tab === 0 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
										<div className="row">
											<div className="col-md-4">
												<ul className="features">
													<li className="check"><span className="ion-ios-checkmark"></span>Airconditions</li>
													<li className="check"><span className="ion-ios-checkmark"></span>Child Seat</li>
													<li className="check"><span className="ion-ios-checkmark"></span>GPS</li>
													<li className="check"><span className="ion-ios-checkmark"></span>Luggage</li>
													<li className="check"><span className="ion-ios-checkmark"></span>Music</li>
												</ul>
											</div>
											<div className="col-md-4">
												<ul className="features">
													<li className="check"><span className="ion-ios-checkmark"></span>Seat Belt</li>
													<li className="remove"><span className="ion-ios-close"></span>Sleeping Bed</li>
													<li className="check"><span className="ion-ios-checkmark"></span>Water</li>
													<li className="check"><span className="ion-ios-checkmark"></span>Bluetooth</li>
													<li className="remove"><span className="ion-ios-close"></span>Onboard computer</li>
												</ul>
											</div>
											<div className="col-md-4">
												<ul className="features">
													<li className="check"><span className="ion-ios-checkmark"></span>Audio input</li>
													<li className="check"><span className="ion-ios-checkmark"></span>Long Term Trips</li>
													<li className="check"><span className="ion-ios-checkmark"></span>Car Kit</li>
													<li className="check"><span className="ion-ios-checkmark"></span>Remote central locking</li>
													<li className="check"><span className="ion-ios-checkmark"></span>Climate control</li>
												</ul>
											</div>
										</div>
									</div>

									<div className={tab === 1 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-manufacturer-tab">
										<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
										<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
									</div>

									<div className={tab === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
										<div className="row">
											<div className="col-md-7">
												<h3 className="head">23 Reviews</h3>
												<div className="review d-flex">
													<div className="user-img" style={{ backgroundImage: "url(../images/person_1.jpg)" }}></div>
													<div className="desc">
														<h4>
															<span className="text-left">Jacob Webb</span>
															<span className="text-right">14 March 2018</span>
														</h4>
														<p className="star">
															<span>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
															</span>
															<span className="text-right"><a href="#" className="reply"><i className="icon-reply"></i></a></span>
														</p>
														<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
													</div>
												</div>
												<div className="review d-flex">
													<div className="user-img" style={{ backgroundImage: "url(../images/person_2.jpg)" }}></div>
													<div className="desc">
														<h4>
															<span className="text-left">Jacob Webb</span>
															<span className="text-right">14 March 2018</span>
														</h4>
														<p className="star">
															<span>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
															</span>
															<span className="text-right"><a href="#" className="reply"><i className="icon-reply"></i></a></span>
														</p>
														<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
													</div>
												</div>
												<div className="review d-flex">
													<div className="user-img" style={{ backgroundImage: "url(../images/person_3.jpg)" }}></div>
													<div className="desc">
														<h4>
															<span className="text-left">Jacob Webb</span>
															<span className="text-right">14 March 2018</span>
														</h4>
														<p className="star">
															<span>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
															</span>
															<span className="text-right"><a href="#" className="reply"><i className="icon-reply"></i></a></span>
														</p>
														<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
													</div>
												</div>
											</div>
											<div className="col-md-5">
												<div className="rating-wrap">
													<h3 className="head">Give a Review</h3>
													<div className="wrap">
														<p className="star">
															<span>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																(98%)
															</span>
															<span>20 Reviews</span>
														</p>
														<p className="star">
															<span>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																(85%)
															</span>
															<span>10 Reviews</span>
														</p>
														<p className="star">
															<span>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																(70%)
															</span>
															<span>5 Reviews</span>
														</p>
														<p className="star">
															<span>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																(10%)
															</span>
															<span>0 Reviews</span>
														</p>
														<p className="star">
															<span>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																<i className="ion-ios-star"></i>
																(0%)
															</span>
															<span>0 Reviews</span>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="ftco-section ftco-no-pt">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-12 heading-section text-center mb-5">
							<span className="subheading">Choose Car</span>
							<h2 className="mb-2">Related RVs</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="car-wrap rounded">
								<div className="img rounded d-flex align-items-end" style={{ backgroundImage: "url(../images/car-1.jpg)" }}>
								</div>
								<div className="text">
									<h2 className="mb-0"><a href="car-single.html">Mercedes Grand Sedan</a></h2>
									<div className="d-flex mb-3">
										<span className="cat">Cheverolet</span>
										<p className="price ml-auto">$500 <span>/day</span></p>
									</div>
									<p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a> <a href="car-single.html" className="btn btn-secondary py-2 ml-1">Details</a></p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="car-wrap rounded">
								<div className="img rounded d-flex align-items-end" style={{ backgroundImage: "url(../images/car-2.jpg)" }}>
								</div>
								<div className="text">
									<h2 className="mb-0"><a href="car-single.html">Range Rover</a></h2>
									<div className="d-flex mb-3">
										<span className="cat">Subaru</span>
										<p className="price ml-auto">$500 <span>/day</span></p>
									</div>
									<p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a> <a href="car-single.html" className="btn btn-secondary py-2 ml-1">Details</a></p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="car-wrap rounded">
								<div className="img rounded d-flex align-items-end" style={{ backgroundImage: "url(../images/car-3.jpg)" }}>
								</div>
								<div className="text">
									<h2 className="mb-0"><a href="car-single.html">Mercedes Grand Sedan</a></h2>
									<div className="d-flex mb-3">
										<span className="cat">Cheverolet</span>
										<p className="price ml-auto">$500 <span>/day</span></p>
									</div>
									<p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a> <a href="car-single.html" className="btn btn-secondary py-2 ml-1">Details</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</MainTheme>
	)
}

export default RVDetail;