import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import { StaticImage } from 'gatsby-plugin-image';
import SwiperCore from 'swiper';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";



SwiperCore.use([Navigation]);

const TourSlide = ({ backgroundImage }) => {
    return (
        <div className="hero-wrap js-fullheight" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh' }}>
            <div className="overlay" />
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                    <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                        <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Hotel</span></p>
                        <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Tours</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Home = () => {

    const tourImages = ["images/bg_1.jpg", "images/hotel-1.jpg", "images/hotel-4.jpg", "images/hotel-3.jpg"];

    return (
        <>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("images/bg_1.jpg")' }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Hotel</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Tours</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        prevEl: ".button-prev-slide",
                        nextEl: ".button-next-slide",
                    }}
                    style={{ height: '100vh' }}
                >
                    {tourImages.map((image, index) => (
                        <SwiperSlide key={index} style={{ position: 'relative' }}>
                            <TourSlide backgroundImage={image} />
                            <div className="swiper-button-prev button-prev-slide" style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', backgroundColor: 'black', padding: '10px' }}>
                                <HiOutlineArrowNarrowLeft style={{ color: 'white' }} />
                            </div>
                            <div className="swiper-button-next button-next-slide" style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', backgroundColor: 'black', padding: '10px' }}>
                                <HiOutlineArrowNarrowRight style={{ color: 'white' }} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <section className="ftco-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 sidebar order-md-last ftco-animate">
                            <div className="sidebar-wrap ftco-animate">
                                <h3 className="heading mb-4">Find City</h3>
                                <form action="#">
                                    <div className="fields">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Destination, City" />
                                        </div>
                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                <select name id className="form-control" placeholder="Keyword search">
                                                    <option value>Select Location</option>
                                                    <option value>San Francisco USA</option>
                                                    <option value>Berlin Germany</option>
                                                    <option value>Lodon United Kingdom</option>
                                                    <option value>Paris Italy</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="checkin_date" className="form-control checkin_date" placeholder="Date from" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="checkout_date" className="form-control checkout_date" placeholder="Date to" />
                                        </div>
                                        <div className="form-group">
                                            <div className="range-slider">
                                                <span>
                                                    <input type="number" defaultValue={25000} min={0} max={120000} />	-
                                                    <input type="number" defaultValue={50000} min={0} max={120000} />
                                                </span>
                                                <input defaultValue={1000} min={0} max={120000} step={500} type="range" />
                                                <input defaultValue={50000} min={0} max={120000} step={500} type="range" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" defaultValue="Search" className="btn btn-primary py-3 px-5" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar-wrap ftco-animate">
                                <h3 className="heading mb-4">Star Rating</h3>
                                <form method="post" className="star-rating">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>{/* END*/}
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="destination">
                                        <a href="/detailTour" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-1.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-link" />
                                            </div>
                                        </a>
                                        <div className="text p-3">
                                            <p>13/04/2024 - 5N4Đ - Giờ đi: 18:50</p>
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><a href="#">Hà Nội - Vịnh Hạ Long - KDL Tràng An - Tuyệt Tịnh Cốc - Chùa Tam Chúc</a></h3>
                                                    <p className="rate">
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star-o" />
                                                        <span>8 Rating</span>
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <span className="price per-price">7.450.000<br /><small>/tour</small></span>
                                                </div>
                                            </div>
                                            <h4>Mã Tour</h4>
                                            <span><i className="icon-map-o" /> NDSGN1371-002-130424VU-H</span>

                                            <p>Nơi Khởi Hành:  TP. Hồ Chí Minh</p>
                                            <h4>Giá : 7.490.000</h4>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span className="ml-auto"><a href="#">Xem chi tiết</a></span>
                                                <span className="ml-auto"><a href="#">Book Now</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="destination">
                                        <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-2.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-link" />
                                            </div>
                                        </a>
                                        <div className="text p-3">
                                            <p>13/04/2024 - 5N4Đ - Giờ đi: 18:50</p>
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><a href="#">Hà Nội - Vịnh Hạ Long - KDL Tràng An - Tuyệt Tịnh Cốc - Chùa Tam Chúc</a></h3>
                                                    <p className="rate">
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star-o" />
                                                        <span>8 Rating</span>
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <span className="price per-price">7.450.000<br /><small>/tour</small></span>
                                                </div>
                                            </div>
                                            <h4>Mã Tour</h4>
                                            <span><i className="icon-map-o" /> NDSGN1371-002-130424VU-H</span>

                                            <p>Nơi Khởi Hành:  TP. Hồ Chí Minh</p>
                                            <h4>Giá : 7.490.000</h4>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span className="ml-auto"><a href="#">Xem chi tiết</a></span>
                                                <span className="ml-auto"><a href="#">Book Now</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="destination">
                                        <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-3.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-link" />
                                            </div>
                                        </a>
                                        <div className="text p-3">
                                            <p>13/04/2024 - 5N4Đ - Giờ đi: 18:50</p>
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><a href="#">Hà Nội - Vịnh Hạ Long - KDL Tràng An - Tuyệt Tịnh Cốc - Chùa Tam Chúc</a></h3>
                                                    <p className="rate">
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star-o" />
                                                        <span>8 Rating</span>
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <span className="price per-price">7.450.000<br /><small>/tour</small></span>
                                                </div>
                                            </div>
                                            <h4>Mã Tour</h4>
                                            <span><i className="icon-map-o" /> NDSGN1371-002-130424VU-H</span>

                                            <p>Nơi Khởi Hành:  TP. Hồ Chí Minh</p>
                                            <h4>Giá : 7.490.000</h4>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span className="ml-auto"><a href="#">Xem chi tiết</a></span>
                                                <span className="ml-auto"><a href="#">Book Now</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="destination">
                                        <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-4.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-link" />
                                            </div>
                                        </a>
                                        <div className="text p-3">
                                            <p>13/04/2024 - 5N4Đ - Giờ đi: 18:50</p>
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><a href="#">Hà Nội - Vịnh Hạ Long - KDL Tràng An - Tuyệt Tịnh Cốc - Chùa Tam Chúc</a></h3>
                                                    <p className="rate">
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star-o" />
                                                        <span>8 Rating</span>
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <span className="price per-price">7.450.000<br /><small>/tour</small></span>
                                                </div>
                                            </div>
                                            <h4>Mã Tour</h4>
                                            <span><i className="icon-map-o" /> NDSGN1371-002-130424VU-H</span>

                                            <p>Nơi Khởi Hành:  TP. Hồ Chí Minh</p>
                                            <h4>Giá : 7.490.000</h4>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span className="ml-auto"><a href="#">Xem chi tiết</a></span>
                                                <span className="ml-auto"><a href="#">Book Now</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="destination">
                                        <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-5.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-link" />
                                            </div>
                                        </a>
                                        <div className="text p-3">
                                            <p>13/04/2024 - 5N4Đ - Giờ đi: 18:50</p>
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><a href="#">Hà Nội - Vịnh Hạ Long - KDL Tràng An - Tuyệt Tịnh Cốc - Chùa Tam Chúc</a></h3>
                                                    <p className="rate">
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star-o" />
                                                        <span>8 Rating</span>
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <span className="price per-price">7.450.000<br /><small>/tour</small></span>
                                                </div>
                                            </div>
                                            <h4>Mã Tour</h4>
                                            <span><i className="icon-map-o" /> NDSGN1371-002-130424VU-H</span>

                                            <p>Nơi Khởi Hành:  TP. Hồ Chí Minh</p>
                                            <h4>Giá : 7.490.000</h4>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span className="ml-auto"><a href="#">Xem chi tiết</a></span>
                                                <span className="ml-auto"><a href="#">Book Now</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="destination">
                                        <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-5.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-link" />
                                            </div>
                                        </a>
                                        <div className="text p-3">
                                            <p>13/04/2024 - 5N4Đ - Giờ đi: 18:50</p>
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><a href="#">Hà Nội - Vịnh Hạ Long - KDL Tràng An - Tuyệt Tịnh Cốc - Chùa Tam Chúc</a></h3>
                                                    <p className="rate">
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star-o" />
                                                        <span>8 Rating</span>
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <span className="price per-price">7.450.000<br /><small>/tour</small></span>
                                                </div>
                                            </div>
                                            <h4>Mã Tour</h4>
                                            <span><i className="icon-map-o" /> NDSGN1371-002-130424VU-H</span>

                                            <p>Nơi Khởi Hành:  TP. Hồ Chí Minh</p>
                                            <h4>Giá : 7.490.000</h4>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span className="ml-auto"><a href="#">Xem chi tiết</a></span>
                                                <span className="ml-auto"><a href="#">Book Now</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> {/* .col-md-8 */}
                    </div>
                </div>
            </section> {/* .section */}
            <section className="ftco-section-parallax">
                <div className="parallax-img d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                                <h2>Subcribe to our Newsletter</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                                <div className="row d-flex justify-content-center mt-5">
                                    <div className="col-md-8">
                                        <form action="#" className="subscribe-form">
                                            <div className="form-group d-flex">
                                                <input type="text" className="form-control" placeholder="Enter email address" />
                                                <input type="submit" defaultValue="Subscribe" className="submit px-3" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
