import React, { FC } from "react";
import { HasChildren } from "@/src/type";

const BlogTheme: FC<HasChildren> = (props) => {
	return (
		<section className="ftco-section">
			<div className="container">
				{props.children}
			</div>
		</section>
	)
}

export default BlogTheme;