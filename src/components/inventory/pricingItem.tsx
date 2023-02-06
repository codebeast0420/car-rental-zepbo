import React, { FC } from 'react';
import { TitleDescriptionType } from '@/src/type';

const PricingItem: FC<TitleDescriptionType> = (props) => {
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

			<td className="price">
				<p className="btn-custom"><a href="#">Rent a car</a></p>
				<div className="price-rate">
					<h3>
						<span className="num"><small className="currency">$</small> 10.99</span>
						<span className="per">/per hour</span>
					</h3>
					<span className="subheading">$3/hour fuel surcharges</span>
				</div>
			</td>

			<td className="price">
				<p className="btn-custom"><a href="#">Rent a car</a></p>
				<div className="price-rate">
					<h3>
						<span className="num"><small className="currency">$</small> 60.99</span>
						<span className="per">/per day</span>
					</h3>
					<span className="subheading">$3/hour fuel surcharges</span>
				</div>
			</td>

			<td className="price">
				<p className="btn-custom"><a href="#">Rent a car</a></p>
				<div className="price-rate">
					<h3>
						<span className="num"><small className="currency">$</small> 995.99</span>
						<span className="per">/per month</span>
					</h3>
					<span className="subheading">$3/hour fuel surcharges</span>
				</div>
			</td>
		</tr>
	)
}

export default PricingItem;