import React from "react"

export interface HasChildren {
	children: React.ReactNode
}

export interface BackProps {
	img: string;
}

export interface BlogItemType {
	date: string;
	subscriber: string;
	title: string;
	img: string;
}

export interface FeatureItemType {
	name: string;
	url: string;
	price: string;
	property: string;
}

export interface TitleDescriptionType {
	title?: string;
	description?: string;
}

export interface WelcomeType {
	company: string;
	title: string;
	children: React.ReactNode;
}

export interface MainImageType {
	title: string;
	current: string;
}

export interface InputBoxType {
	placeholder?: string;
	value?: string;
	change?: () => void;
}

export interface NavbarType {
	current: number;
}