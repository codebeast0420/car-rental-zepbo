import React, { FC } from "react";
import { HasChildren } from "@/src/type";

const Feature: FC<HasChildren> = (props) => {
	return (
		<section className="ftco-section ftco-no-pt bg-light pt-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12 heading-section text-center  mb-5">
						<span className="subheading">What we offer</span>
						<h2 className="mb-2">Featured Vehicles</h2>
					</div>
				</div>
				{props.children}
			</div>
		</section>
	)
}

export default Feature;