import React, { FC } from "react";
import { TitleDescriptionType } from "@/src/type";

const ContactLabel: FC<TitleDescriptionType> = (props) => {
	return (
		<div className="col-md-12">
			<div className="border w-100 p-4 rounded mb-2 d-flex">
				<div className="icon mr-3">
					<span className={props.img}></span>
				</div>
				<p><span>{props.title}:</span> {props.description}</p>
			</div>
		</div>
	)
}

export default ContactLabel;