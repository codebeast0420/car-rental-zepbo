import React, { FC } from "react";

interface FeatureItemType {
	name: string;
	url: string;
	price: string;
	property: string;
}

const FeatureItem: FC<FeatureItemType> = (props) => {
	return (
		<div className="item col-md-6">
			<div className="car-wrap rounded ">
				<div className="img rounded d-flex align-items-end" style={{ backgroundImage: `url(${props.url})` }}>
				</div>
				<div className="text">
					<h2 className="mb-0"><a href="#">{props.name}</a></h2>
					<div className="d-flex mb-3">
						<span className="cat">{props.property}</span>
						<p className="price ml-auto">{props.price}</p>
					</div>
					<p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a> <a href="#" className="btn btn-secondary py-2 ml-1">Details</a></p>
				</div>
			</div>
		</div>
	)
}

export default FeatureItem;