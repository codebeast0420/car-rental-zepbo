import React, { FC } from 'react';

interface ServicesType {
	children: React.ReactNode
}

const Services: FC<ServicesType> = (props) => {
	return (
		<section className="ftco-section">
			<div className="container">
				<div className="row justify-content-center mb-5">
					<div className="col-md-7 text-center heading-section ">
						<span className="subheading">Services</span>
						<h2 className="mb-3">Our Latest Services</h2>
					</div>
				</div>
				<div className="row">
					{props.children}
				</div>
			</div>
		</section>
	)
}

export default Services;