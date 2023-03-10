import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/src/components/global/navbar';
import Footer from '@/src/components/global/footer';
import Back from '@/src/components/Landing/back';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import SwiperCore, { Navigation, Autoplay } from "swiper";
import SiteState from '@/src/components/Landing/siteState';
import Feature from '@/src/components/Landing/feature';
import FeatureItem from '@/src/components/Landing/featureItem';
import Welcome from '@/src/components/Landing/welcome';
import Services from '@/src/components/Landing/services';
import Service from '@/src/components/Landing/service';
import Blog from '@/src/components/Landing/blog';
import BlogItem from '@/src/components/Landing/blogItem';
import MainTheme from '@/src/components/global/mainTheme';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  SwiperCore.use([Autoplay, Navigation]);
  return (
    <MainTheme>
      <Navbar current={1}/>
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        navigation={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }} >
        <SwiperSlide>
          <Back img="images/back-1.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <Back img="images/back-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Back img="images/back-3.jpg" />
        </SwiperSlide>
      </Swiper>
      <Feature>
        <div className='row'>
          <FeatureItem name='Mercedes Grand Sedan' url='images/car-1.jpg' price='$27,525' property='Cheverolet' />
          <FeatureItem name='Used 2020 Forest River' url='images/car-2.jpg' price='$32,528' property='Cheverolet' />
        </div>
        <div className='row'>
          <FeatureItem name='Outdoorcy 2023' url='images/car-3.jpg' price='$36,253' property='New Arrival' />
          <FeatureItem name='Oregon 2022' url='images/car-4.jpg' price='$43,625' property='Cheverolet' />
        </div>
      </Feature>
      <Welcome company='ZepBo' title='About Us'>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        <p><Link href="/about" className="btn btn-primary py-3 px-4">Learn More</Link></p>
      </Welcome>
      <Services>
        <Service title='Wedding Ceremony' description='A small river named Duden flows by their place and supplies it with the necessary regelialia.' />
        <Service title='City Transfer' description='A small river named Duden flows by their place and supplies it with the necessary regelialia.' />
        <Service title='Airport Transfer' description='A small river named Duden flows by their place and supplies it with the necessary regelialia.' />
        <Service title='Whole City Tour' description='A small river named Duden flows by their place and supplies it with the necessary regelialia.' />
      </Services>
      <Blog>
        <BlogItem date="Oct. 29, 2019" subscriber="Admin" img="images/image_1.jpg" title="Why Lead Generation is Key for Business Growth" />
        <BlogItem date="Oct. 29, 2019" subscriber="Admin" img="images/image_2.jpg" title="Why Lead Generation is Key for Business Growth" />
        <BlogItem date="Oct. 29, 2019" subscriber="Admin" img="images/image_3.jpg" title="Why Lead Generation is Key for Business Growth" />
      </Blog>
      <SiteState />
      <Footer />
    </MainTheme>
  )
}
