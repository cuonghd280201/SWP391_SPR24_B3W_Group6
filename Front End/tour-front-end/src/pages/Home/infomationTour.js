import React, { useState, useEffect } from "react";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import tourServices from "../../services/tour.services";
import orderServices from "../../services/order.services";
import paymentServices from "../../services/payment.services";

const InfomationTour = () => {
    // Get Imfomation
    const navigate = useNavigate();


    const { state } = useLocation();

    const [tourDetailCustomer, setTourDetailCustomer] =
        useState(null);
    const fetchTourDetailCustomer = async () => {
        let response;
        try {
            response = await tourServices.getDetailTourByCustomer(state?.tourId);
            console.log("Response:", response); // Log the response object
            setTourDetailCustomer(response.data.data);

            return response;

        } catch (error) {
            console.error("Error fetching tour:", error);
        }
    }

    useEffect(() => {
        fetchTourDetailCustomer();
    }, []);


    const location = useLocation();

    // Create Order 


    const createOrderTour = async () => {
        try {
            const tourTimeId = tourDetailCustomer?.tourTimeSet[0]?.id;
            const passengers = [];

            // Loop through the adult passengers
            for (let i = 0; i < adultCount; i++) {
                const name = document.getElementById(`adult-name-${i}`).value;
                const phone = document.getElementById(`adult-phone-${i}`).value;
                const idCard = document.getElementById(`adult-idCard-${i}`).value;
                const rawDateOfBirth = document.getElementById(`adult-dateOfBirth-${i}`).value;

                // Convert date format from YYYY-MM-DD to DD-MM-YYYY
                const formattedDateOfBirth = rawDateOfBirth.split('-').reverse().join('-');

                // Create an object for each adult passenger
                passengers.push({ name, phone, idCard, dateOfBirth: formattedDateOfBirth });
            }

            // Loop through the child passengers
            for (let i = 0; i < childCount; i++) {
                const name = document.getElementById(`child-name-${i}`).value;
                const phone = document.getElementById(`child-phone-${i}`).value;
                const rawDateOfBirth = document.getElementById(`child-dateOfBirth-${i}`).value;

                // Convert date format from YYYY-MM-DD to DD-MM-YYYY
                const formattedDateOfBirth = rawDateOfBirth.split('-').reverse().join('-');

                // Create an object for each child passenger
                passengers.push({ name, phone, idCard: null, dateOfBirth: formattedDateOfBirth });
            }

            // Send the request to create the tour order
            const response = await orderServices.createOrder(tourTimeId, passengers);
            const responseData = response.data[0];
            // Lưu trực tiếp giá trị chuỗi vào local storage
            localStorage.setItem('orderResponse', responseData);
            toast.success("Create Information Visitor Successfully!");
            //  navigate("/payment");
        } catch (error) {
            toast.error("Visitor Failed!");
            console.error("Error creating tour order:", error);
        }
    };
    // Checkoout chuyen di

    const createCheckout = async () => {
        try {
            const orderResponseString = localStorage.getItem('orderResponse');
            const response = await paymentServices.createCheckout(orderResponseString);
            toast.success("Payment Successfully");
        } catch (error) {
            toast.error("Payment Failed");
            console.error("Error payment failed:", error);
        }
    };

    const handlePaymentClick = async () => {
        await createCheckout();
    };


    const renderAdultFields = () => {
        const fields = [];
        for (let i = 0; i < adultCount; i++) {
            fields.push(
                <div className="group-fields-input-contact-adult group-fields-input-contact-wrapper mb-3" key={i}>
                    <div className="title-persona">
                        <img src="/images/icons/persons/adult.svg" />Người lớn
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="form-group">
                                <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                <input type="text" id={`adult-name-${i}`} className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-group">
                                <label className="pb-1 font-700">Số điện thoại <span className="text-danger">*</span></label>
                                <input type="text" id={`adult-phone-${i}`} className="form-control fullName hotel-flight-input" placeholder="Nhập số điện thoại" name="fullName" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-group">
                                <label className="pb-1 font-700">CMND/CCCD <span className="text-danger">*</span></label>
                                <input type="text" id={`adult-idCard-${i}`} className="form-control fullName hotel-flight-input" placeholder="Nhập số CMND/CCCD" name="fullName" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-group">
                                <label className="pb-1 font-700">Ngày Sinh <span className="text-danger">*</span></label>
                                <input type="date" id={`adult-dateOfBirth-${i}`} className="form-control fullName hotel-flight-input" />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return fields;
    };

    const renderChildFields = () => {
        const fields = [];
        for (let i = 0; i < childCount; i++) {
            fields.push(
                <div className="group-fields-input-contact-adult group-fields-input-contact-wrapper mb-3" key={i}>
                    <div className="title-persona">
                        <img src="/images/icons/persons/child.svg" />Trẻ em
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="form-group">
                                <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                <input type="text" id={`child-name-${i}`} className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-group">
                                <label className="pb-1 font-700">Số điện thoại <span className="text-danger">*</span></label>
                                <input type="text" id={`child-phone-${i}`} className="form-control fullName hotel-flight-input" placeholder="Nhập số điện thoại" name="fullName" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-group">
                                <label className="pb-1 font-700">Ngày Sinh <span className="text-danger">*</span></label>
                                <input type="date" id={`child-dateOfBirth-${i}`} className="form-control fullName hotel-flight-input" />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return fields;
    };


    const [isOpen, setIsOpen] = useState(false);
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [adultNames, setAdultNames] = useState([]);
    const [childNames, setChildNames] = useState([]);

    const toggle = () => setIsOpen(!isOpen);

    const handleSendForm = () => {
        const formData = {
            adultCount: adultCount,
            childCount: childCount,
            adultNames: adultNames,
            childNames: childNames
        };
        console.log(formData); // Just for testing, you can send this data to your server or handle it as needed
    };

    // const location = useLocation();
    // const { adultCount = 0, childCount = 0 } = location.state || {};

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
            <section className="checkout-main order-tour animate__fadeIn animate__animated">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 top">
                            <div className="product">
                                <div className="product-image">
                                    <div className="image">
                                        <img src={tourDetailCustomer?.coverImage} className="img-fluid" alt="image" />
                                    </div>
                                </div>
                                <div className="product-content">

                                    <div className="ticket-no-wrap d-md-none">
                                        <div className="ticket-no"><i className="icon icon--ticket" />{tourDetailCustomer?.tourTimeSet[0]?.id}</div>
                                    </div>
                                    <p className="title" id="title">Siêu Sale 🔥 {tourDetailCustomer?.title} </p>
                                    <div className="entry"><div className="entry-inner">
                                        <span>Mã Tour <b>{tourDetailCustomer?.tourTimeSet[0]?.id} </b>
                                        </span>
                                        <span>Khởi hành<b>{tourDetailCustomer?.tourTimeSet[0]?.startDate}</b>
                                        </span><span>Thời gian <b>{tourDetailCustomer?.tourTimeSet[0]?.startTime}</b></span>
                                        <span>Nơi khởi hành <b>{tourDetailCustomer?.starLocation}</b></span><span>Số chỗ còn nhận <b>{tourDetailCustomer?.tourTimeSet[0]?.slotNumber}</b></span>
                                    </div>
                                    </div>
                                </div>
                                <div className="entry-mb d-md-none">
                                    <div className="entry-inner">
                                        <span>Khởi hành <b>01/05/2024TP. Hồ Chí Minh</b></span>
                                        <span>Số chỗ còn nhận <b>9</b></span>
                                        <span>Số ngày <b>7 ngày</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h2 className="d-none d-lg-block">Tổng quan về chuyến đi</h2>
                            {/* <div className="customer-notice">
                                <div className="customer-notice-left">
                                    . Người lớn sinh trước ngày<b className="mx-1">18/04/2012</b><br />
                                    . Trẻ em sinh từ<b className="mx-1">19/04/2012</b>đến<b className="mx-1">18/04/2022</b>
                                </div>
                                <div className="customer-notice-right">
                                    . Em bé sinh từ<b className="mx-1">19/04/2022</b>đến<b className="mx-1">20/04/2024</b>
                                </div>
                            </div> */}
                            {/* <div className="mb-4">
                                <div className="form-check checkbox-input-search d-inline-flex align-items-center">
                                    <input className="form-check-input me-3" type="radio" name="input-list-customer" defaultValue="yes" defaultChecked />
                                    <label className="form-check-label mt-1 small">Nhập danh sách khách hàng</label>
                                </div>
                                <div className="form-check checkbox-input-search d-inline-flex align-items-center">
                                    <input className="form-check-input me-3" type="radio" id="radSupport" name="input-list-customer" defaultValue="no" />
                                    <div className="col-11">
                                        <label className="form-check-label mt-1 small">Tôi cần được nhân viên tư vấn Vietravel trợ giúp nhập thông tin đăng ký dịch vụ</label>
                                    </div>
                                </div>
                            </div> */}

                            <section className="wrap-info-customer-number-person-details mt-4 wrapper-new-input">
                                <div className="title-section mb-3 title-hotel-flight-infor">Số lượng hành khách</div>
                                <div className="group-fields-input-contact-adult group-fields-input-contact-wrapper mb-3">
                                    <div className="row">
                                        <div className="col-lg-3 col-12">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">Người lớn (trên 12 tuổi) <span className="text-danger">*</span></label>
                                                <input
                                                    type="number"
                                                    id="adult-count"
                                                    className="form-control fullName hotel-flight-input"
                                                    placeholder="Nhập số lượng"
                                                    value={adultCount === 0 ? '' : adultCount}
                                                    onChange={(e) => setAdultCount(parseInt(e.target.value) || 0)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-12">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">Trẻ em (dưới 12 tuổi) <span className="text-danger">*</span></label>
                                                <input
                                                    type="number"
                                                    id="child-count"
                                                    className="form-control fullName hotel-flight-input"
                                                    placeholder="Nhập số lượng"
                                                    value={childCount === 0 ? '' : childCount}
                                                    onChange={(e) => setChildCount(parseInt(e.target.value) || 0)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="scrollable-section">
                                    <section className="wrap-info-customer-number-person-details mt-4 wrapper-new-input">
                                        <div className="title-section mb-3 title-hotel-flight-infor">Thông tin hành khách</div>
                                        {renderAdultFields()}
                                        {renderChildFields()}
                                        <button className="btn btn-primary" onClick={createOrderTour}>Đặt Tour</button>
                                    </section>
                                </div>
                            </section>

                            <div className="customer-save">
                                <h3>Quý khách có ghi chú lưu ý gì, hãy nói với chúng tôi !</h3>
                                <div className="customer-save-inner">
                                    <p>Ghi chú thêm</p>
                                    <textarea className="form-control" cols={20} name="note" placeholder="Vui lòng nhập nội dung lời nhắn bằng tiếng Anh hoặc tiếng Việt" rows={5} defaultValue={""} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="group-checkout">
                                <h3>Tóm tắt chuyến đi</h3>
                                <div className="product">
                                    <div className="product-image"><img src={tourDetailCustomer?.coverImage} className="img-fluid" alt="image" /></div>
                                    <div className="product-content">
                                        <p className="title">{tourDetailCustomer?.title} </p>
                                    </div>
                                </div>
                                <div className="go-tour">
                                    <div className="start"><i className="fal fa-calendar-minus" />
                                        <div className="start-content">
                                            <h3>Bắt đầu chuyến đi</h3>
                                            <p className="time">{tourDetailCustomer?.tourTimeSet[0]?.startDate}</p>
                                            <p className="from" /></div>
                                    </div>
                                    <div className="end">
                                        <i className="fal fa-calendar-minus" />
                                        <div className="start-content">
                                            <h3>Kết thúc chuyến đi</h3>
                                            <p className="time">{tourDetailCustomer?.tourTimeSet[0]?.endDate}</p>
                                            <p className="from" /></div>
                                    </div>
                                </div>
                                <div className="detail">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="l1">
                                                    <i className="fal fa-users me-1" id="AmoutPerson" />Hành khách</th>
                                                <th className="l2  text-right">
                                                    <span className="total-booking">{tourDetailCustomer?.price}&nbsp;₫</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="detail">
                                                <td>Người lớn</td>
                                                <td className="t-price text-right">
                                                    {adultCount} x {tourDetailCustomer?.price}&nbsp;₫ &nbsp;=&nbsp; {adultCount * tourDetailCustomer?.price}&nbsp;₫
                                                </td>                                            </tr>
                                            <tr className="detail">
                                                <td>Người nhở</td>
                                                <td className="t-price text-right">
                                                    {childCount} x {tourDetailCustomer?.price}&nbsp;₫ &nbsp;=&nbsp; {childCount * (tourDetailCustomer?.price) / 2}&nbsp;₫
                                                </td>                                            </tr>
                                            <tr className="total">
                                                <td>Tổng tiền </td>
                                                <td className="t-price text-right">{(tourDetailCustomer?.price) + (adultCount * tourDetailCustomer?.price) + (childCount * (tourDetailCustomer?.price) / 2)}&nbsp;₫</td>

                                            </tr>
                                            <Link to="/payment">
                                                <button
                                                    onClick={handlePaymentClick}
                                                    className="btn btn-primary btn-order">Thanh Toán</button>
                                            </Link>
                                            <tr className="cuppon promotion-broder">
                                                <tr className="total">
                                                    <td>Tiền Đặt Cọc (50%) </td>
                                                    <td className="t-price text-right">{((tourDetailCustomer?.price) + (adultCount * tourDetailCustomer?.price) + (childCount * (tourDetailCustomer?.price) / 2)) / 2}&nbsp;₫</td>

                                                </tr>
                                                <Link to="/payment">
                                                    <button
                                                        onClick={handlePaymentClick}

                                                        className="btn btn-primary btn-order">Thanh Toán Đặt Cọc</button>
                                                </Link>
                                            </tr>

                                        </tbody></table>
                                    {/* <Link to="/payment">
                                        <button

                                            className="btn btn-primary btn-order">Đặt ngay</button>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default InfomationTour;
