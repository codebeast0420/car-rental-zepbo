import React, { FC } from "react";
import { InputBoxType } from "@/src/type";

const InputBox: FC<InputBoxType> = (props) => {
	return (
		<div className="form-group">
			<input type="text" className="form-control" placeholder={props.placeholder} />
		</div>
	)
}

export default InputBox;