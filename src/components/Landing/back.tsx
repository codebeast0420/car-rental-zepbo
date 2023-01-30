import React, {FC} from 'react';

interface BackProps {
	title: string;
	img: string;
	type: string;
}

const Back: FC<BackProps> = (props) => {
	return (
		<div className="hero-wrap ftco-degree-bg" style={{ backgroundImage: `url(${props.img})` }}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
					<div className="col-lg-8 ">
						<div className="text w-100 text-center mb-md-5 pb-md-5">
							<h1 className="mb-4">{props.title}</h1>
							<p style={{ fontSize: "18px" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
							<a href="https://vimeo.com/45830194" className="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="ion-ios-play"></span>
								</div>
								<div className="heading-title ml-5">
									<span>Easy steps for renting a {props.type}</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Back;