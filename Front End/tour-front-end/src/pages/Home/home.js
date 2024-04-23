import React, { useEffect, useState } from "react";

import { Row, Col, TabContent, TabPane, Input, Button } from 'reactstrap';
import tourServices from "../../services/tour.services";
import { Link } from "react-router-dom";
import HomeSlider from "../HomeSlider/homeSlider";
import { useNavigate } from 'react-router-dom';



// Import Swiper styles






const Home = () => {
    const [tours, setTours] = useState([]);

    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage state
    const [pageSize, setPageSize] = useState(6); // Initialize pageSize state
    const [totalPages, setTotalPages] = useState(1); // Add state for total pages
    const [loading, setLoading] = useState(true); 

    // Lấy dữ liệu các thành phố
    const [cities, setCities] = useState([]);

    useEffect(() => {
        // Fetch city data when the component mounts
        const fetchDataCity = async () => {
            try {
                // Fetch city data from the API
                const response = await tourServices.getAllCity();
                setCities(response.data.data); // Update cities state with the fetched data
                setLoading(false); // Set loading to false once data is fetched
            } catch (err) {
                // Handle error and set error state
                setError("Error fetching city data");
                setLoading(false); // Set loading to false in case of an error
            }
        };

        fetchDataCity();
    }, []);



    useEffect(() => {
        fetchTourData();
    }, [currentPage, pageSize]);


    const fetchTourData = async (sortBy = 'title', sortOrder = 'asc') => {
        try {
            const response = await tourServices.getAllTourAndPaging(currentPage - 1, pageSize, sortBy, sortOrder);
            console.log("Response:", response);
            setTours(response.data.data);

        } catch (error) {
            console.error("Error fetching tours:", error);
            setError(error);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const formatPrice = (price) => {
        return (price).toLocaleString('vi-VN').replace(/,/g, '.');
    };
    const tourImages = ["images/bg_1.jpg", "images/hotel-1.jpg", "images/hotel-4.jpg", "images/hotel-3.jpg"];


    //Tim Chuyen Di

    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const fetchData = async () => {
        try { 
            const sortBy = 'title';
            const sortOrder = 'desc';
            const response = await tourServices.searchAllTour(currentPage - 1, pageSize, sortBy, sortOrder, keyword);

            setTours(response.data.data);
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
        }
    };
    return (
        <>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("images/bg_1.jpg")' }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 text-center" data-scrollax=" properties: { translateY: '70%' }">
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
                                    <Row>
                                        <Col>
                                            <TabContent activeTab="v-pills-1">
                                                <TabPane tabId="v-pills-1">
                                                    <form className="search-destination">
                                                        <Row>
                                                            <Col md={3}>
                                                                <div className="form-group">
                                                                    <label>Điểm đi</label>
                                                                    <Input type="text" placeholder="Check In" />
                                                                </div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="form-group">
                                                                    <label>Điểm đến</label>
                                                                    <Input type="text" placeholder="From" />
                                                                </div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="form-group">
                                                                    <label>Ngày đi</label>
                                                                    <Input type="date" />
                                                                </div>
                                                            </Col>

                                                            <Col md={2}>
                                                                <div className="form-group">
                                                                    <Button color="primary">Tìm Kiếm</Button>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </form>
                                                </TabPane>
                                            </TabContent>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h1></h1>

            <section className="ftco-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 sidebar order-md-last">
                            <div className="sidebar-wrap">
                                <h3 className="heading mb-4">Tìm Chuyến Đi</h3>
                                <form action="#">
                                    <div className="fields">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                value={keyword}
                                                onChange={(e) => setKeyword(e.target.value)}
                                                placeholder="Nhập từ khóa..."
                                            />                                        </div>
                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                <select name id className="form-control" placeholder="Keyword search">
                                                    <option value>Địa điểm Đi</option>
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
                                            <Button color="primary" onClick={fetchData}>Tìm kiếm</Button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>{/* END*/}


                        <div className="col-lg-9">
                            <div className="row">
                                {tours.map(tour => (
                                    <div key={tour.id} className="col-sm col-md-6 col-lg-4 ">
                                        <div className="destination">
                                            <Link
                                                to="/detailTour"
                                                className="text-dark"
                                                state={{ tourId: tour.id }}
                                            >
                                                <a href="" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${tour.coverImage})` }}>
                                                    <div className="icon d-flex justify-content-center align-items-center">
                                                        <span className="icon-link" />
                                                    </div>
                                                </a>
                                            </Link>

                                            <div className="text p-3">
                                                <p>{tour.createDate} - Giờ đi: {tour.startTime}</p>
                                                <div className="d-flex">
                                                    <div className="one">
                                                        <h4><a href="#">{tour.title}</a></h4>
                                                        <p className="rate">

                                                        </p>
                                                    </div>
                                                    <div className="two">
                                                        <span className="price per-price">{tour.price}<br /><small>/tour</small></span>
                                                    </div>
                                                </div>
                                                <span><img src="/images/tour.png" className="icon-img" />
                                                    {tour.id}</span>
                                                <p>Nơi Khởi Hành:  {tour.starLocation}</p>
                                                <p>Nơi Kết Thúc:  {tour.endLocation}</p>
                                                <h3>Giá : {formatPrice(tour.price)} &nbsp;₫</h3>
                                                <hr />
                                                <p className="bottom-area d-flex">
                                                    <span className="ml-auto"><a href="#">Xem chi tiết</a></span>
                                                    <span className="ml-auto"><a href="#">Đặt Lịch</a></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>


                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><a href="#" onClick={handlePrevious}>&lt;</a></li>
                                            {Array.from({ length: totalPages }, (_, index) => (
                                                <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                                                    <a href="#" onClick={() => setCurrentPage(index + 1)}>{index + 1}</a>
                                                </li>
                                            ))}
                                            <li><a href="#" onClick={handleNext}>&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> {/* .col-md-8 */}
                    </div>
                </div>
            </section> {/* .section */}

            <HomeSlider></HomeSlider>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ">
                            <h2 className="mb-4"><strong>Chuyến Đi</strong> Phổ Biến</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm col-md-6 col-lg ">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-1.jpg)' }}>
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
                                            <span className="price per-price">7.450.000<br /><small>/chuyến đi</small></span>
                                        </div>
                                    </div>
                                    <h4>Mã Chuyến Đi</h4>
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
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination d-md-flex flex-column-reverse">
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
                                            <span className="price per-price">7.450.000<br /><small>/chuyến đi</small></span>
                                        </div>
                                    </div>
                                    <h4>Mã Chuyến Đi</h4>
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
                        <div className="col-sm col-md-6 col-lg ftco-animate">
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
                                            <span className="price per-price">7.450.000<br /><small>/chuyến đi</small></span>
                                        </div>
                                    </div>
                                    <h4>Mã Chuyến Đi</h4>
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
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination d-md-flex flex-column-reverse">
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
                                            <span className="price per-price">7.450.000<br /><small>/chuyến đi</small></span>
                                        </div>
                                    </div>
                                    <h4>Mã Chuyến Đi</h4>
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
                        <div className="col-sm col-md-6 col-lg ftco-animate">
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
                                            <span className="price per-price">7.450.000<br /><small>/chuyến đi</small></span>
                                        </div>
                                    </div>
                                    <h4>Mã Chuyến Đi</h4>
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
                </div>
            </section>




        </>
    );
};

export default Home;
