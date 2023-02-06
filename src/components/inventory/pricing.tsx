import React, { FC } from "react";
import { HasChildren } from "@/src/type";

const Pricing: FC<HasChildren> = (props) => {
	return (
		<section className="ftco-section ftco-cart">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="car-list">
							<table className="table">
								<thead className="thead-primary">
									<tr className="text-center">
										<th>&nbsp;</th>
										<th>&nbsp;</th>
										<th className="bg-primary heading">Per Hour Rate</th>
										<th className="bg-dark heading">Per Day Rate</th>
										<th className="bg-black heading">Leasing</th>
									</tr>
								</thead>
								<tbody>
									{props.children}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Pricing;