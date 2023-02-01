import ContactForm from "@/src/components/contact/contactForm";
import ContactTheme from "@/src/components/contact/contactTheme";
import Footer from "@/src/components/global/footer";
import MainImage from "@/src/components/global/mainImage";
import Navbar from "@/src/components/global/navbar";
import Head from "next/head";
import React, { FC } from "react";

const Contact: FC = () => {
	return (
		<ContactTheme>
			<Navbar />
			<MainImage current="Contact" title="Contact Us" />
			<ContactForm />
			<Footer />
		</ContactTheme>
	)
}

export default Contact;