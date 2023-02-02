import React, { FC } from 'react';
import { TitleDescriptionType } from '@/src/type';

const OurStory: FC<TitleDescriptionType> = (props) => {
	return (
		<div className='ftco-intro justify-content-start m-5' style={{ backgroundImage: `url(${props.img})`, position: 'relative' }}>
			<div className='our-story ftco-intro'  style={{ backgroundImage: `url('images/our_story_small.jpg')` }}></div>
			<div className='heading-section col-md-6 bg-light justify-content-center d-flex flex-column p-5'>
				<h2 className='mb-3 text-center'>{props.title}</h2>
				<p className='mt-1' style={{ fontSize: '20px' }}>{props.description}</p>
			</div>
		</div>
	)
}

export default OurStory;