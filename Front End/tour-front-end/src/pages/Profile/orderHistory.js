import React, { useEffect, useState } from "react";
import { Modal } from 'antd';
import {
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Input,
    Button,
    Card,
    CardHeader,
    CardBody,
} from "reactstrap";
import "../Profile/profile.css";
import orderServices from "../../services/order.services";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cancelServices from "../../services/cancel.services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons';


const OrderHistory = () => {
    const [dummyData, setDummyData] = useState([
        {
            id: 1,
            status: "",
            title: "Hello",
            code: "",
            desscription: "",
        },
        {
            id: 2,
            title: "Tour 2",
            date: "2024-04-18",
            price: "3.000.000",
        },
        {
            id: 3,
            title: "Tour 3",
            date: "2024-04-14",
            price: "4.000.000",
        },
        {
            id: 4,
            title: "Tour 4",
            date: "2024-04-16",
            price: "3.600.000",
        },
        {
            id: 5,
            title: "Tour 4",
            date: "2024-04-11",
            price: "4.200.000",
        },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalItems = dummyData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const goToPage = (page) => {
        setCurrentPage(page);
    };


    //Get ALL ORDER 
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetchTourData();
    }, []);


    const fetchTourData = async () => {
        try {
            const response = await orderServices.getAllOrder();
            console.log("Response:", response);
            setOrders(response.data.data);

        } catch (error) {
            console.error("Error fetching tours:", error);
            setError(error);
        }
    };
    // Huy don hang

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [orderIdToDelete, setOrderIdToDelete] = useState(null);

    const showDeleteModal = (id) => {
        setOrderIdToDelete(id);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        handleCancleOrder(orderIdToDelete);
        setIsModalVisible(false);
        setOrderIdToDelete(null);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setOrderIdToDelete(null);
    };

    const handleCancleOrder = async (orderId) => {
        try {
            const response = await cancelServices.customerCancel(orderId);

            if (response.status === 200) {
                toast.success("Cancel Order successfully!");

            } else {
                toast.success("Cancel Order successfully!");

            }
        } catch (error) {
            console.error("Error cancel fail:", error);
            toast.error("An error occurred while cancel the order.");
        }
    };


    return (
        <main role="main">
            <section className="ftco-section ftco-counter img" style={{ backgroundImage: 'url(images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="10">
                            {/* Your content here */}
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="profile">
                <Container>
                    <Row className="py-4">
                        <Col md="3" className="left">
                            <div className="wrapper p-4">
                                <div className="info d-flex align-items-center mb-md-3">
                                    <div className="image me-3">
                                        <a aria-current="page" className="active" href="/profile/info">
                                            <img className="rounded-circle" src="placeholder.jpg" alt="" /> {/* Placeholder image */}
                                        </a>
                                    </div>
                                    <div className="info-wrapper">
                                        <div>
                                            <h5 className="fw-bold">Funny Cường</h5>
                                            <small>hoangduycuong2802@gmail.com</small>
                                        </div>
                                        <span id="toggle-profile-menu" className="d-lg-none">
                                            <i className="icon icon--chevron-down" />
                                        </span>
                                    </div>
                                </div>
                                <Nav className="profile-links py-3 d-block">
                                    <NavItem>
                                        <NavLink aria-expanded="false" aria-current="page" className="d-inline-flex align-items-center rounded collapsed active" href="/profile/info">
                                            <h6 className="fw-bold">Tài khoản</h6>
                                        </NavLink>
                                        <div id="getting-started-collapse" className="collapse show">
                                            <ul className="list-unstyled fw-normal pb-1 small">
                                                <li>
                                                    <NavLink aria-current="page" className="d-inline-flex align-items-center rounded active" href="/profile/info">Thông tin cá nhân</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink className="d-inline-flex align-items-center rounded" href="/profile/change-password">Đổi mật khẩu</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink className="d-inline-flex align-items-center rounded" href="/profile/sign-out">Đăng xuất</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="d-inline-flex align-items-center rounded" href="/profile/orders">
                                            <h6 className="fw-bold">Đơn đặt chỗ</h6>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </Col>

                        <Col md={7} className="right ps-md-4">
                            <div className="wrapper order" style={{ background: 'rgb(255, 255, 255)', borderRadius: 10, boxSizing: 'border-box', border: 'none' }}>
                                <Nav tabs className="flex-sm-row mb-3" style={{ marginTop: 0, listStyle: 'none', display: 'flex', flexFlow: 'wrap', paddingLeft: 0, background: 'rgb(255, 255, 255)', border: '0.5px solid rgb(213, 213, 213)', borderRadius: 10, marginBottom: '1rem', paddingTop: '1rem', paddingBottom: '1rem', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal' }}>
                                    <NavItem className="flex-sm-fill text-sm-center">
                                        <NavLink href="#" active>Tất cả</NavLink>
                                    </NavItem>
                                    <NavItem className="flex-sm-fill text-sm-center">
                                        <NavLink href="#">Chưa Thanh Toán</NavLink>
                                    </NavItem>
                                    <NavItem className="flex-sm-fill text-sm-center">
                                        <NavLink href="#">Đã Đặt</NavLink>
                                    </NavItem>
                                </Nav>
                                <div className="form-search mb-4">
                                    <Row className="align-items-center">
                                        <Col md="8">
                                            <Input type="text" placeholder="Tìm kiếm theo tên tour/ tourCode hoặc số booking" aria-label="default input example" />
                                        </Col>
                                        <Col md="2">
                                            <Button color="primary">Tìm kiếm</Button>
                                        </Col>
                                    </Row>
                                </div>
                                <TabContent id="pills-tabContent">
                                    {orders.map(order => (

                                        <TabPane id="pills-all" active role="tabpanel">
                                            <div id="accordion">
                                                {/* Booking item starts */}
                                                <Card>
                                                    <CardHeader id="headingOne">
                                                        {/* <Row className="align-items-center">
                                                        <Button color="link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Đặt ngày 01/12/2022
                                                            <div className="status">
                                                                <span className="badge badge-warning">Quá Hạn Thanh Toán</span>
                                                            </div>
                                                        </Button>
                                                    </Row> */}
                                                    </CardHeader>
                                                    <CardBody style={{ position: 'relative', display: 'flex', flexDirection: 'column', minWidth: 0, overflowWrap: 'break-word', background: 'rgb(255, 255, 255)', border: '0.5px solid rgb(213, 213, 213)', borderRadius: 10, boxSizing: 'border-box', marginBottom: '1rem', padding: '1rem' }}>
                                                        <Row className="align-items-center">
                                                            <Col md={8} xs={7}>
                                                                <div className="d-flex d-lg-block justify-content-between">
                                                                    <div>
                                                                        <div className="s-rate">
                                                                            <span className="s-comment">
                                                                                <h6 className="fw-bold mb-0"></h6>
                                                                                <p className="mb-0">Số đặt lịch:<b> {order.id}</b></p>
                                                                                <p className="mb-0">Tên Chuyến Đi:<b> {order.tourInfoDTO.title}</b></p>

                                                                            </span>
                                                                        </div>

                                                                        <p className="mb-0">
                                                                            <span>Tiền Trả:<b> {order.paid.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</b> </span>
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            <span>Số tiền thanh còn lại:<b> {order.priceAfterPaid.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</b> </span>
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            <small>Số tiền đã thanh toán :<b> {order.amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</b> </small>
                                                                        </p>

                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col md={4} xs={5} className="text-end">
                                                                <span
                                                                    className={
                                                                        order.orderStatus === "NOT_DONE"
                                                                            ? "badge bg-info text-dark"
                                                                            : order.orderStatus === "DONE"
                                                                                ? "badge bg-success"
                                                                                : order.orderStatus === "WAITING_CANCEL"
                                                                                    ? "badge bg-warning text-dark"
                                                                                    : order.orderStatus === "CANCEL"
                                                                                        ? "badge bg-danger"
                                                                                        : ""
                                                                    }
                                                                >
                                                                    {order.orderStatus === "NOT_DONE"
                                                                        ? "CHƯA HOÀN TẤT"
                                                                        : order.orderStatus === "DONE"
                                                                            ? "HOÀN TẤT"
                                                                            : order.orderStatus === "WAITING_CANCEL"
                                                                                ? "CHỜ HUỶ"
                                                                                : order.orderStatus === "CANCEL"
                                                                                    ? "HUỶ BỎ"
                                                                                    : ""}
                                                                </span>

                                                                <h5 className="text-primary fw-bold">{order.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
                                                                <div className="destination">
                                                                    <div className="text p-2">
                                                                        <p className="bottom-area d-flex">
                                                                            <span className="ml-auto">

                                                                                <Button  style={{
                                                                                        fontSize: "15px",
                                                                                        color: "red",
                                                                                        textDecoration: "none",
                                                                                        padding: "8px 16px",
                                                                                        border: "1px solid red",
                                                                                        borderRadius: "4px",
                                                                                        transition:
                                                                                            "background-color 0.3s, color 0.3s",
                                                                                        display: "flex",
                                                                                        alignItems: "center",
                                                                                    }}
                                                                                    onMouseEnter={(e) => {
                                                                                        e.target.style.backgroundColor =
                                                                                            "red";
                                                                                        e.target.style.color = "#fff";
                                                                                    }}
                                                                                    onMouseLeave={(e) => {
                                                                                        e.target.style.backgroundColor =
                                                                                            "transparent";
                                                                                        e.target.style.color = "blueviolet";
                                                                                    }} onClick={() => showDeleteModal(order.id)}>
                                                                                    Hủy
                                                                                </Button>
                                                                            </span>

                                                                            <Modal
                                                                                title="Xác nhận xóa"
                                                                                visible={isModalVisible}
                                                                                onOk={handleOk}
                                                                                onCancel={handleCancel}
                                                                                okText="Có"
                                                                                cancelText="Không"
                                                                            >
                                                                                <p>Bạn có chắc chắn muốn gửi yêu cầu hủy đơn hàng này không?</p>
                                                                            </Modal>
                                                                        </p>
                                                                    </div>
                                                                    <p className=" d-flex">
                                                                        <span className="ml-auto">
                                                                            <Link
                                                                                to="/orderBookTouDetail"
                                                                                className="text-dark"
                                                                                state={{ orderId: order.id }}
                                                                            >

                                                                                <a
                                                                                    style={{
                                                                                        fontSize: "15px",
                                                                                        color: "blueviolet",
                                                                                        textDecoration: "none",
                                                                                        padding: "8px 16px",
                                                                                        border: "1px solid blueviolet",
                                                                                        borderRadius: "4px",
                                                                                        transition:
                                                                                            "background-color 0.3s, color 0.3s",
                                                                                        display: "flex",
                                                                                        alignItems: "center",
                                                                                    }}
                                                                                    onMouseEnter={(e) => {
                                                                                        e.target.style.backgroundColor =
                                                                                            "blueviolet";
                                                                                        e.target.style.color = "#fff";
                                                                                    }}
                                                                                    onMouseLeave={(e) => {
                                                                                        e.target.style.backgroundColor =
                                                                                            "transparent";
                                                                                        e.target.style.color = "blueviolet";
                                                                                    }}
                                                                                >
                                                                                    Xem chi tiết
                                                                                </a>
                                                                            </Link>
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        </TabPane>
                                    ))}


                                </TabContent>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </main>
    );
}

export default OrderHistory;
