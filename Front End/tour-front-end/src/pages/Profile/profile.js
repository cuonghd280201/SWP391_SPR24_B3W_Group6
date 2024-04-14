import React from "react";
import { Container, Row, Col, Nav, NavItem, NavLink, Label, FormGroup, TabPane, Input, Button, Card, CardHeader, CardBody } from 'reactstrap';
import '../Profile/profile.css';

const ProfileInfo = () => {
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

                        {/* Right Content */}
                        <Col md="7" className="right ps-md-4">
                            <div className="wrapper p-md-4">
                                <div className="heading">
                                    <h5 className="fw-bold">Thông tin cá nhân</h5>
                                    <p className="text-muted mb-4">Cập nhật thông tin của Quý khách và tìm hiểu các thông tin này được sử dụng ra sao.</p>
                                </div>
                                <div className="row section-01">
                                    <div className="col-md-12 col-12 setting-wrap">
                                        <FormGroup row>
                                            <Label for="fullname" md={3} className="col-form-label">Họ và Tên</Label>
                                            <Col md={9}>
                                                <Input className="form-control" id="fullname" name="fullname" placeholder="Nhập họ và tên" type="text" defaultValue="Funny Cường" />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label for="fullname" md={3} className="col-form-label">Địa chỉ</Label>
                                            <Col md={9}>
                                                <Input className="form-control" id="fullname" name="fullname" placeholder="Nhập họ và tên" type="text" defaultValue="Thu Duc City" />
                                            </Col>
                                        </FormGroup>


                                        <FormGroup row>
                                            <Label for="fullname" md={3} className="col-form-label">Số Điện Thoại</Label>
                                            <Col md={9}>
                                                <Input className="form-control" id="fullname" name="fullname" placeholder="Nhập họ và tên" type="text" defaultValue="0913214124" />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label for="birthdate" md={3} className="col-form-label">Ngày Sinh</Label>
                                            <Col md={9}>
                                                <Input type="date" className="form-control" id="birthdate" name="birthdate" />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label for="gender" md={3} className="col-form-label">Giới Tính</Label>
                                            <Col md={9}>
                                                <Input type="select" className="form-control" id="gender" name="gender">
                                                    <option>Nam</option>
                                                    <option>Nữ</option>
                                                    <option>Khác</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <Button className="fw-bold text-underline toggle-edit-form">Chỉnh sửa</Button>


                                        {/* More Settings */}

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </main>
    );
}

export default ProfileInfo;
