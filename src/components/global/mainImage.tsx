import React, { FC } from "react";
import { MainImageType } from "@/src/type";
import Link from "next/link";

const MainImage: FC<MainImageType> = (props) => {
	return (
		<section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url('${props.img}')` }} >
			<div className="overlay"></div>
			<div className="container">
				<div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
					<div className="col-md-9 pb-5">
						<p className="breadcrumbs"><span className="mr-2"><Link href="/">Home <i className="ion-ios-arrow-forward"></i></Link></span>
							<span>{props.current} <i className="ion-ios-arrow-forward"></i></span></p>
						<h1 className="mb-3 bread">{props.title}</h1>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MainImage;