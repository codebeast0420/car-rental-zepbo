import React, { FC } from "react";
import { BlogItemType } from "@/src/type";
import Link from "next/link";

const ExtendBlogItem: FC<BlogItemType> = (props) => {
	return (
		<div className="col-md-12 text-center d-flex">
			<div className="blog-entry justify-content-end mb-md-5">
				<a href="blog-single.html" className="block-20 img" style={{ backgroundImage: `url(${props.img})` }}>
				</a>
				<div className="text px-md-5 pt-4">
					<div className="meta mb-3">
						<div><a href="#">{props.date}</a></div>
						<div><a href="#">{props.subscriber}</a></div>
						<div><a href="#" className="meta-chat"><span className="icon-chat"></span> {props.commits}</a></div>
					</div>
					<h3 className="heading mt-2"><a href="#">{props.title}</a></h3>
					<p>{props.description}</p>
					<p><Link href={props.link ? props.link : "#"} className="btn btn-primary">Continue <span className="icon-long-arrow-right"></span></Link></p>
				</div>
			</div>
		</div>
	)
}

export default ExtendBlogItem;