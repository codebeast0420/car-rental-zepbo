import ContactForm from "@/src/components/contact/contactForm";
import Footer from "@/src/components/global/footer";
import MainImage from "@/src/components/global/mainImage";
import MainTheme from "@/src/components/global/mainTheme";
import Navbar from "@/src/components/global/navbar";
import React, { FC } from "react";

const Contact: FC = () => {
	return (
		<MainTheme>
			<Navbar current={6}/>
			<MainImage current="Contact" title="Contact Us" img="images/bg_3.jpg"/>
			<ContactForm />
			<Footer />
		</MainTheme>
	)
}

export default Contact;