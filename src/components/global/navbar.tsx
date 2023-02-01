import Link from "next/link";
import React, { FC } from "react"

const Navbar: FC = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
			<div className="container">
				<a className="navbar-brand" href="#">Zep<span>Bo</span></a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="oi oi-menu"></span> Menu
				</button>
				<div className="collapse navbar-collapse" id="ftco-nav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active"><Link href="/" className="nav-link">Home</Link></li>
						<li className="nav-item"><a href="#" className="nav-link">About</a></li>
						<li className="nav-item"><a href="#" className="nav-link">Services</a></li>
						<li className="nav-item"><a href="#" className="nav-link">Inventories</a></li>
						<li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
						<li className="nav-item"><Link href="/" className="nav-link">Contact</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;