import React, { FC } from "react";
import { HasChildren } from "@/src/type";

const RVsTheme: FC<HasChildren> = (props) => {
	return (
		<div className="container">
			<div className="row">
				<h1 className="w-100 text-center p-3" style={{ fontFamily: "Oswald" }}>Our RVs</h1>
				{props.children}
			</div>
		</div>
	)
}

export default RVsTheme;