import React, { useState, useEffect } from "react";
import { Layout, Input, Button, Select } from "antd";
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

const { Content } = Layout;
const { Option } = Select;

const ListTourBook = () => {
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

    // Calculate start and end indexes for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    // Function to handle page navigation
    const goToPage = (page) => {
        setCurrentPage(page);
    };


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
                                                                        <p className="mb-0">Số đặt lịch: {order.id}</p>
                                                                    </span>
                                                                </div>
                                                                <p className="mb-0">
                                                                    <span className="text-muted">Tour code: 233434134MDFadf </span>
                                                                </p>
                                                                <p className="card-text">
                                                                    <small className="text-muted">Hoàn Trả : {order.refund} </small>
                                                                </p>

                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={4} xs={5} className="text-end">
                                                        <h6 className="text-primary mb-2">{order.orderStatus}</h6>
                                                        <h5 className="text-primary fw-bold">{order.price}₫</h5>
                                                        <div className="destination">
                                                            <div className="text p-2">
                                                                <p className="bottom-area d-flex">
                                                                    <span className="ml-auto"><a href="/createToutStaff">Hủy Chuyến Đi</a></span>
                                                                </p>
                                                            </div>
                                                            <p className=" d-flex">
                                                                <span className="ml-auto">
                                                                    <Link
                                                                        to="/listTourBookDetail"
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
                                        {/* Additional booking cards go here */}
                                    </div>
                                </TabPane>
                            ))}


                            {/* Additional tab panes for "Chưa Thanh Toán" and "Đã Đặt" go here */}
                        </TabContent>

                        {/* Pagination */}
                        <div className="text-center mt-3">
                            <Button
                                disabled={currentPage === 1}
                                onClick={() => goToPage(currentPage - 1)}
                                style={{ marginRight: 10 }}
                            >
                                <LeftOutlined />
                            </Button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <Button
                                    key={i}
                                    onClick={() => goToPage(i + 1)}
                                    style={{ margin: "0 5px" }}
                                    type={currentPage === i + 1 ? "primary" : "default"}
                                >
                                    {i + 1}
                                </Button>
                            ))}
                            <Button
                                disabled={currentPage === totalPages}
                                onClick={() => goToPage(currentPage + 1)}
                                style={{ marginLeft: 10 }}
                            >
                                <RightOutlined />
                            </Button>
                        </div>
                    </Content>
                </div>
            </Layout >
        </Layout >
    );
};

export default ListTourBook;




