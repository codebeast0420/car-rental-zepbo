import React, { FC } from "react";

interface BlogType {
	children: React.ReactNode;
}

const Blog: FC<BlogType> = (props) => {
	return (
		<section className="ftco-section">
			<div className="container">
				<div className="row justify-content-center mb-5">
					<div className="col-md-7 heading-section text-center ">
						<span className="subheading">Blog</span>
						<h2>Recent Blog</h2>
					</div>
				</div>
				<div className="row d-flex">
					{props.children}
				</div>
			</div>
		</section>
	)
}

export default Blog;