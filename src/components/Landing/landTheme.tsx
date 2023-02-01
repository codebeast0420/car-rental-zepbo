import React, { FC } from "react";
import Head from 'next/head'

interface MyLandTheme {
	children: React.ReactNode;
}

const LandTheme: FC<MyLandTheme> = (props) => {
	return (
		<>
			<Head>
				<title>ZepBo</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap" rel="stylesheet" />
				<link rel="stylesheet" href="css/style.css" />
			</Head>
			<main>
				{props.children}
			</main>
		</>
	)
}

export default LandTheme;