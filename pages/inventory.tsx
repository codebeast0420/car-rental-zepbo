import Footer from "@/src/components/global/footer";
import MainTheme from "@/src/components/global/mainTheme";
import Navbar from "@/src/components/global/navbar";
import MainImage from "@/src/components/global/mainImage";
import React, { FC } from "react";
import InventorySection from "@/src/components/inventory/inventorySection";
import InventoryItem from "@/src/components/inventory/inventoryItem";
import MainListBox from "@/src/components/inventory/mainListBox";
import RVItem from "@/src/components/inventory/RVItem";
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
					modules={[Pagination]}
					pagination={{
						dynamicBullets: true,
					}}
					loop={true}
					centeredSlides={true}
					breakpoints={{
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
			<MainListBox>
				<RVItem img="/images/car-1.jpg" />
				<RVItem img="/images/car-2.jpg" />
				<RVItem img="/images/car-3.jpg" />
				<RVItem img="/images/car-4.jpg" />
			</MainListBox>
			<Footer />
		</MainTheme>
	)
}

export default Inventory;