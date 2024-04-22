import React, { useState, useEffect } from "react";
import { Layout, Input, Button, Select } from "antd";
import { Row, Col } from "reactstrap";
import {
  LeftOutlined,
  RightOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons"; // Import arrow icons
import { Link } from "react-router-dom";

import NavBarWebStaff from "./Navbar/NavBarWebStaff";
import SiderBarWebStaff from "./SlideBar/SiderBarWebStaff";
import tourServices from "../../services/tour.services";

const { Content } = Layout;
const { Option } = Select;

const ListTourStaff = () => {
  const [tours, setTours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageSize, setPageSize] = useState(6); // Initialize pageSize state
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 4; 
  
  useEffect(() => {
    fetchTourData();
  }, [currentPage, pageSize]);

  const fetchTourData = async (sortBy = "title", sortOrder = "desc") => {
    try {
      const response = await tourServices.getAllTourAndPaging(
        currentPage - 1,
        pageSize,
        sortBy,
        sortOrder
      );
      console.log("Response:", response); 

      setTours(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tours:", error);
      setError(error);
      setLoading(false);
    }
  };


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
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                <div className="page-header">
                  <h2 className="pageheader-title">Danh Sách Chuyến Đi </h2>
                </div>
              </div>
            </div>

            {/* Filter by price */}
            <div className="d-flex justify-content-between mb-4">
              <Select
                defaultValue="Tìm kiếm theo"
                style={{ width: 250, height: 40 }}
              >
                <Option value="asc">Giá: Thấp đến cao</Option>
                <Option value="desc">Giá: Cao đến thấp</Option>
                <Option value="date">Ngày:sớm nhất đến trễ nhất</Option>
                <Option value="date2">Ngày:trễ nhất đến sớm nhất</Option>
              </Select>

              <span style={{ display: "inline-block" }}>
                <a
                  href="/createToutStaff"
                  style={{
                    fontSize: "15px",
                    color: "#5cb85c",
                    textDecoration: "none",
                    padding: "8px 16px",
                    border: "1px solid #5cb85c",
                    borderRadius: "4px",
                    transition: "background-color 0.3s, color 0.3s",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#4cae4c";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#5cb85c";
                  }}
                >
                  <PlusCircleOutlined style={{ marginRight: "5px" }} />
                  Tạo chuyến đi mới
                </a>
              </span>
            </div>

            {/* Display tours for the current page */}
            {tours.map((tour) => (
              <div key={tour.id} className="row row-with-margin">
                <div className="col-xl-12 col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="card border-5 border-top border-success-subtle">
                    <div className="card-body-dashboard">
                      <div className="destination">
                        {tours.map((tour) => (
                          <div className="text p-3">
                            <div className="row">
                              {/* Tour details */}
                              <div className="col-4">
                                <Link
                                  to="/listTourStaffDetail"
                                  className="text-dark"
                                  state={{ tourId: tour.id }} // Pass tourId as state data
                                >
                                  <a
                                    href=""
                                    className="img img-2 d-flex justify-content-center align-items-center"
                                    style={{
                                      backgroundImage: `url(${tour.coverImage})`,
                                    }}
                                  >
                                    <div className="icon d-flex justify-content-center align-items-center">
                                      <span className="icon-link" />
                                    </div>
                                  </a>
                                </Link>
                              </div>
                              <div className="col-4">
                                <h4 style={{ fontSize: 16, marginTop: 10 }}>
                                  Mã Chuyến Đi:{" "}
                                  <span style={{ color: "#666" }}>
                                    {tours.id}
                                  </span>
                                </h4>
                                <p style={{ fontSize: 14, marginBottom: 5 }}>
                                  <span style={{ color: "#666" }}>
                                    Tên Chuyến Đi: {tour.title}
                                  </span>
                                </p>
                                <p
                                  className="text-primary"
                                  style={{ fontSize: 14, marginBottom: 5 }}
                                >
                                  Nơi Khởi Hành: {tour.starLocation}
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
                                  {tour.price} VNĐ
                                </p>
                                <p className=" d-flex">
                                  <span className="ml-auto">
                                    <a
                                      href="/listTourStaffDetail"
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
                                  </span>
                                </p>
                              </div>
                            </div>
                            <hr />
                          </div>
                        ))}
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
