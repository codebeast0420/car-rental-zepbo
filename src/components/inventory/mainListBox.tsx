import React, { FC } from "react";
import { HasChildren } from "@/src/type";
import PaginationBar from "../global/pagination";

const MainListBox: FC<HasChildren> = (props) => {
	return (
		<section className="ftco-cart  col-md-9">
			<div className="container">
				<div className="sort-bar d-flex align-items-center justify-content-around mb-3" style={{ borderRadius: '0.5rem' }}>
					<p className="m-0 text-light">Showing 1-24 of 4664</p>
					<div className="d-flex align-items-center">
						<p className="m-0 text-light">Show:</p>
						<select className="form-control select-num">
							<option>24</option>
							<option>24</option>
							<option>24</option>
						</select>
					</div>
					<select className="form-control select-sort">
						<option>Distance(Closest)</option>
						<option>Year(Newest First)</option>
						<option>Year(Oldest First)</option>
						<option>Length(Longest First)</option>
						<option>Length(Shortest First)</option>
						<option>Weight(Heaviest First)</option>
						<option>Weight(Lightest First)</option>
						<option>Price(Highest First)</option>
						<option>Price(Lowest First)</option>
						<option>Location(A to Z)</option>
						<option>Location(Z to A)</option>
					</select>
					{/* <a style={{ cursor: 'pointer' }}><span>&#xf08a;</span><p>(0)</p></a>
					<a style={{ cursor: 'pointer' }}></a>
					<a style={{ cursor: 'pointer' }}></a> */}
				</div>
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