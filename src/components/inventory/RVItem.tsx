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
				<div style={{color: 'blue'}}>
					<h5 style={{color: 'blue'}}>Bed 5</h5>
					<h5 style={{color: 'blue'}}>22ft long</h5>
					<h5 style={{color: 'blue'}}>BunkHouse</h5>
				</div>
				<div>
					<h5 style={{color: 'blue'}}><strong>Our Price: $ 30,928</strong></h5>
					<h5 style={{color: 'green'}}>List Price: $36, 249</h5>
					<h5 style={{color: 'red'}}>Discount: $ 5,321</h5>
				</div>
				<div>
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