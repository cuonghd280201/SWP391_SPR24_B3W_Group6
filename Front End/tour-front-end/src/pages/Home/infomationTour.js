import React from "react";

import { Link } from 'react-router-dom';

import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Input, Button } from 'reactstrap';

const InfomationTour = () => {
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
                                        <img src="https://media.travel.com.vn/Tour/tfd__230519050441_982453.jpg" className="img-fluid" alt="image" />
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="s-rate"><span>9</span>
                                        <div className="s-comment">
                                            <h4>Tuyệt vời</h4>
                                            <span>1 quan tâm</span>
                                        </div>
                                    </div>
                                    <div className="ticket-no-wrap d-md-none">
                                        <div className="ticket-no"><i className="icon icon--ticket" />NNSGN322-045-010524VN-D</div>
                                    </div>
                                    <p className="title" id="title">Siêu Sale 🔥 Trung Quốc: Thượng Hải - Hàng Châu - Vô Tích - Tô Châu - Bắc Kinh - Chinh phục Vạn Lý Trường Thành | Lễ 30/4 - Giá đã giảm 2.000.000vnđ/ khách </p>
                                    <div className="entry"><div className="entry-inner">
                                        <span>Mã Tour <b>NNSGN322-045-010524VN-D </b>
                                        </span>
                                        <span>Khởi hành<b>01/05/2024</b>
                                        </span><span>Thời gian <b>7 ngày</b></span>
                                        <span>Nơi khởi hành <b>TP. Hồ Chí Minh</b></span><span>Số chỗ còn nhận <b>9</b></span><span>Dịch vụ tùy chọn <b>Bay Vietnam Airlines  - Khách sạn 4 sao </b></span></div>
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
                            <div className="customer-notice">
                                <div className="customer-notice-left">
                                    . Người lớn sinh trước ngày<b className="mx-1">18/04/2012</b><br />
                                    . Trẻ em sinh từ<b className="mx-1">19/04/2012</b>đến<b className="mx-1">18/04/2022</b>
                                </div>
                                <div className="customer-notice-right">
                                    . Em bé sinh từ<b className="mx-1">19/04/2022</b>đến<b className="mx-1">20/04/2024</b>
                                </div>
                            </div>
                            <div className="mb-4">
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
                            </div>
                            <div className="scrollable-section">

                            <section className="wrap-info-customer-number-person-details mt-4 wrapper-new-input">
                                <div className="title-section mb-3 title-hotel-flight-infor">Thông tin hành khách</div>
                                <div className="group-fields-input-contact-adult group-fields-input-contact-wrapper mb-3">
                                    <div className="title-persona">
                                        <img src="/images/icons/persons/adult.svg" />Người lớn
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-group select-custom-icon">
                                                <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                                                <select className="form-control title title-gender hotel-flight-input" name="gender">
                                                    <option value={1}>Nam</option>
                                                    <option value={0}>Nữ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">CMND/CCCD <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">Ngày Sinh <span className="text-danger">*</span></label>
                                                <Input type="date" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                            </div>
                                        </div>
                                       
                                      
                                        
                                    </div>
                                </div>
                                <div className="group-fields-input-contact-adult group-fields-input-contact-wrapper mb-3">
                                    <div className="title-persona">
                                        <img src="/images/icons/persons/adult.svg" />Người lớn
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-group select-custom-icon">
                                                <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                                                <select className="form-control title title-gender hotel-flight-input" name="gender">
                                                    <option value={1}>Nam</option>
                                                    <option value={0}>Nữ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">CMND/CCCD <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">Ngày Sinh <span className="text-danger">*</span></label>
                                                <Input type="date" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                            </div>
                                        </div>                     
                                    </div>
                                </div>
                                <div className="group-fields-input-contact-adult group-fields-input-contact-wrapper mb-3">
                                    <div className="title-persona">
                                        <img src="/images/icons/persons/adult.svg" />Người lớn
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-group select-custom-icon">
                                                <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                                                <select className="form-control title title-gender hotel-flight-input" name="gender">
                                                    <option value={1}>Nam</option>
                                                    <option value={0}>Nữ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">CMND/CCCD <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">Ngày Sinh <span className="text-danger">*</span></label>
                                                <Input type="date" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                            </div>
                                        </div>                     
                                    </div>
                                </div>
                                <div className="group-fields-input-contact-adult group-fields-input-contact-wrapper mb-3">
                                    <div className="title-persona">
                                        <img src="/images/icons/persons/adult.svg" />Người lớn
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-group select-custom-icon">
                                                <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                                                <select className="form-control title title-gender hotel-flight-input" name="gender">
                                                    <option value={1}>Nam</option>
                                                    <option value={0}>Nữ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">CMND/CCCD <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="pb-1 font-700">Ngày Sinh <span className="text-danger">*</span></label>
                                                <Input type="date" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                            </div>
                                        </div>                     
                                    </div>
                                </div>
                            </section>
                            </div>
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
                                <span>Dịch vụ tùy chọn <b>Bay Vietnam Airlines, khách sạn 4 sao</b>
                                </span><p className="package-title">Tour trọn gói
                                    <span> (6 khách)</span></p><div className="product">
                                    <div className="product-image"><img src="https://media.travel.com.vn/Tour/tfd__230515102210_853167.jpg" className="img-fluid" alt="image" /></div>
                                    <div className="product-content">
                                        <p className="title">Thái Lan: Pattaya - Bangkok (Bảo tàng Lighting Art &amp; Vườn khinh khí cầu, Tham quan Safari World, Đền Chân Lý Pattaya &amp; Thưởng thức buffet Baiyoke Sky) | Lễ Té nước</p>
                                    </div>
                                </div>
                                <div className="go-tour">
                                    <div className="start"><i className="fal fa-calendar-minus" />
                                        <div className="start-content">
                                            <h4>Bắt đầu chuyến đi</h4>
                                            <p className="time">T3, 16 THÁNG 4 NĂM 2024</p>
                                            <p className="from" /></div>
                                    </div>
                                    <div className="end">
                                        <i className="fal fa-calendar-minus" />
                                        <div className="start-content">
                                            <h4>Kết thúc chuyến đi</h4>
                                            <p className="time">T7, 20 THÁNG 4 NĂM 2024</p>
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
                                                    <span className="total-booking">9.990.000&nbsp;₫</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="detail">
                                                <td>Người lớn</td>
                                                <td className="t-price text-right">1 x 9.990.000&nbsp;₫</td>
                                            </tr>
                                            <tr className="detail">
                                                <td>Người nhở</td>
                                                <td className="t-price text-right">1 x 5.990.000&nbsp;₫</td>
                                            </tr>
                                            <tr className="total">
                                                <td>Tổng tiền </td>
                                                <td className="t-price text-right">9.990.000&nbsp;₫</td>
                                            </tr>
                                            <tr className="cuppon promotion-broder">
                                            <tr className="total">
                                                <td>Tiền Đặt Cọc (50%) </td>
                                                <td className="t-price text-right">5.990.000&nbsp;₫</td>
                                            </tr>
                                            </tr>
                                            
                                        </tbody></table>
                                        <Link to="/payment">
                                        <button className="btn btn-primary btn-order">Đặt ngay</button>
                                        </Link>
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
