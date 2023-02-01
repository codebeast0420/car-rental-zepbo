import React, { FC } from "react";

interface BlogItemType {
	date: string;
	subscriber: string;
	title: string;
	img: string;
}

const BlogItem: FC<BlogItemType> = (props) => {
	return (
		<div className="col-md-4 d-flex ">
			<div className="blog-entry justify-content-end">
				<a href="blog-single.html" className="block-20" style={{ backgroundImage: `url(${props.img})` }}>
				</a>
				<div className="text pt-4">
					<div className="meta mb-3">
						<div><a href="#">{props.date}</a></div>
						<div><a href="#">{props.subscriber}</a></div>
						<div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
					</div>
					<h3 className="heading mt-2"><a href="#">{props.title}</a></h3>
					<p><a href="#" className="btn btn-primary">Read more</a></p>
				</div>
			</div>
		</div>
	)
}

export default BlogItem;