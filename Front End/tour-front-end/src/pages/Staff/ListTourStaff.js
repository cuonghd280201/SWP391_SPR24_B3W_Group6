import React, { useState } from "react";
import { Layout, Input, Button } from "antd";
import { Row, Col } from "reactstrap";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"; // Import arrow icons

import NavBarWebStaff from "./Navbar/NavBarWebStaff";
import SiderBarWebStaff from "./SlideBar/SiderBarWebStaff";

const { Content } = Layout;

const ListTourStaff = () => {
  // Dummy data
  const dummyData = [
    {
      id: 1,
      title: "Tour 1",
      date: "12-04-2024"
    },
    {
      id: 2,
      title: "Tour 2",
      date: "13-04-2024"
    },
    {
      id: 3,
      title: "Tour 3",
      date: "14-04-2024"
    },
    {
      id: 4,
      title: "Tour 4",
      date: "15-04-2024"
    },
    {
      id: 5,
      title: "Tour 4",
      date: "16-04-2024"
    },
  ];

  // State for pagination
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
    <Layout style={{ minHeight: "100vh" }}>
      <SiderBarWebStaff choose={"menu-key/1"} />
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
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="page-header">
                  <h2 className="pageheader-title">Danh Sách Chuyến Đi </h2>
                </div>
                <div className="form-search mb-4">
                  <Row className="align-items-center">
                    <Col md="8">
                      <Input
                        type="text"
                        placeholder="Tìm kiếm theo tên chuyến đi/ mã chuyến đi hoặc giá"
                        aria-label="default input example"
                      />
                    </Col>
                    <Col md="4">
                      <Button color="btn-primary">Tìm kiếm</Button>
                    </Col>
                  </Row>
                </div>
                <div className="destination">
                  <div className="text p-2">
                    <p className="bottom-area d-flex">
                      <span className="ml-auto">
                        <a href="/createToutStaff">Tạo Chuyến Đi</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Display tours for the current page */}
            {dummyData.slice(startIndex, endIndex).map((tour) => (
              <div key={tour.id} className="row row-with-margin">
                <div className="col-xl-12 col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="card border-5 border-top border-success-subtle">
                    <div className="card-body-dashboard">
                      <div className="destination">
                        <div className="text p-3">
                          <div className="row">
                            {/* Tour details */}
                            <div className="col-4">
                              <img
                                src="https://media.travel.com.vn/Tour/tfd__230515102210_853167.jpg"
                                className="img-fluid rounded"
                                alt="Tour Image"
                                style={{
                                  width: "100%",
                                  height: 200,
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                            <div className="col-4">
                              <h4 style={{ fontSize: 16, marginTop: 10 }}>
                                Mã Chuyến Đi:{" "}
                                <span style={{ color: "#666" }}>
                                  {tour.title}
                                </span>
                              </h4>
                              <p style={{ fontSize: 14, marginBottom: 5 }}>
                                <span style={{ color: "#666" }}>
                                  {tour.date}
                                </span>
                              </p>
                              <p
                                className="text-primary"
                                style={{ fontSize: 14, marginBottom: 5 }}
                              >
                                Giờ đi: 18:50
                              </p>
                            </div>
                            <div className="col-4">
                              <p
                                className="text-right"
                                style={{
                                  fontSize: 18,
                                  color: "#ff5722",
                                  marginBottom: 5,
                                }}
                              >
                                7.450.000<small>/Chuyến Đi</small>
                              </p>
                              <p className="bottom-area d-flex">
                                <span className="ml-auto">
                                  <a href="/listTourStaffDetail">
                                    Xem chi tiết
                                  </a>
                                </span>
                              </p>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

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
      </Layout>
    </Layout>
  );
};

export default ListTourStaff;
