import React, { FC } from "react";
import { FilterConsType } from "@/src/type";

const FilterCons: FC<FilterConsType> = (props) => {
	return (
		<div className="pl-3 mt-1">
			<input type="checkbox" id={props.id} />
			<label className="ml-3">{props.title}({props.number})</label>
		</div>
	)
}

export default FilterCons;