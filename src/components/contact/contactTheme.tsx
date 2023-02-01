import React, { FC } from 'react';
import Head from 'next/head';
import { HasChildren } from '@/src/type';

const ContactTheme: FC<HasChildren> = (porps) => {
	return (
		<>
			<Head>
				<title>ZepBo</title>
				<link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap"
					rel="stylesheet" />
				<link rel="stylesheet" href="css/ionicons.min.css" />
				<link rel="stylesheet" href="css/style.css" />
			</Head>
			<div>
				{porps.children}
			</div>
		</>
	)
}

export default ContactTheme;