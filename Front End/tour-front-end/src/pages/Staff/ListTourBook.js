import React, { useEffect, useState } from "react";

import '../Admin/dashboard.css'
import { Table, Space, Modal, Button, Form, message, Input, Select, Layout, Badge, Switch, Breadcrumb } from 'antd';
import { Row, Col, TabPane, Card, CardHeader, CardBody } from 'reactstrap';


import NavBarWebStaff from "./Navbar/NavBarWebStaff";
import SiderBarWebStaff from "./SlideBar/SiderBarWebStaff";
import Footer from "../../layout/CommonLayout/Footer";
const { Content } = Layout;


const ListTourBook = () => {
    return (

        <Layout style={{ minHeight: "100vh" }}>
            <SiderBarWebStaff choose={"menu-key/2"}></SiderBarWebStaff>
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
                                            <TabPane id="pills-all" active role="tabpanel">
                                                <div id="accordion">
                                                    <Card>

                                                        <CardBody >
                                                            <Row className="align-items-center">
                                                                <Col md={8} xs={7}>
                                                                    <div className="d-flex d-lg-block justify-content-between">
                                                                        <div>
                                                                            <Button color="link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                                Booking ngày 01/12/2022

                                                                            </Button>
                                                                            <div className="s-rate">
                                                                                <span className="s-comment">
                                                                                    <h6 className="fw-bold mb-0"></h6>
                                                                                    <p className="mb-0">Du Lich Hạ Long</p>
                                                                                </span>
                                                                            </div>
                                                                            <p className="mb-0">
                                                                                <span className="text-muted">Số booking: 210607080237</span><br />
                                                                                <span className="text-muted">Tour code: NDSGN1371-002-130424VU-H </span>
                                                                            </p>
                                                                            <p className="card-text">
                                                                                <small className="text-muted">1 người</small>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                <Col md={4} xs={5} className="text-end">
                                                                    <div className="status">
                                                                        <span className="badge badge-warning">Chưa Thanh Toán</span>
                                                                    </div>                                                                    <h5 className="text-primary fw-bold">₫</h5>
                                                                    <div className="destination">
                                                                        <div className="text p-2">
                                                                            <p className="bottom-area d-flex">
                                                                                <span className="ml-auto"><a href="/createToutStaff">Hủy Chuyến Đi</a></span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </CardBody>
                                                    </Card>
                                                    {/* Additional booking cards go here */}
                                                </div>
                                            </TabPane>



                                        </div>
                                    </div>
                                </div>
                                <h1></h1>
                                <div className="col-xl-12 col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="card border-5 border-top border-success-subtle">
                                        <div className="card-body-dashboard">
                                            <TabPane id="pills-all" active role="tabpanel">
                                                <div id="accordion">
                                                    <Card>

                                                        <CardBody >
                                                            <Row className="align-items-center">
                                                                <Col md={8} xs={7}>
                                                                    <div className="d-flex d-lg-block justify-content-between">
                                                                        <div>
                                                                            <Button color="link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                                Booking ngày 01/12/2022

                                                                            </Button>
                                                                            <div className="s-rate">
                                                                                <span className="s-comment">
                                                                                    <h6 className="fw-bold mb-0"></h6>
                                                                                    <p className="mb-0">Du Lich Hạ Long</p>
                                                                                </span>
                                                                            </div>
                                                                            <p className="mb-0">
                                                                                <span className="text-muted">Số booking:  210607080237</span><br />
                                                                                <span className="text-muted">Tour code:  NDSGN1371-002-130424VU-H </span>
                                                                            </p>
                                                                            <p className="card-text">
                                                                                <small className="text-muted">1 người, 0 đêm</small>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                <Col md={4} xs={5} className="text-end">
                                                                    <div className="status">
                                                                        <span className="badge badge-warning">Chưa Thanh Toán</span>
                                                                    </div>
                                                                    <h5 className="text-primary fw-bold">₫</h5>
                                                                    <div className="destination">
                                                                        <div className="text p-2">
                                                                            <p className="bottom-area d-flex">
                                                                                <span className="ml-auto"><a href="/createToutStaff">Hủy Chuyến Đi</a></span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </CardBody>
                                                    </Card>
                                                    {/* Additional booking cards go here */}
                                                </div>
                                            </TabPane>
                                        </div>
                                    </div>
                                </div>
                                <h1></h1>

                                <div className="col-xl-12 col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="card border-5 border-top border-success-subtle">
                                        <div className="card-body-dashboard">
                                            <TabPane id="pills-all" active role="tabpanel">
                                                <div id="accordion">
                                                    <Card>
                                                        <CardBody >
                                                            <Row className="align-items-center">
                                                                <Col md={8} xs={7}>
                                                                    <div className="d-flex d-lg-block justify-content-between">
                                                                        <div>
                                                                            <Button color="link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                                Booking ngày 01/12/2022

                                                                            </Button>
                                                                            <div className="s-rate">
                                                                                <span className="s-comment">
                                                                                    <h6 className="fw-bold mb-0"></h6>
                                                                                    <p className="mb-0">Du Lich Hạ Long</p>
                                                                                </span>
                                                                            </div>
                                                                            <p className="mb-0">
                                                                                <span className="text-muted">Số booking: 210607080237</span><br />
                                                                                <span className="text-muted">Tour code: NDSGN1371-002-130424VU-H </span>
                                                                            </p>
                                                                            <p className="card-text">
                                                                                <small className="text-muted">1 người, 0 đêm</small>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                <Col md={4} xs={5} className="text-end">
                                                                    <div className="status">
                                                                        <span className="badge badge-warning">Chưa Thanh Toán</span>
                                                                    </div>
                                                                    <h5 className="text-primary fw-bold">₫</h5>
                                                                    <div className="destination">
                                                                        <div className="text p-2">
                                                                            <p className="bottom-area d-flex">
                                                                                <span className="ml-auto"><a href="/createToutStaff">Hủy Chuyến Đi</a></span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </CardBody>
                                                    </Card>
                                                    {/* Additional booking cards go here */}
                                                </div>
                                            </TabPane>
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

export default ListTourBook