import React, { FC } from 'react';
import { TitleDescriptionType } from '@/src/type';

const Service: FC<TitleDescriptionType> = (props) => {
	return (
		<div className="col-md-3">
			<div className="services services-2 w-100 text-center">
				<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-wedding-car"></span></div>
				<div className="text w-100">
					<h3 className="heading mb-2">{props.title}</h3>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	)
}

export default Service;