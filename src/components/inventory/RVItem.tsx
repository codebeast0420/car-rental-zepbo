import React, { FC } from 'react';
import Image from 'next/image';

interface RVItemType {
	img: string,
}

const RVItem:FC<RVItemType> = (props) => {
	return (
		<tr className="">
			<td className="car-image">
				<Image src={props.img} alt='car' width={150} height={100} />
				<Image src="/images/floor-plan.png" alt='floor-plan' width={150} height={100} />
			</td>
			<td className="product-name">
				<h3>Cheverolet SUV Car</h3>
				<p className="mb-0 rated">
					<span>rated: </span>
					<span className="ion-ios-star"></span>
					<span className="ion-ios-star"></span>
					<span className="ion-ios-star"></span>
					<span className="ion-ios-star"></span>
					<span className="ion-ios-star"></span>
				</p>
				<h3>$ 30,928</h3>
			</td>

			<td className="price d-flex justify-content-around">
				<div className='rv-item-info'>
					<p><small style={{ color: "#1089ff" }}>Class</small></p>
					<p>Class C</p>
				</div>
				<div className='rv-item-info'>
					<p><small style={{ color: "#1089ff" }}>Manufacturer</small></p>
					<p>THOR</p>
				</div>
				<div className='rv-item-info'>
					<p><small style={{ color: "#1089ff" }}>Model</small></p>
					<p>22 E</p>
				</div>
				<div className='rv-item-info'>
					<p><small style={{ color: "#1089ff" }}>Location</small></p>
					<p>Orlando</p>
				</div>
			</td>

			{/* <td className="price">
				<div className="price-rate">
					<p>
						<span className="num">$ 30,993</span>
					</p>
					<p style={{ fontWeight: '600' }}>Our Price</p>
				</div>
			</td> */}
		</tr>
	)
}

export default RVItem;