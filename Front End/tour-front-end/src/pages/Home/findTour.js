import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link, useLocation } from 'react-router-dom';


// Import Swiper styles
import 'swiper/css';
import { StaticImage } from 'gatsby-plugin-image';
import SwiperCore from 'swiper';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import tourServices from "../../services/tour.services";



const FindTour = () => {

    const { state } = useLocation();

    const [tourDetailCustomer, setTourDetailCustomer] =
    useState(null);
    const fetchTourDetailCustomer = async () => {
        let response;
        try{
            response = await tourServices.getDetailTourByCustomer(state?.tourId);
            console.log("Response:", response); // Log the response object
            setTourDetailCustomer(response.data.data);
            
            return response;

        }catch(error){
            console.error("Error fetching tour:", error);
        }
    }

    useEffect(() => {
        fetchTourDetailCustomer();
      }, []);
    

    return (
        <>
            <section className="ftco-section ftco-counter img" id="" style={{ backgroundImage: 'url(images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            {/* <div className="row">
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number={100000}>0</strong>
                                            <span>Happy Customers</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number={40000}>0</strong>
                                            <span>Destination Places</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number={87000}>0</strong>
                                            <span>Hotels</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number={56400}>0</strong>
                                            <span>Restaurant</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 sidebar  ftco-animate">
                            <div className="sidebar-wrap ftco-animate">
                                <h3 className="heading mb-4">Địa Điểm Đi</h3>
                                <form action="#">
                                    <div className="fields">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Destination, City" />
                                        </div>
                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                <select name id className="form-control" placeholder="Keyword search">
                                                    <option value>Tìm Chuyến Đi</option>
                                                    <option value>San Francisco USA</option>
                                                    <option value>Berlin Germany</option>
                                                    <option value>Lodon United Kingdom</option>
                                                    <option value>Paris Italy</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="checkin_date" className="form-control checkin_date" placeholder="Ngày Đi" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="checkout_date" className="form-control checkout_date" placeholder="Ngày Về" />
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
                                <h1 class="py-4 h2 fw-bold heading text-center">Du lịch khởi hành từ TP. HỒ CHÍ MINH</h1>
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
                                            
                                                </div>
                                                <div className="two">
                                                    <span className="price per-price">7.450.000<br /><small>/tour</small></span>
                                                </div>
                                            </div>
                                            <h4>Mã chuyến đi</h4>
                                            <span><i className="icon-map-o" /> NDSGN1371-002-130424VU-H</span>

                                            <p>Nơi Khởi Hành:  TP. Hồ Chí Minh</p>
                                            <h4>Giá : 7.490.000</h4>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span className="ml-auto"><a href="#">Xem chi tiết</a></span>
                                                <span className="ml-auto"><a href="#">Đặt Lịch</a></span>
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

export default FindTour;
