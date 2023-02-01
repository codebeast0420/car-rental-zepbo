import React, { FC } from 'react';

interface WelcomeType {
	company: string;
	title: string;
	children: React.ReactNode;
}

const Welcome: FC<WelcomeType> = (props) => {
	return (
		<section className="ftco-section ftco-about">
			<div className="container">
				<div className="row no-gutters">
					<div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(images/about.jpg)" }}>
					</div>
					<div className="col-md-6 wrap-about ">
						<div className="heading-section heading-section-white pl-md-5">
							<span className="subheading">About us</span>
							<h2 className="mb-4">Welcome to ZepBo</h2>
							{props.children}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Welcome;