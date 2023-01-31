import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/src/components/global/navbar';
import Footer from '@/src/components/global/footer';
import Back from '@/src/components/Landing/back';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import SwiperCore, { Navigation, Autoplay } from "swiper";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  SwiperCore.use([Autoplay,Navigation]);
  return (
    <>
      <Head>
        <title>ZepBo</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/aos.css" />
        <link rel="stylesheet" href="css/ionicons.min.css" />
        <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="css/jquery.timepicker.css" />
        <link rel="stylesheet" href="css/flaticon.css" />
        <link rel="stylesheet" href="css/icomoon.css" />
        <link rel="stylesheet" href="css/style.css" />
      </Head>
      <main>
        <Navbar />
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
            <Back title="Happy &amp; Exciting Way with Excellent RV" img="images/533758.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Back title="Happy &amp; Exciting Way with Excellent RV" img="images/8fG73k.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Back title="Happy &amp; Exciting Way with Excellent RV" img="images/1355397871704006805.jpg" />
          </SwiperSlide>
        </Swiper>

        <section className="ftco-section ftco-no-pt bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 heading-section text-center  mb-5">
                <span className="subheading">What we offer</span>
                <h2 className="mb-2">Featured Vehicles</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="carousel-car">
                  <div className="item">
                    <div className="car-wrap rounded ">
                      <div className="img rounded d-flex align-items-end" style={{ backgroundImage: "url(images/car-1.jpg)" }}>
                      </div>
                      <div className="text">
                        <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                        <div className="d-flex mb-3">
                          <span className="cat">Cheverolet</span>
                          <p className="price ml-auto">$500 <span>/day</span></p>
                        </div>
                        <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a> <a href="#" className="btn btn-secondary py-2 ml-1">Details</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="car-wrap rounded ">
                      <div className="img rounded d-flex align-items-end" style={{ backgroundImage: "url(images/car-2.jpg)" }}>
                      </div>
                      <div className="text">
                        <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                        <div className="d-flex mb-3">
                          <span className="cat">Cheverolet</span>
                          <p className="price ml-auto">$500 <span>/day</span></p>
                        </div>
                        <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a> <a href="#" className="btn btn-secondary py-2 ml-1">Details</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="car-wrap rounded ">
                      <div className="img rounded d-flex align-items-end" style={{ backgroundImage: "url(images/car-3.jpg)" }}>
                      </div>
                      <div className="text">
                        <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                        <div className="d-flex mb-3">
                          <span className="cat">Cheverolet</span>
                          <p className="price ml-auto">$500 <span>/day</span></p>
                        </div>
                        <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a> <a href="#" className="btn btn-secondary py-2 ml-1">Details</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="car-wrap rounded ">
                      <div className="img rounded d-flex align-items-end" style={{ backgroundImage: "url(images/car-4.jpg)" }}>
                      </div>
                      <div className="text">
                        <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                        <div className="d-flex mb-3">
                          <span className="cat">Cheverolet</span>
                          <p className="price ml-auto">$500 <span>/day</span></p>
                        </div>
                        <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a> <a href="#" className="btn btn-secondary py-2 ml-1">Details</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-about">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(images/about.jpg)" }}>
              </div>
              <div className="col-md-6 wrap-about ">
                <div className="heading-section heading-section-white pl-md-5">
                  <span className="subheading">About us</span>
                  <h2 className="mb-4">Welcome to ZepBo</h2>

                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  <p><a href="#" className="btn btn-primary py-3 px-4">Search Vehicle</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 text-center heading-section ">
                <span className="subheading">Services</span>
                <h2 className="mb-3">Our Latest Services</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="services services-2 w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-wedding-car"></span></div>
                  <div className="text w-100">
                    <h3 className="heading mb-2">Wedding Ceremony</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="services services-2 w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-transportation"></span></div>
                  <div className="text w-100">
                    <h3 className="heading mb-2">City Transfer</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="services services-2 w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-car"></span></div>
                  <div className="text w-100">
                    <h3 className="heading mb-2">Airport Transfer</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="services services-2 w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-transportation"></span></div>
                  <div className="text w-100">
                    <h3 className="heading mb-2">Whole City Tour</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-intro" style={{ backgroundImage: "url(images/bg_3.jpg)" }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-6 heading-section heading-section-white ">
                <h2 className="mb-3">Do You Want To Earn With Us? So Do not Be Late.</h2>
                <a href="#" className="btn btn-primary btn-lg">Become A Driver</a>
              </div>
            </div>
          </div>
        </section>


        <section className="ftco-section testimony-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 text-center heading-section ">
                <span className="subheading">Testimonial</span>
                <h2 className="mb-3">Happy Clients</h2>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12">
                <div className="carousel-testimony owl-carousel ftco-owl">
                  <div className="item">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div className="user-img mb-2" style={{ backgroundImage: "url(images/person_1.jpg)" }}>
                      </div>
                      <div className="text pt-4">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Roger Scott</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div className="user-img mb-2" style={{ backgroundImage: "url(images/person_2.jpg)" }}>
                      </div>
                      <div className="text pt-4">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Roger Scott</p>
                        <span className="position">Interface Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div className="user-img mb-2" style={{ backgroundImage: "url(images/person_3.jpg)" }}>
                      </div>
                      <div className="text pt-4">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Roger Scott</p>
                        <span className="position">UI Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div className="user-img mb-2" style={{ backgroundImage: "url(images/person_1.jpg)" }}>
                      </div>
                      <div className="text pt-4">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Roger Scott</p>
                        <span className="position">Web Developer</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div className="user-img mb-2" style={{ backgroundImage: "url(images/person_1.jpg)" }}>
                      </div>
                      <div className="text pt-4">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Roger Scott</p>
                        <span className="position">System Analyst</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 heading-section text-center ">
                <span className="subheading">Blog</span>
                <h2>Recent Blog</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-4 d-flex ">
                <div className="blog-entry justify-content-end">
                  <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('images/image_1.jpg')" }}>
                  </a>
                  <div className="text pt-4">
                    <div className="meta mb-3">
                      <div><a href="#">Oct. 29, 2019</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                    </div>
                    <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                    <p><a href="#" className="btn btn-primary">Read more</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ">
                <div className="blog-entry justify-content-end">
                  <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('images/image_2.jpg')" }}>
                  </a>
                  <div className="text pt-4">
                    <div className="meta mb-3">
                      <div><a href="#">Oct. 29, 2019</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                    </div>
                    <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                    <p><a href="#" className="btn btn-primary">Read more</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ">
                <div className="blog-entry">
                  <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('images/image_3.jpg')" }}>
                  </a>
                  <div className="text pt-4">
                    <div className="meta mb-3">
                      <div><a href="#">Oct. 29, 2019</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                    </div>
                    <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                    <p><a href="#" className="btn btn-primary">Read more</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-counter ftco-section img bg-light" id="section-counter">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="text text-border d-flex align-items-center">
                    <strong className="number" data-number="60">0</strong>
                    <span>Year <br />Experienced</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="text text-border d-flex align-items-center">
                    <strong className="number" data-number="1090">0</strong>
                    <span>Total <br />Cars</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="text text-border d-flex align-items-center">
                    <strong className="number" data-number="2590">0</strong>
                    <span>Happy <br />Customers</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="text d-flex align-items-center">
                    <strong className="number" data-number="67">0</strong>
                    <span>Total <br />Branches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
