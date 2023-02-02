import React, { FC } from 'react'
import { ClientType } from '@/src/type';

const ClientItem: FC<ClientType> = (props) => {
	return (
		<div className="item">
			<div className="testimony-wrap rounded text-center py-4 pb-5">
				<div className="user-img mb-2" style={{ backgroundImage: `url(${props.img})` }}>
				</div>
				<div className="text pt-4">
					<p className="mb-4">{props.description}</p>
					<p className="name">{props.name}</p>
					<span className="position">{props.position}</span>
				</div>
			</div>
		</div>
	)
}

export default ClientItem;