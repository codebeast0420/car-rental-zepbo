import React, { FC, useState } from "react"

const Navbar: FC = () => {

	const [showCategory, setShowCategory] = useState(true);
	const [showCars, setShowCars] = useState(false);

	const showSide = () => {
		setShowCategory(!showCategory);
	}

	const carShow = () => {
		setShowCars(!showCars);
		console.log(showCars);
	}

	return (
		<div className="container-fluid mb-5">
			<div className="row border-top px-xl-5">
				<div className="col-lg-3 d-none d-lg-block">
					<a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
						data-toggle="collapse" href="#"
						style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
						onClick={showSide}
					>
						<h6 className="m-0">Categories</h6>
						<i className="fa fa-angle-down text-dark"></i>
					</a>
					{showCategory && (
						<nav
							className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
							id="navbar-vertical">
							<div className="navbar-nav w-100 overflow-hidden" style={{ height: "410px" }}>
								<div className="nav-item dropdown">
									<a href="#" className="nav-link" data-toggle="dropdown" onClick={carShow}>Car <i
										className="fa fa-angle-down float-right mt-1"></i></a>
									{showCars && (
										<div className="position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
											<a href="" className="dropdown-item">Car 1</a>
											<a href="" className="dropdown-item">Car 2</a>
											<a href="" className="dropdown-item">Car 3</a>
										</div>
									)}
								</div>
								<a href="" className="nav-item nav-link">Boat</a>
								<a href="" className="nav-item nav-link">MotorCycle</a>
							</div>
						</nav>
					)}
				</div>
				<div className="col-lg-9">
					<nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
						<div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
							<div className="navbar-nav mr-auto py-0">
								<a href="index.html" className="nav-item nav-link active">Home</a>
								<a href="shop.html" className="nav-item nav-link">Shop</a>
								<a href="detail.html" className="nav-item nav-link">Shop Detail</a>
								<div className="nav-item dropdown">
									<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
									<div className="dropdown-menu rounded-0 m-0">
										<a href="cart.html" className="dropdown-item">Shopping Cart</a>
										<a href="checkout.html" className="dropdown-item">Checkout</a>
									</div>
								</div>
								<a href="contact.html" className="nav-item nav-link">Contact</a>
							</div>
							<div className="navbar-nav ml-auto py-0">
								<a href="" className="nav-item nav-link">Login</a>
								<a href="" className="nav-item nav-link">Register</a>
							</div>
						</div>
					</nav>
					<div id="header-carousel" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active" style={{ height: "410px" }} />
							{/* <Image className="img-fluid" src={TestImage} alt="Image"  /> */}
							<div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
								<div className="p-3" style={{ maxWidth: "700px" }}>
									<h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
									<h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
									<a href="" className="btn btn-light py-2 px-3">Shop Now</a>
								</div>
							</div>
						</div>
						<div className="carousel-item" style={{ height: "410px" }}>
							{/* <Image className="img-fluid" src="/img/carousel-2.jpg" alt="Image" /> */}
							<div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
								<div className="p-3" style={{ maxWidth: "700px" }}>
									<h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
									<h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
									<a href="" className="btn btn-light py-2 px-3">Shop Now</a>
								</div>
							</div>
						</div>
					</div>
					<a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
						<div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
							<span className="carousel-control-prev-icon mb-n2"></span>
						</div>
					</a>
					<a className="carousel-control-next" href="#header-carousel" data-slide="next">
						<div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
							<span className="carousel-control-next-icon mb-n2"></span>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar;