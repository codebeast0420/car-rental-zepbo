import React, { FC } from "react";
import { HasChildren } from "@/src/type";
import Pagination from "@/src/components/global/pagination";

const InventorySection: FC<HasChildren> = (props) => {
	return (
		<section className="bg-light">
			<div className="container">
				<div className="row">
					<h1 className="w-100 text-center p-3" style={{fontFamily: "Oswald"}}>Today&apos;s RV</h1>
					{props.children}
				</div>
				{/* <Pagination /> */}
			</div>
		</section>
	)
}

export default InventorySection;