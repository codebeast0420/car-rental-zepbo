import Link from "next/link";
import React, { FC } from "react"
import { NavbarType } from "@/src/type";

const Navbar: FC<NavbarType> = (props) => {

	return (
		<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
			<div className="container">
				<a className="navbar-brand" href="#">Zep<span>Bo</span></a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="oi oi-menu"></span> Menu
				</button>
				<div className="collapse navbar-collapse" id="ftco-nav">
					<ul className="navbar-nav ml-auto">
						<li className={props.current == 1 ? "nav-item active" : "nav-item"}><Link href="/" className="nav-link">Home</Link></li>
						<li className={props.current == 2 ? "nav-item active" : "nav-item"}><Link href="#" className="nav-link">About</Link></li>
						<li className={props.current == 3 ? "nav-item active" : "nav-item"}><Link href="#" className="nav-link">Services</Link></li>
						<li className={props.current == 4 ? "nav-item active" : "nav-item"}><Link href="#" className="nav-link">Inventories</Link></li>
						<li className={props.current == 5 ? "nav-item active" : "nav-item"}><Link href="#" className="nav-link">Blog</Link></li>
						<li className={props.current == 6 ? "nav-item active" : "nav-item"}><Link href="/contact" className="nav-link">Contact</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;