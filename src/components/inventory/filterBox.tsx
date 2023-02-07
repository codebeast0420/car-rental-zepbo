import React, { FC } from "react";
import { HasChildren } from "@/src/type";

const FilterBox: FC<HasChildren> = (props) => {
	return (
		<div className="col-md-4">
			<h2>Search</h2>
			<div className="d-flex">
				<input className="form-control mb-2 search-box" />
				<button className="fa fa-search btn-secondary border-0 ml-3" style={{height:'40px', width:'13%', borderRadius:"0.5rem"}}></button>
			</div>
			{props.children}
		</div>
	)
}

export default FilterBox;