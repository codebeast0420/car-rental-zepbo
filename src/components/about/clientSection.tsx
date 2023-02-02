import React, { FC } from 'react';
import { HasChildren } from '@/src/type';

const ClientSection: FC<HasChildren> = (props) => {
	return (
		<section className="ftco-section testimony-section bg-light">
			<div className="container">
				<div className="row justify-content-center mb-5">
					<div className="col-md-7 text-center heading-section">
						<span className="subheading">Testimonial</span>
						<h2 className="mb-3">Happy Clients</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="carousel-testimony owl-carousel ftco-owl">
							{props.children}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ClientSection;