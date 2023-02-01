import React, { FC } from "react";
import BlueBtn from "../global/blueBtn";
import InputBox from "../global/inputBox";
import ContactLabel from "./contactLabel";

const ContactForm: FC = () => {
	return (
		<section className="ftco-section contact-section" style={{ backgroundColor: 'white' }}>
			<div className="container">
				<div className="row d-flex mb-5 contact-info">
					<div className="col-md-4">
						<div className="row mb-5">
							<ContactLabel title="Adress" description="198 West 21th Street, Suite 721 New York NY 10016" />
							<ContactLabel title="Phone" description="+ 1235 2355 98" />
							<ContactLabel title="Email" description="info@yoursite.com" />
						</div>
					</div>
					<div className="col-md-8 block-9 mb-md-5">
						<div className="bg-light p-5 contact-form">
							<InputBox placeholder="Your Name" />
							<InputBox placeholder="Your Email" />
							<InputBox placeholder="Your Phone" />
							<InputBox placeholder="Subject" />
							<div className="form-group">
								<textarea name="" id="" cols={30} rows={7} className="form-control" placeholder="Message"></textarea>
							</div>
							<div className="form-group">
								<BlueBtn title="Send Message" />
							</div>
						</div>
					</div>
				</div>
				{/* <div className="row justify-content-center">
					<div className="col-md-12">
						<div id="map" className="bg-white"></div>
					</div>
				</div> */}
			</div>
		</section>
	)
}

export default ContactForm;