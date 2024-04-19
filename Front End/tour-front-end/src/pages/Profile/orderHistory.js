import { React, useState } from "react";
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

  // Calculate start and end indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Function to handle page navigation
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <main role="main">
      <section
        className="ftco-section ftco-counter img"
        style={{ backgroundImage: "url(images/bg_1.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <Container>
          <Row className="justify-content-center">
            <Col md="9"></Col>
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
                    <a
                      aria-current="page"
                      className="active"
                      href="/profile/info"
                    >
                      <img
                        className="rounded-circle"
                        src="placeholder.jpg"
                        alt=""
                      />{" "}
                      {/* Placeholder image */}
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
                    <div
                      id="getting-started-collapse"
                      className="collapse show"
                    >
                      <ul className="list-unstyled fw-normal pb-1 small">
                        <li>
                          <NavLink
                            aria-current="page"
                            className="d-inline-flex align-items-center rounded active"
                            href="/profile/info"
                          >
                            Thông tin cá nhân
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="d-inline-flex align-items-center rounded"
                            href="/profile/change-password"
                          >
                            Đổi mật khẩu
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="d-inline-flex align-items-center rounded"
                            href="/profile/sign-out"
                          >
                            Đăng xuất
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </NavItem>

                  {/* <NavItem>
                    <NavLink
                      className="d-inline-flex align-items-center rounded"
                      href="/profile/orders"
                    >
                      <h6 className="fw-bold">Đơn đặt chỗ</h6>
                    </NavLink>
                  </NavItem> */}
                </Nav>
              </div>
            </Col>

            <Col md={7} className="right ps-md-4">
              <div
                className="wrapper order"
                style={{
                  background: "rgb(255, 255, 255)",
                  borderRadius: 10,
                  boxSizing: "border-box",
                  border: "none",
                }}
              >
                <Nav
                  tabs
                  className="flex-sm-row mb-3"
                  style={{
                    marginTop: 0,
                    listStyle: "none",
                    display: "flex",
                    flexFlow: "wrap",
                    paddingLeft: 0,
                    background: "rgb(255, 255, 255)",
                    border: "0.5px solid rgb(213, 213, 213)",
                    borderRadius: 10,
                    marginBottom: "1rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    WebkitBoxOrient: "horizontal",
                    WebkitBoxDirection: "normal",
                  }}
                >
                  <NavItem className="flex-sm-fill text-sm-center">
                    <NavLink href="#">Tất cả</NavLink>
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
                      <Input
                        type="text"
                        placeholder="Tìm kiếm theo tên tour/ tourCode hoặc số booking"
                        aria-label="default input example"
                      />
                    </Col>
                    <Col md="2">
                      <Button color="primary">Tìm kiếm</Button>
                    </Col>
                  </Row>
                </div>
                <TabContent id="pills-tabContent">
                  <TabPane id="pills-all" active role="tabpanel">
                    <div id="accordion">
                      {/* Booking item starts */}
                      <Card>
                        <CardHeader id="headingOne">
                          <Row className="align-items-center">
                            <Button
                              color="link"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Đặt ngày 01/12/2022
                              <div className="status">
                                <span className="badge badge-warning">
                                  Quá Hạn Thanh Toán
                                </span>
                              </div>
                            </Button>
                          </Row>
                        </CardHeader>
                        <CardBody
                          style={{
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 0,
                            overflowWrap: "break-word",
                            background: "rgb(255, 255, 255)",
                            border: "0.5px solid rgb(213, 213, 213)",
                            borderRadius: 10,
                            boxSizing: "border-box",
                            marginBottom: "1rem",
                            padding: "1rem",
                          }}
                        >
                          <Row className="align-items-center">
                            <Col md={8} xs={7}>
                            {dummyData.slice(startIndex,endIndex).map((history) => (
                                <div key={history.id} className="d-flex d-lg-block justify-content-between">
                                <div>
                                  <div className="s-rate">
                                    <span className="s-comment">
                                      <h6 className="fw-bold mb-0"></h6>
                                      <p className="mb-0">{history.title}</p>
                                    </span>
                                  </div>
                                  <p className="mb-0">
                                    <span className="text-muted">
                                      Số đặt lịch: 210607080237
                                    </span>
                                    <br />
                                    <span className="text-muted">
                                      Tour code: 233434134MDFadf{" "}
                                    </span>
                                  </p>
                                  <p className="card-text">
                                    <small className="text-muted">
                                      1 người, 0 đêm
                                    </small>
                                  </p>
                                </div>
                              </div>
                            ))}

                            </Col>
                            <Col md={4} xs={5} className="text-end">
                              <h6 className="text-primary mb-2">
                                Quá Hạn thanh toán
                              </h6>
                              <h5 className="text-primary fw-bold">₫</h5>
                              <div className="destination">
                                <div className="text p-2">
                                  <p className="bottom-area d-flex">
                                    <span className="ml-auto">
                                      <a href="/createToutStaff">
                                        Hủy Chuyến Đi
                                      </a>
                                    </span>
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

                  <TabPane id="pills-all" active role="tabpanel">
                    <div id="accordion">
                      {/* Booking item starts */}
                      <Card>
                        <CardHeader id="headingOne">
                          <Row className="align-items-center">
                            <Button
                              color="link"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Đặt ngày 01/12/2024
                              <div className="status">
                                <span className="badge badge-warning">
                                  Chưa Thanh Toán
                                </span>
                              </div>
                            </Button>
                          </Row>
                        </CardHeader>
                        <CardBody
                          style={{
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 0,
                            overflowWrap: "break-word",
                            background: "rgb(255, 255, 255)",
                            border: "0.5px solid rgb(213, 213, 213)",
                            borderRadius: 10,
                            boxSizing: "border-box",
                            marginBottom: "1rem",
                            padding: "1rem",
                          }}
                        >
                          <Row className="align-items-center">
                            <Col md={8} xs={7}>
                              <div className="d-flex d-lg-block justify-content-between">
                                <div>
                                  <div className="s-rate">
                                    <span className="s-comment">
                                      <h6 className="fw-bold mb-0"></h6>
                                      <p className="mb-0">Du Lich Hạ Long</p>
                                    </span>
                                  </div>
                                  <p className="mb-0">
                                    <span className="text-muted">
                                      Số đặt lịch: 210607080237
                                    </span>
                                    <br />
                                    <span className="text-muted">
                                      Tour code: 233434134MDFadf{" "}
                                    </span>
                                  </p>
                                  <p className="card-text">
                                    <small className="text-muted">
                                      1 người, 0 đêm
                                    </small>
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col md={4} xs={5} className="text-end">
                              <h6 className="text-primary mb-2">
                                Chờ thanh toán
                              </h6>
                              <h5 className="text-primary fw-bold">₫</h5>
                              <div className="destination">
                                <div className="text p-2">
                                  <p className="bottom-area d-flex">
                                    <span className="ml-auto">
                                      <a href="/createToutStaff">
                                        Hủy Chuyến Đi
                                      </a>
                                    </span>
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
                  {/* Additional tab panes for "Chưa Thanh Toán" and "Đã Đặt" go here */}
                </TabContent>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default OrderHistory;
