import React, { FC } from 'react';
import Image from 'next/image';

interface RVItemType {
	img: string,
}

const RVItem: FC<RVItemType> = (props) => {
	return (
		<div className='d-flex inventory-item mb-3 rv-item justify-content-between align-items-center'>
			<div>
				<div className="car-image">
					<Image src={props.img} alt='car' width={150} height={100} />
					<Image src="/images/floor-plan.png" alt='floor-plan' width={150} height={100} />
				</div>
				<div className="product-name">
					<h4 className='m-0' style={{ color: "#cf4a4a" }}>Cheverolet SUV Car</h4>
					<div className='d-flex align-items-center justify-content-between'>
						<p className="mb-0 rated">
							<span>rated: </span>
							<span className="ion-ios-star"></span>
							<span className="ion-ios-star"></span>
							<span className="ion-ios-star"></span>
							<span className="ion-ios-star"></span>
							<span className="ion-ios-star"></span>
						</p>
						<h4 className='m-0'>$ 30,928</h4>
					</div>
				</div>
			</div>
			<div className='d-flex'>
				<div className="mr-5">
					<h5>Bed 5</h5>
					<h5>22ft long</h5>
					<h5>BunkHouse</h5>
				</div>
				<div className='ml-5'>
					<p className="d-flex flex-column mb-0 d-block">
						<a href="#" className="btn btn-primary py-2">Book now</a>
						<a href="#" className="btn btn-secondary py-2 mt-3">Details</a>
					</p>
				</div>
			</div>
		</div>
	)
}

export default RVItem;