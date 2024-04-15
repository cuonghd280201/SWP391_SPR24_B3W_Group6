import React, { useEffect, useState } from "react";

import '../Admin/dashboard.css'
import { Table, Space, Modal, Button, Form, message, Input, Select, Layout, Badge, Switch, Breadcrumb } from 'antd';


import NavBarWebStaff from "./Navbar/NavBarWebStaff";
import SiderBarWebStaff from "./SlideBar/SiderBarWebStaff";
import Footer from "../../layout/CommonLayout/Footer";
const { Content } = Layout;


const ListTourStaff = () => {
    return (

        <Layout style={{ minHeight: "100vh" }}>
            <SiderBarWebStaff choose={"menu-key/1"}></SiderBarWebStaff>
            <Layout>
                <NavBarWebStaff></NavBarWebStaff>
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
                                <div className="col-xl-12 col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="card border-5 border-top border-success-subtle">
                                        <div className="card-body-dashboard">
                                            <div className="col-sm col-md-12 col-lg-4 ftco-animate">
                                                <div className="destination">
                                                    <div className="text p-3">
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <img src="https://media.travel.com.vn/Tour/tfd__230515102210_853167.jpg" className="img-fluid rounded" alt="Tour Image" style={{ width: '100%', height: 200, objectFit: 'cover' }} />

                                                            </div>
                                                            <div className="col-4">
                                                                <p style={{ fontSize: 14, marginBottom: 5 }}>13/04/2024</p>
                                                                <p className="text-primary" style={{ fontSize: 14, marginBottom: 5 }}>Giờ đi: 18:50</p>
                                                            </div>
                                                            <div className="col-4">
                                                                <p className="text-right" style={{ fontSize: 18, color: '#ff5722', marginBottom: 5 }}>7.450.000<small>/tour</small></p>
                                                                <h4 style={{ fontSize: 16, marginTop: 10 }}>Mã Tour: <span style={{ color: '#666' }}>NDSGN1371-002-130424VU-H</span></h4>

                                                            </div>
                                                        </div>

                                                        <hr />
                                                        <p className="bottom-area d-flex">
                                                            <span className="ml-auto"><a href="#">Xem chi tiết</a></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div className="card border-5 border-top border-warning-subtle">
                                        <div className="card-body-dashboard">
                                            <h5 className="text-muted">Total User</h5>
                                            <div className="metric-value d-inline-block">
                                                <h2>1</h2>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div className="card border-5 border-top border-primary-subtle">
                                        <div className="card-body-dashboard">
                                            <h5 className="text-muted">Total Money</h5>
                                            <div className="metric-value d-inline-block">
                                                <h2>1</h2>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">

                            </div>


                        </div>

                    </Content>
                </div>
            </Layout >
        </Layout >

    )
}

export default ListTourStaff