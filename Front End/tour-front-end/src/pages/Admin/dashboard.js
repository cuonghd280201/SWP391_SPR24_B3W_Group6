import React, { useEffect, useState } from "react";

import '../Admin/dashboard.css'
import { Layout } from 'antd';


import NavBarWebAdmin from "./Navbar/NavBarWebAdmin";
import SiderBarWebAdmin from "./SlideBar/SiderBarWebAdmin";
import adminServices from "../../services/admin.services";
const { Content } = Layout;


const Dashboard = () => {
    const [orderSumary, setOrderSumary] = useState(); // Initialize users as an object
    const [roleNumber, setRoleNumber] = useState(); //

    useEffect(() => {
        fetchOrderSumary();
        fetchRoleNumber();
    }, []);

    const fetchOrderSumary = async () => {
        const response = await adminServices.getOrderSumary();
        setOrderSumary(response.data.data);
    }

    const fetchRoleNumber = async () => {
        const response = await adminServices.getRoleNumber();
        setRoleNumber(response.data.data);
    }
    return (

        <Layout style={{ minHeight: "100vh" }}>
            <SiderBarWebAdmin choose={"menu-key/1"}></SiderBarWebAdmin>
            <Layout>
                <NavBarWebAdmin></NavBarWebAdmin>
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

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header">
                                    <h2 className="pageheader-title">Dashboard </h2>
                                </div>
                            </div>
                        </div>
                        <div className="ecommerce-widget">
                            <div className="row row-with-margin">
                                <div className="col-xl-3 ">
                                    <div className="card border-5 border-top border-info-subtle">
                                        <div className="card-body-dashboard">
                                            <h5 className="text-muted">Tổng tiền</h5>
                                            <div className="metric-value d-inline-block">
                                                <h2>{orderSumary?.completedCount}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="card border-5 border-top border-success-subtle">
                                        <div className="card-body-dashboard">
                                            <h5 className="text-muted">Tổng số tiền hoàn trả</h5>
                                            <div className="metric-value d-inline-block">
                                            <h2>{orderSumary?.refundedCount}</h2>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="card border-5 border-top border-warning-subtle">
                                        <div className="card-body-dashboard">
                                            <h5 className="text-muted">Số lượng khách hàng</h5>
                                            <div className="metric-value d-inline-block">
                                                <h2>{roleNumber?.countUser}</h2>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="card border-5 border-top border-primary-subtle">
                                        <div className="card-body-dashboard">
                                            <h5 className="text-muted">Số lượng nhân viên</h5>
                                            <div className="metric-value d-inline-block">
                                            <h2>{roleNumber?.countStaff}</h2>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Content>
                </div>
            </Layout >
        </Layout >

    )
}

export default Dashboard