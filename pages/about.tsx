import ClientItem from '@/src/components/about/clientItem';
import ClientSection from '@/src/components/about/clientSection';
import Footer from '@/src/components/global/footer';
import MainImage from '@/src/components/global/mainImage';
import MainTheme from '@/src/components/global/mainTheme';
import Navbar from '@/src/components/global/navbar';
import Welcome from '@/src/components/Landing/welcome';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import SwiperCore, { Pagination, Autoplay } from "swiper";
import SiteState from '@/src/components/Landing/siteState';
import OurStory from '@/src/components/about/ourStory';
import Services from '@/src/components/Landing/services';
import Service from '@/src/components/Landing/service';
import WhyChoose from '@/src/components/about/whyChoose';

const About: FC = () => {

	SwiperCore.use([Autoplay, Pagination]);

	return (
		<MainTheme>
			<Navbar current={2} />
			<MainImage title='About Us' current='About' img='images/about1.jpg' />
			<Welcome company='ZepBo' title='About Us'>
				<p>ZepBo is family owned and operated and has been serving the RV industry of Dallas/Ft
					Worth for over 50 years! Our goal at United RV is simple; we want to become your full-service
					RV dealer. With this goal in mind, we offer our customers one-stop shopping.
				</p>
				<p>Our 12+ acre facility includes a large air-conditioned showroom, a 12,000 square foot parts and accessory department,
					and a 20-bay service facility. Furthermore, we offer RV storage, LP gas and an RV dump station.
					Whether you are in the market for a new RV or a pre-owned RV, need fast and quality service,
					or just want to see the newest parts and accessories available, ZepBo is the only place you
					will ever need to remember.
					Our air-conditioned showroom is always stocked with the newest models for your viewing pleasure,
					especially on those days that it is just too hot or rainy outside to look.</p>
			</Welcome>
			<section className="ftco-section ftco-intro" style={{ backgroundImage: "url(images/about.jpg)" }}>
				<div className="overlay"></div>
				<div className="container">
					<div className="row justify-content-end">
						<div className="col-md-6 heading-section heading-section-white">
							<h2 className="mb-3">We are Here for your Joy</h2>
							{/* <a href="#" className="btn btn-primary btn-lg">Become A Driver</a> */}
						</div>
					</div>
				</div>
			</section>
			<OurStory
				title='Our Story'
				description='ZepBo is family owned and operated and has been serving the RV industry of	
					Dallas/Ft Worth for over 50 years! Our goal at ZepBo is simple; we want to become your full-service
					RV dealer. With this goal in mind, we offer our customers one-stop shopping.'
				img='images/our_story.jpg'
			/>
			<Services>
				<Service title='Selling Best RVs' description='A small river named Duden flows by their place and supplies it with the necessary regelialia.' />
				<Service title='Repair RVs' description='A small river named Duden flows by their place and supplies it with the necessary regelialia.' />
				<Service title='Rental Service' description='A small river named Duden flows by their place and supplies it with the necessary regelialia.' />
				<Service title='Others' description='A small river named Duden flows by their place and supplies it with the necessary regelialia.' />
			</Services>
			<WhyChoose
				title='Why Choose ZepBo'
				img='images/why-choose.jpg'
			/>
			<ClientSection>
				<Swiper
					pagination={true}
					modules={[Pagination]}
					autoplay={{
						"delay": 2500,
						"disableOnInteraction": false
					}}
					breakpoints={{
						320: {
							// direction: "vertical",
							slidesPerView: 1.5,
						},
						440: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 2.5,
						},
					}}>
					<SwiperSlide>
						<ClientItem
							name='Roger Scott'
							description='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
							img='images/person_1.jpg'
							position='Marketing Manager' />
					</SwiperSlide>
					<SwiperSlide>
						<ClientItem
							name='Roger Scott'
							description='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
							img='images/person_2.jpg'
							position='Interface Designer' />
					</SwiperSlide>
					<SwiperSlide>
						<ClientItem
							name='Roger Scott'
							description='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
							img='images/person_3.jpg'
							position='UI Designer' />
					</SwiperSlide>
					<SwiperSlide>
						<ClientItem
							name='Roger Scott'
							description='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
							img='images/person_1.jpg'
							position='Web Developer' />
					</SwiperSlide>
					<SwiperSlide>
						<ClientItem
							name='Roger Scott'
							description='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
							img='images/person_1.jpg'
							position='System Analytis' />
					</SwiperSlide>
				</Swiper>
			</ClientSection>
			<SiteState />
			<Footer />
		</MainTheme>
	)
}

export default About;