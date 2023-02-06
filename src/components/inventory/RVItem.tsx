import React, { FC } from 'react';
import { TitleDescriptionType } from '@/src/type';

const RVItem: FC<TitleDescriptionType> = (props) => {
	return (
		<tr className="">
			<td className="car-image"><div className="img" style={{ backgroundImage: `url(${props.img})` }}></div></td>
			<td className="product-name">
				<h3>Cheverolet SUV Car</h3>
				<p className="mb-0 rated">
					<span>rated:</span>
					<span className="ion-ios-star"></span>
					<span className="ion-ios-star"></span>
					<span className="ion-ios-star"></span>
					<span className="ion-ios-star"></span>
					<span className="ion-ios-star"></span>
				</p>
			</td>

			<td className="price d-flex justify-content-around">
				<div className='rv-item-info'>
					<p><small style={{color:"#1089ff"}}>Class</small></p>
					<p>Class C</p>
				</div>
				<div className='rv-item-info'>
					<p><small style={{color:"#1089ff"}}>Manufacturer</small></p>
					<p>THOR</p>
				</div>
				<div className='rv-item-info'>
					<p><small style={{color:"#1089ff"}}>Model</small></p>
					<p>22 E</p>
				</div>
				<div className='rv-item-info'>
					<p><small style={{color:"#1089ff"}}>Location</small></p>
					<p>Orlando</p>
				</div>
			</td>

			<td className="price">
				<div className="price-rate">
					<h3>
						<span className="num">$ 30,993</span>
					</h3>
					<h3 style={{fontWeight:'600'}}>Our Price</h3>
				</div>
			</td>
		</tr>
	)
}

export default RVItem;