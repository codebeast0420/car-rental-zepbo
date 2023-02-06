import Footer from "@/src/components/global/footer";
import MainTheme from "@/src/components/global/mainTheme";
import Navbar from "@/src/components/global/navbar";
import MainImage from "@/src/components/global/mainImage";
import React, { FC } from "react";
import InventorySection from "@/src/components/inventory/inventorySection";
import InventoryItem from "@/src/components/inventory/inventoryItem";
import Pricing from "@/src/components/inventory/pricing";
import PricingItem from "@/src/components/inventory/pricingItem";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import 'swiper/css/pagination'
import "swiper/css";

const Inventory: FC = () => {

	SwiperCore.use([Autoplay, Pagination, Navigation]);
	return (
		<MainTheme>
			<Navbar current={4} />
			<MainImage title="Recreatial Vehicles" current="Inventory" img="images/inventory.jpg" />
			<InventorySection>
				<Swiper
					// slidesPerView={2}
					modules={[Pagination]}
					pagination={{
						dynamicBullets: true,
					}}
					loop={true}
					centeredSlides={true}
					breakpoints={{
						// 320: {
						// 	slidesPerView: 1.5,
						// },
						// 440: {
						// 	slidesPerView: 2,
						// },
						768: {
							slidesPerView: 2.5,
						},
					}}
					autoplay={{
						"delay": 2500,
						"disableOnInteraction": false
					}} >
					<SwiperSlide>
						<InventoryItem img="images/car-1.jpg" />
					</SwiperSlide>
					<SwiperSlide>
						<InventoryItem img="images/car-2.jpg" />
					</SwiperSlide>
					<SwiperSlide>
						<InventoryItem img="images/car-3.jpg" />
					</SwiperSlide>
					<SwiperSlide>
						<InventoryItem img="images/car-4.jpg" />
					</SwiperSlide>
					<SwiperSlide>
						<InventoryItem img="images/car-2.jpg" />
					</SwiperSlide>
					<SwiperSlide>
						<InventoryItem img="images/car-3.jpg" />
					</SwiperSlide>
				</Swiper>
			</InventorySection>
			<Pricing>
				<PricingItem img="images/car-1.jpg" />
				<PricingItem img="images/car-2.jpg" />
				<PricingItem img="images/car-3.jpg" />
				<PricingItem img="images/car-4.jpg" />
			</Pricing>
			<Footer />
		</MainTheme>
	)
}

export default Inventory;