import React, { FC } from "react";
import { HasChildren } from "@/src/type";
import Pagination from "@/src/components/global/pagination";

const InventorySection: FC<HasChildren> = (props) => {
	return (
		<section className="ftco-section bg-light">
			<div className="container">
				<div className="row">
					{props.children}
				</div>
				{/* <Pagination /> */}
			</div>
		</section>
	)
}

export default InventorySection;