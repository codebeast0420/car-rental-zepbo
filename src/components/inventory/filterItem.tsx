import React, { FC, useState } from "react";
import { FilterItemType } from "@/src/type";

const FilterItem: FC<FilterItemType> = (props) => {

	const [open, setOpen] = useState(false);
	return (
		<div>
			<a
				className="btn-secondary d-flex mb-2 align-items-center pl-3 pr-3 justify-content-between w-100 text-light"
				onClick={() => setOpen(!open)}
				style={{ cursor: "pointer", borderRadius: "0.4rem" }}>
				<p className="m-0">{props.label}</p>
				{open ?
					<span style={{ fontSize: "23px" }}>&#x2212;</span>
					: <span style={{ fontSize: "23px" }}>&#x2b;</span>
				}
			</a>
			{open && (
				<div>
					{props.children}
				</div>
			)}
		</div>
	)
}

export default FilterItem;