import React, { FC } from "react";
import { TitleDescriptionType } from "@/src/type";

const WhyChoose: FC<TitleDescriptionType> = (props) => {
	return (
		<div className='ftco-intro justify-content-start m-5' style={{ backgroundImage: `url(${props.img})`, position: 'relative' }}>
			<div className='our-story ftco-intro' style={{ backgroundImage: `url('images/why-choose.jpg')` }}></div>
			<div className='heading-section col-md-6 bg-light justify-content-center d-flex flex-column p-5'>
				<h2 className='mb-3 text-center'>{props.title}</h2>
				<p className='mt-1'>We know that when it comes to used RV dealers, you have got options. That’s why at El Monte RV, we work hard to be the best of the best.
					Our inventory features an excellent, curated selection of professionally maintained motorhomes for
					every budget, and our national network of RV dealer locations makes it easy to get what you need fast.</p>
				<p>We also stand by the products we sell, conducting multi-point inspections on all our units
					and replacing or repairing anything that does not work perfectly.
					Best of all, you will appreciate the low, low sale prices on our RVs, and we offer financing options
					to make it even more affordable. With 50 years of experience selling RVs, we are your trusted source
					to find a motorhome you will truly cherish.</p>
			</div>
		</div>
	)
}

export default WhyChoose;