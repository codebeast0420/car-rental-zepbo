import React, { FC } from "react";
import { TitleDescriptionType } from "@/src/type";
import Link from "next/link";

const InventoryItem: FC<TitleDescriptionType> = (props) => {
	return (
		<div style={{ margin: "10px" }}>
			<div className="car-wrap rounded">
				<div className="img rounded d-flex align-items-end" style={{ backgroundImage: `url(${props.img})` }}>
				</div>
				<div className="text">
					<h2 className="mb-0"><a href="car-single.html">Mercedes Grand Sedan</a></h2>
					<div className="d-flex mb-3">
						<span className="cat">Cheverolet</span>
						<p className="price ml-auto">$500 <span>/day</span></p>
					</div>
					<p className="d-flex mb-0 d-block">
						<Link href={`rvs/${1}`} className="btn btn-primary py-2 mr-1">Book now</Link>
						<Link href={`rvs/${1}`} className="btn btn-secondary py-2 ml-1">Details</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default InventoryItem;