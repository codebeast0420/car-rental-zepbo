import Pagination from "@/src/components/global/pagination";
import BlogTheme from "@/src/components/blog/blogTheme";
import ExtendBlogItem from "@/src/components/blog/extendBlogItem";
import Footer from "@/src/components/global/footer";
import MainImage from "@/src/components/global/mainImage";
import MainTheme from "@/src/components/global/mainTheme";
import Navbar from "@/src/components/global/navbar";
import React, { FC } from "react";

const Blog: FC = () => {
	return (
		<MainTheme>
			<MainImage title="Our Blog" current="Blog" img="images/blog-main.jpg" />
			<Navbar current={5} />
			<BlogTheme>
				<div className="row d-flex justify-content-center">
					<ExtendBlogItem
						title="Why Lead Generation is Key for Business Growth"
						subscriber="Admin"
						commits={3}
						date="Oct. 29, 2019"
						img="images/image_1.jpg"
						description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
						link="#"
					/>
					<ExtendBlogItem
						title="Why Lead Generation is Key for Business Growth"
						subscriber="Admin"
						commits={3}
						date="Oct. 29, 2019"
						img="images/image_2.jpg"
						description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
						link="#"
					/>
					<ExtendBlogItem
						title="Why Lead Generation is Key for Business Growth"
						subscriber="Admin"
						commits={3}
						date="Oct. 29, 2019"
						img="images/image_3.jpg"
						description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
						link="#"
					/>
					<ExtendBlogItem
						title="Why Lead Generation is Key for Business Growth"
						subscriber="Admin"
						commits={3}
						date="Oct. 29, 2019"
						img="images/image_4.jpg"
						description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
						link="#"
					/>
					<ExtendBlogItem
						title="Why Lead Generation is Key for Business Growth"
						subscriber="Admin"
						commits={3}
						date="Oct. 29, 2019"
						img="images/image_5.jpg"
						description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
						link="#"
					/>
					<ExtendBlogItem
						title="Why Lead Generation is Key for Business Growth"
						subscriber="Admin"
						commits={3}
						date="Oct. 29, 2019"
						img="images/image_6.jpg"
						description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
						link="#"
					/>
				</div>
				<Pagination />
			</BlogTheme>
			<Footer />
		</MainTheme>
	)
}

export default Blog;