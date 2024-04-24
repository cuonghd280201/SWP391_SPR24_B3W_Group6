import React, { useState, useEffect } from "react";
import { Layout, Input, Table, Select, Badge } from "antd";

import { Link, useLocation, useNavigate } from 'react-router-dom';


import paymentServices from "../../services/payment.services";

import orderServices from "../../services/order.services";
import SiderBarWebStaff from "./SlideBar/SiderBarWebStaff";
import NavBarWebStaff from "./Navbar/NavBarWebStaff";
const { Header, Footer, Sider, Content } = Layout;

const { Column } = Table;
const { Option } = Select;
const page = {
    pageSize: 5, // Number of items per page
};

const ListVisitorTourByTour = () => {

    const { state } = useLocation();
    const [visitors, setVisitors] =
        useState(null);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage state
    const [pageSize, setPageSize] = useState(6); // Initialize pageSize state
    const [totalPages, setTotalPages] = useState(1); // Add state for total pages

    const fetchTourDetailCustomer = async () => {
        let response;
        try {
            const response = await orderServices.getAllTourVisitor(state.tourTimeId);
            console.log("Response:", response); // Log the response object
            setVisitors(response.data.data);

            return response;

        } catch (error) {
            console.error("Error fetching tour:", error);
        }
    }

    useEffect(() => {
        fetchTourDetailCustomer();
    }, [currentPage, pageSize]);


    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };


    return (
        <React.Fragment>
            <Layout style={{ minHeight: "100vh" }}>
                <SiderBarWebStaff choose={"menu-key/5"}></SiderBarWebStaff>
                <Layout>
                    <NavBarWebStaff></NavBarWebStaff>

                    <div
                        style={{
                            padding: "10px 5px 0px 5px",
                            background: "white",
                            margin: "30px",
                            borderRadius: "12px",
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        }}
                    >
                        <Content>

                            <div
                                style={{
                                    padding: 25,
                                    minHeight: 400,
                                }}
                            >

                                <h1
                                    style={{
                                        padding: "5px 0px 0px 0px",
                                        margin: "0px 0px 0px 20px",
                                        color: "#4a4a4a",
                                        fontSize: "24px",
                                        fontWeight: "bold",
                                        fontFamily: "Arial, sans-serif",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                        borderBottom: "4px solid #6546D2",
                                        display: "inline-block",
                                    }}
                                >
                                    Danh Sách Những Người Tham Gia
                                </h1>

                                <Table dataSource={visitors?.tourVisitorDTOList} pagination={page}>
                                    <Column title="Tên" dataIndex="name" key="id" />
                                    <Column title="Số Điện Thoại" dataIndex="phone" key="phone" />
                                    <Column title="Thẻ căn cước" dataIndex="idCard" key="idCard" />

                                    <Column title="Ngày sinh" dataIndex="dateOfBirth" key="dateOfBirth" />
                                    <Column
                                        title="Loại Khách Hàng"
                                        dataIndex="tourVisitorType"
                                        key="tourVisitorType"
                                        render={(value) => {
                                            if (value === 'ADULT') {
                                              return <Badge color="green" text="Người lớn" />;
                                            } else if (value === 'BABY') {
                                              return <Badge color="yellow" text="Trẻ em" />;
                                            } else {
                                              return <span>{value}</span>; 
                                            }
                                          }}
                                    />
                                    <Column
                                        title="Địa chỉ e-mail"
                                        dataIndex="userEmail"
                                        key="userEmail"
                                    />
                                    {/* Add more columns as needed */}
                                </Table>


                                <h1 style={{
                                    padding: "5px 0px 0px 0px",
                                    margin: "0px 0px 0px 20px",
                                    color: "#4a4a4a",
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                    fontFamily: "Arial, sans-serif",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    borderBottom: "4px solid #6546D2",
                                    display: "inline-block",
                                }}>Danh Sách Người Đã Hủy Chuyến Đi</h1>

                                <Table dataSource={visitors?.tourVisitorDTOCancelList} pagination={page}>
                                    <Column title="Tên" dataIndex="name" key="id" />
                                    <Column title="Số Điện Thoại" dataIndex="phone" key="phone" />
                                    <Column title="Thẻ căn cước" dataIndex="idCard" key="idCard" />

                                    <Column title="Ngày sinh" dataIndex="dateOfBirth" key="dateOfBirth" />
                                    <Column
                                        title="Loại Khách Hàng"
                                        dataIndex="tourVisitorType"
                                        key="tourVisitorType"
                                        render={(value) => {
                                            if (value === 'ADULT') {
                                              return <Badge color="green" text="Người lớn" />;
                                            } else if (value === 'BABY') {
                                              return <Badge color="yellow" text="Trẻ em" />;
                                            } else {
                                              return <span>{value}</span>; 
                                            }
                                          }}
                                    />
                                    <Column
                                        title="Địa chỉ e-mail"
                                        dataIndex="userEmail"
                                        key="userEmail"
                                    />
                                    {/* Add more columns as needed */}
                                </Table>


                            </div>
                        </Content>
                    </div>
                </Layout>
            </Layout>
        </React.Fragment>
    );
};

export default ListVisitorTourByTour;
