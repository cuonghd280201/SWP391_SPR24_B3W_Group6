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
    const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage state
    const [pageSize, setPageSize] = useState(6); // Initialize pageSize state
    const [totalPages, setTotalPages] = useState(pageSize); // Add state for total pages
    const [loading, setLoading] = useState(true);

    const calculatePageRange = (currentPage, totalPages) => {
        const pageRangeSize = 6;
        let startPage = Math.max(1, currentPage - Math.floor(pageRangeSize / 2));
        let endPage = startPage + pageRangeSize - 1;
        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - pageRangeSize + 1);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    };
    const pageRange = calculatePageRange(currentPage, totalPages);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
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
            <div style={{ padding: '20px 20px 20px 20px', margin: '10px 20px 20px 20px' }}>
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
                            {/* Booking item starts */}
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

                                                        <Button style={{
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
                        </TabPane>
                    ))}


                </TabContent>
                <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li>
                                                <a href="#" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                                    &lt;
                                                </a>
                                            </li>
                                            {pageRange.map((page) => (
                                                <li key={page} className={currentPage === page ? 'active' : ''}>
                                                    <a href="#" onClick={() => handlePageChange(page)}>
                                                        {page}
                                                    </a>
                                                </li>
                                            ))}
                                            <li>
                                                <a href="#" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                                                    &gt;
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
            </div>


        </main>
    );
}

export default OrderHistory;
