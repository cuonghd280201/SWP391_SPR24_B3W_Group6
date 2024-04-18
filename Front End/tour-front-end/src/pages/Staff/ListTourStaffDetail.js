import React, { useEffect, useState } from "react";

import "../Admin/dashboard.css";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import NavBarWebStaff from "./Navbar/NavBarWebStaff";
import SiderBarWebStaff from "./SlideBar/SiderBarWebStaff";
const { Content } = Layout;

const ListTourStaffDetail = () => {
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
          <div className="ecommerce-widget">
            <div className="row row-with-margin">
              <div className="col-xl-12 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="destination">
                      <div className="text p-3">
                        <div className="row">
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
                                NDSGN1371-002-130424VU-H
                              </span>
                            </h4>
                            <p style={{ fontSize: 14, marginBottom: 5 }}>
                              13/04/2024
                            </p>
                            <p
                              className="text-primary"
                              style={{ fontSize: 14, marginBottom: 5 }}
                            >
                              Giờ đi: 18:50
                            </p>
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                  <Link to="/listTourStaff" style={{ textDecoration: "none" }}>
                    <button
                      style={{
                        backgroundColor: "#ff4d4f",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        padding: "10px 20px",
                        marginLeft: "10px",
                        fontSize: "16px",
                        cursor: "pointer",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        transition: "background-color 0.3s",
                      }}
                    >
                      Trở về
                    </button>
                  </Link>
                </div>
              </div>
            </div>
      </Layout>
    </Layout>
  );
};

export default ListTourStaffDetail;
