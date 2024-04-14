import React from "react";


// Import Swiper styles






const Home = () => {

    const tourImages = ["images/bg_1.jpg", "images/hotel-1.jpg", "images/hotel-4.jpg", "images/hotel-3.jpg"];

    return (
        <>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("images/bg_1.jpg")' }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Trang Chủ</a></span> <span>Chuyến Đi</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Chuyến Đi</h1>
                        </div>
                    </div>
                </div>
            </div>
           

        <section className="ftco-section justify-content-end ftco-search">
                <div className="container-wrap ml-auto">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="nav nav-pills justify-content-center text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            </div>
                        </div>
                        <div className="col-md-24">
                            <div className="tab-content p-4 px-5" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                                    <form action="#" className="search-destination">
                                        <div className="row">
                                           
                                            
                                            <div className="col-md align-items-end">
                                                <div className="form-group">
                                                    <label htmlFor="#">Điểm đi</label>
                                                    <div className="form-field">
                                                        <div className="icon"><span className="icon-map-marker" /></div>
                                                        <input type="text" className="form-control checkin_date" placeholder="Check In" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md align-items-end">
                                                <div className="form-group">
                                                    <label htmlFor="#">Điểm đến</label>
                                                    <div className="form-field">
                                                        <div className="icon"><span className="icon-map-marker" /></div>
                                                        <input type="text" className="form-control checkout_date" placeholder="From" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md align-items-end">
                                                <div className="form-group">
                                                    <label htmlFor="#">Ngày đi</label>
                                                    <div className="form-field">
                                                        <div className="select-wrap">
                                                            <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                            <select name id className="form-control">
                                                                <option value>1</option>
                                                                <option value>2</option>
                                                                <option value>3</option>
                                                                <option value>4</option>
                                                                <option value>5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md align-self-end">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <input type="submit" defaultValue="Search" className="form-control btn btn-primary" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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


            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <h2 className="mb-4"><strong>Popular</strong> Hotels</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-1.jpg)' }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-link" />
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">New Orleans, Hotel</a></h3>
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
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o" /> Miami, Fl</span>
                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination d-md-flex flex-column-reverse">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-2.jpg)' }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-link" />
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">New Orleans, Hotel</a></h3>
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
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o" /> Miami, Fl</span>
                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-3.jpg)' }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-link" />
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">New Orleans, Hotel</a></h3>
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
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o" /> Miami, Fl</span>
                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination d-md-flex flex-column-reverse">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-4.jpg)' }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-link" />
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">New Orleans, Hotel</a></h3>
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
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o" /> Miami, Fl</span>
                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-5.jpg)' }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-link" />
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">New Orleans, Hotel</a></h3>
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
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o" /> Miami, Fl</span>
                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
