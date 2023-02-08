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
import FilterItem from "@/src/components/inventory/filterItem";
import FilterCons from "@/src/components/inventory/filterCons";
import RVsTheme from "@/src/components/inventory/RVstheme";
import FilterBox from "@/src/components/inventory/filterBox";

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
			<RVsTheme>
				<FilterBox>
					<FilterItem label="Condition">
						<FilterCons title="New" number={107} />
						<FilterCons title="Used" number={29} />
					</FilterItem>
					<FilterItem label="RV Type">
						<FilterCons title="New" number={3} />
						<FilterCons title="Used" number={5} />
					</FilterItem>
					<FilterItem label="Manufacturer">
						<FilterCons title="New" number={3} />
						<FilterCons title="Used" number={5} />
					</FilterItem>
					<FilterItem label="Brands">
						<FilterCons title="New" number={3} />
						<FilterCons title="Used" number={5} />
					</FilterItem>
					<FilterItem label="Features">
						<FilterCons title="New" number={3} />
						<FilterCons title="Used" number={5} />
					</FilterItem>
					<FilterItem label="Length">
						<FilterCons title="New" number={3} />
						<FilterCons title="Used" number={5} />
					</FilterItem>
					<FilterItem label="Weight">
						<FilterCons title="New" number={3} />
						<FilterCons title="Used" number={5} />
					</FilterItem>
					<FilterItem label="Sleeps">
						<FilterCons title="New" number={3} />
						<FilterCons title="Used" number={5} />
					</FilterItem>
					<FilterItem label="Price Range">
						<FilterCons title="New" number={3} />
						<FilterCons title="Used" number={5} />
					</FilterItem>
				</FilterBox>
				<MainListBox>
					<RVItem img="/images/car-1.jpg" id={1} />
					<RVItem img="/images/car-2.jpg" id={2} />
					<RVItem img="/images/car-3.jpg" id={3} />
					<RVItem img="/images/car-4.jpg" id={4} />
				</MainListBox>
			</RVsTheme>
			<Footer />
		</MainTheme>
	)
}

export default Inventory;