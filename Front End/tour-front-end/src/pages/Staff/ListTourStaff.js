import React, { useState } from "react";
import { Layout, Input, Button, Select } from "antd";
import { Row, Col } from "reactstrap";
import {
  LeftOutlined,
  RightOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons"; // Import arrow icons

import NavBarWebStaff from "./Navbar/NavBarWebStaff";
import SiderBarWebStaff from "./SlideBar/SiderBarWebStaff";

const { Content } = Layout;
const { Option } = Select;

const ListTourStaff = () => {
  // Dummy data
  const [dummyData, setDummyData] = useState([
    {
      id: 1,
      title: "Tour 1",
      date: "2024-04-12",
      price: "2.000.000",
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

  // Function to handle sorting by price
  const handleSortByPrice = (value) => {
    let sortedData = [...dummyData]; // Create a copy of the dummyData array

    if (value === "asc") {
      // Sort data by price in ascending order
      sortedData.sort(
        (a, b) =>
          parseFloat(a.price.replace(/\D/g, "")) -
          parseFloat(b.price.replace(/\D/g, ""))
      );
    } else if (value === "desc") {
      // Sort data by price in descending order
      sortedData.sort(
        (a, b) =>
          parseFloat(b.price.replace(/\D/g, "")) -
          parseFloat(a.price.replace(/\D/g, ""))
      );
    } else if (value === "date") {
      // Sort data by date
      sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
    }else if (value === "date2") {
        // Sort data by date
        sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
      }

    // Update the state with the sorted data
    setDummyData(sortedData);
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
                onChange={handleSortByPrice}
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
