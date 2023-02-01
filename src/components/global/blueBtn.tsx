import React, { FC } from "react";

interface BlueBtnType {
	title: string;
}

const BlueBtn: FC<BlueBtnType> = (props) => {
	return (
		<a href="#" className="btn btn-primary">{props.title}</a>
	)
}

export default BlueBtn;