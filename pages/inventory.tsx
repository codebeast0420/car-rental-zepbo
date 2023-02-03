import Footer from "@/src/components/global/footer";
import MainTheme from "@/src/components/global/mainTheme";
import Navbar from "@/src/components/global/navbar";
import MainImage from "@/src/components/global/mainImage";
import React, { FC } from "react";
import InventorySection from "@/src/components/inventory/inventorySection";
import InventoryItem from "@/src/components/inventory/inventoryItem";

const Inventory: FC = () => {
	return (
		<MainTheme>
			<Navbar current={4} />
			<MainImage title="Recreatial Vehicles" current="Inventory" img="images/inventory.jpg" />
			<InventorySection>
				<InventoryItem img="images/car-1.jpg"/>
				<InventoryItem img="images/car-2.jpg"/>
				<InventoryItem img="images/car-3.jpg"/>
				<InventoryItem img="images/car-4.jpg"/>
				<InventoryItem img="images/car-2.jpg"/>
				<InventoryItem img="images/car-3.jpg"/>
			</InventorySection>
			<Footer />
		</MainTheme>
	)
}

export default Inventory;