import React, { FC } from "react";

const Footer: FC = () => {
	return (
		<footer className="ftco-footer ftco-bg-dark ftco-section">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md">
						<div className="ftco-footer-widget mb-4">
							<h2 className="ftco-heading-2"><a href="#" className="logo">Zep<span>Bo</span></a></h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
							<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
								<li className=""><a href="#"><span className="icon-twitter"></span></a></li>
								<li className=""><a href="#"><span className="icon-facebook"></span></a></li>
								<li className=""><a href="#"><span className="icon-instagram"></span></a></li>
							</ul>
						</div>
					</div>
					<div className="col-md">
						<div className="ftco-footer-widget mb-4 ml-md-5">
							<h2 className="ftco-heading-2">Information</h2>
							<ul className="list-unstyled">
								<li><a href="#" className="py-2 d-block">About</a></li>
								<li><a href="#" className="py-2 d-block">Services</a></li>
								<li><a href="#" className="py-2 d-block">Term and Conditions</a></li>
								<li><a href="#" className="py-2 d-block">Best Price Guarantee</a></li>
								<li><a href="#" className="py-2 d-block">Privacy &amp; Cookies Policy</a></li>
							</ul>
						</div>
					</div>
					<div className="col-md">
						<div className="ftco-footer-widget mb-4">
							<h2 className="ftco-heading-2">Customer Support</h2>
							<ul className="list-unstyled">
								<li><a href="#" className="py-2 d-block">FAQ</a></li>
								<li><a href="#" className="py-2 d-block">Payment Option</a></li>
								<li><a href="#" className="py-2 d-block">Booking Tips</a></li>
								<li><a href="#" className="py-2 d-block">How it works</a></li>
								<li><a href="#" className="py-2 d-block">Contact Us</a></li>
							</ul>
						</div>
					</div>
					<div className="col-md">
						<div className="ftco-footer-widget mb-4">
							<h2 className="ftco-heading-2">Have a Questions?</h2>
							<div className="block-23 mb-3">
								<ul>
									<li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
									<li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
									<li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;