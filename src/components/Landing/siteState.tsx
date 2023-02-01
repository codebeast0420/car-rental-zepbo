import React, { FC } from 'react';

const SiteState: FC = () => {
	return (
		<section className="ftco-counter ftco-section img bg-light" id="section-counter">
			<div className="overlay"></div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
						<div className="block-18">
							<div className="text text-border d-flex align-items-center">
								<strong className="number" data-number="60">0</strong>
								<span>Year <br />Experienced</span>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
						<div className="block-18">
							<div className="text text-border d-flex align-items-center">
								<strong className="number" data-number="1090">0</strong>
								<span>Total <br />RVs</span>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
						<div className="block-18">
							<div className="text text-border d-flex align-items-center">
								<strong className="number" data-number="2590">0</strong>
								<span>Happy <br />Customers</span>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
						<div className="block-18">
							<div className="text d-flex align-items-center">
								<strong className="number" data-number="67">0</strong>
								<span>Total <br />Branches</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SiteState;