import React, { FC } from "react";
import { HasChildren } from "@/src/type";
import PaginationBar from "../global/pagination";

const MainListBox: FC<HasChildren> = (props) => {
	return (
		<section className="ftco-cart  col-md-8">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="car-list">
							<div>
								{props.children}
							</div>
						</div>
					</div>
				</div>
				<PaginationBar />
			</div>
		</section>
	)
}

export default MainListBox;