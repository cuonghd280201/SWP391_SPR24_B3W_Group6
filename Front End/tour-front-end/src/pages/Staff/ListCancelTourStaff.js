import React, { useState, useEffect } from "react";
import { Layout, Input, Button, Select, Modal } from "antd";
import {
    LeftOutlined,
    RightOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons"; // Import arrow icons
import { Link } from "react-router-dom";

import NavBarWebStaff from "./Navbar/NavBarWebStaff";
import SiderBarWebStaff from "./SlideBar/SiderBarWebStaff";
import {
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Card,
    CardHeader,
    CardBody,
} from "reactstrap";
import "../Profile/profile.css";
import orderServices from "../../services/order.services";
import cancelServices from "../../services/cancel.services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons';


const { Content } = Layout;
const { Option } = Select;

const ListCancelTourStaff = () => {
    const [orderStatus, setOrderStatus] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchOrderStatusData();
    }, []);


    const fetchOrderStatusData = async () => {
        try {
            const response = await cancelServices.getStaffOrderStatus();
            console.log("Response:", response);
            setOrderStatus(response.data);

        } catch (error) {
            console.error("Error fetching orders:", error);
            setError(error);
        }
    };

    // Staff chấp nhận cancel

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
            const response = await cancelServices.staffCancelOrder(orderId);

            if (response.status === 200) {
                toast.success("Staff Cancel Order successfully!");
                fetchOrderStatusData();

            } else {
                toast.success("Staff Cancel Order successfully!");
                fetchOrderStatusData();
            }
        } catch (error) {
            console.error("Error cancel fail:", error);
            toast.error("An error occurred while cancel the order.");
        }
    };




    return (
        <Layout style={{ minHeight: "100vh" }}>
            <SiderBarWebStaff choose={"menu-key/2"} />
            <Layout>
                <NavBarWebStaff />
                <div
                    style={{
                        padding: "30px",
                        background: "white",
                        margin: "30px",
                        borderRadius: "12px",
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                >
                    <Content>
                        <TabContent id="pills-tabContent">
                            {orderStatus?.map(orderS => (
                                <TabPane id="pills-all" active role="tabpanel">
                                    <div id="accordion">
                                        <Card>
                                            <CardHeader id="headingOne">

                                            </CardHeader>
                                            <CardBody style={{ position: 'relative', display: 'flex', flexDirection: 'column', minWidth: 0, overflowWrap: 'break-word', background: 'rgb(255, 255, 255)', border: '0.5px solid rgb(213, 213, 213)', borderRadius: 10, boxSizing: 'border-box', marginBottom: '1rem', padding: '1rem' }}>
                                                <Row className="align-items-center">
                                                    <Col md={8} xs={7}>
                                                        <div className="d-flex d-lg-block justify-content-between">
                                                            <div>
                                                                <div className="s-rate">
                                                                    <span className="s-comment">
                                                                        <h6 className="fw-bold mb-0"></h6>
                                                                        <p className="mb-0">Mã Đơn Hủy: <b>{orderS.id}</b>   </p>
                                                                    </span>
                                                                </div>
                                                                <p className="mb-0">
                                                                    <span className="text-muted">Tên Chuyến Đi: <b>{orderS.tourDTO.title}</b>  </span>
                                                                </p>
                                                                <p className="mb-0">
                                                                    <span className="text-muted">Giá Chuyến Đi: <b>{orderS.tourDTO.price}</b>  </span>
                                                                </p>
                                                                <p className="mb-0">
                                                                    <span className="text-muted">Tên Khách Hàng: <b>{orderS.userDTO.name}</b>  </span>
                                                                </p>
                                                                <p className="mb-0">
                                                                    <span className="text-muted">Số Điện Thoại : <b>{orderS.userDTO.phone}</b> </span>
                                                                </p>
                                                                <p className="mb-0">
                                                                    <span className="text-muted">Ngày yêu cầu hoàn trả: <b>{orderS.createDate}</b>  </span>
                                                                </p>

                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={4} xs={5} className="text-end">
                                                        <h6 className="text-primary mb-2"><span
                                                            className={
                                                                orderS.orderStatus === "NOT_DONE"
                                                                    ? "badge bg-info text-dark"
                                                                    : orderS.orderStatus === "DONE"
                                                                        ? "badge bg-success"
                                                                        : orderS.orderStatus === "WAITING_CANCEL"
                                                                            ? "badge bg-warning text-dark"
                                                                            : orderS.orderStatus === "CANCEL"
                                                                                ? "badge bg-danger"
                                                                                : ""
                                                            }
                                                        >
                                                            {orderS.orderStatus === "NOT_DONE"
                                                                ? "CHƯA HOÀN TẤT"
                                                                : orderS.orderStatus === "DONE"
                                                                    ? "HOÀN TẤT"
                                                                    : orderS.orderStatus === "WAITING_CANCEL"
                                                                        ? "CHỜ HUỶ"
                                                                        : orderS.orderStatus === "CANCEL"
                                                                            ? "HUỶ BỎ"
                                                                            : ""}
                                                        </span>
                                                        </h6>
                                                        <h5 className="text-primary fw-bold">Số tiền hoàn trả: {orderS.refund}₫</h5>
                                                        <div className="destination">
                                                            <div className="text p-2">
                                                                <p className="bottom-area d-flex">
                                                                    <span className="ml-auto">
                                                                        <Button onClick={() => showDeleteModal(orderS.id)}>
                                                                            Chấp Nhận
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
                                                                        <p>Bạn có chắc chắn muốn chấp nhận yêu cầu hủy đơn hàng này không?</p>
                                                                    </Modal>                                                                </p>
                                                            </div>

                                                        </div>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                        {/* Additional booking cards go here */}
                                    </div>
                                </TabPane>
                            ))}


                            {/* Additional tab panes for "Chưa Thanh Toán" and "Đã Đặt" go here */}
                        </TabContent>


                    </Content>
                </div>
            </Layout >
        </Layout >
    );
};

export default ListCancelTourStaff;




