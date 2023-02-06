import React, { FC } from "react";
import { HasChildren } from "@/src/type";
import PaginationBar from "../global/pagination";

const MainListBox: FC<HasChildren> = (props) => {
	return (
		<section className="ftco-section ftco-cart">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="car-list">
							<table className="table">
								<tbody>
									{props.children}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<PaginationBar />
			</div>
		</section>
	)
}

export default MainListBox;