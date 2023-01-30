import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import TestImage from '../src/img/carousel-1.jpg';
import TopBar from '@/src/components/global/topbar';
import Navbar from '@/src/components/global/navbar';
import Footer from '@/src/components/global/footer';
// import  '@/styles/style.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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

        <div className="hero-wrap ftco-degree-bg" style={{ backgroundImage: "url('images/bg_1.jpg')" }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
              <div className="col-lg-8 ">
                <div className="text w-100 text-center mb-md-5 pb-md-5">
                  <h1 className="mb-4">Fast &amp; Easy Way To Rent A Car</h1>
                  <p style={{ fontSize: "18px" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                  <a href="https://vimeo.com/45830194" className="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="ion-ios-play"></span>
                    </div>
                    <div className="heading-title ml-5">
                      <span>Easy steps for renting a car</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="ftco-section ftco-no-pt bg-light">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-12	featured-top">
                <div className="row no-gutters">
                  <div className="col-md-4 d-flex align-items-center">
                    <form action="#" className="request-form bg-primary">
                      <h2>Make your trip</h2>
                      <div className="form-group">
                        <label htmlFor="" className="label">Pick-up location</label>
                        <input type="text" className="form-control" placeholder="City, Airport, Station, etc" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="" className="label">Drop-off location</label>
                        <input type="text" className="form-control" placeholder="City, Airport, Station, etc" />
                      </div>
                      <div className="d-flex">
                        <div className="form-group mr-2">
                          <label htmlFor="" className="label">Pick-up date</label>
                          <input type="text" className="form-control" id="book_pick_date" placeholder="Date" />
                        </div>
                        <div className="form-group ml-2">
                          <label htmlFor="" className="label">Drop-off date</label>
                          <input type="text" className="form-control" id="book_off_date" placeholder="Date" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="" className="label">Pick-up time</label>
                        <input type="text" className="form-control" id="time_pick" placeholder="Time" />
                      </div>
                      <div className="form-group">
                        <input type="submit" value="Rent A Car Now" className="btn btn-secondary py-3 px-4" />
                      </div>
                    </form>
                    
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="services-wrap rounded-right w-100">
                      <h3 className="heading-section mb-4">Better Way to Rent Your Perfect Cars</h3>
                      <div className="row d-flex mb-4">
                        <div className="col-md-4 d-flex align-self-stretch ">
                          <div className="services w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route"></span></div>
                            <div className="text w-100">
                              <h3 className="heading mb-2">Choose Your Pickup Location</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 d-flex align-self-stretch ">
                          <div className="services w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-handshake"></span></div>
                            <div className="text w-100">
                              <h3 className="heading mb-2">Select the Best Deal</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 d-flex align-self-stretch ">
                          <div className="services w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-rent"></span></div>
                            <div className="text w-100">
                              <h3 className="heading mb-2">Reserve Your Rental Car</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p><a href="#" className="btn btn-primary py-3 px-4">Reserve Your Perfect Car</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="ftco-section ftco-no-pt bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 heading-section text-center  mb-5">
                <span className="subheading">What we offer</span>
                <h2 className="mb-2">Feeatured Vehicles</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="carousel-car owl-carousel">
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
                  <h2 className="mb-4">Welcome to Carbook</h2>

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
