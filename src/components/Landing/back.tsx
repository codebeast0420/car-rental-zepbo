import React, {FC} from 'react';
import { BackProps } from '@/src/type';

const Back: FC<BackProps> = (props) => {
	return (
		<div className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(${props.img})` }}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
					<div className="col-lg-8 ">
						<div className="text w-100 text-center mb-md-5 pb-md-5">
							<h1 className="mb-4">Happy &amp; Exciting Way with Excellent RV</h1>
							<a href="https://vimeo.com/45830194" className="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="ion-ios-play"></span>
								</div>
								<div className="heading-title ml-5">
									<span>Easy steps for buying a RV</span>
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