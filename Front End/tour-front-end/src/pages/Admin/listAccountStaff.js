import React, { useEffect, useState } from "react";
import { Layout, Table, Space, Input, Switch } from "antd";

import SiderBarWebAdmin from "./SlideBar/SiderBarWebAdmin";
// import UpdateHRAccountPopup from "./UpdateUserAccountPopup/UpdateUserAccountPopup";
import NavBarWebAdmin from "./Navbar/NavBarWebAdmin";
const page = {
  pageSize: 6, // Number of items per page
};

const { Column, ColumnGroup } = Table;

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

const ListAccountStaff = () => {
  // Dummy data generation
  const generateDummyData = () => {
    const dummyData = [];
    for (let i = 0; i < 10; i++) {
      dummyData.push({
        key: i,
        firstName: `Staff ${i + 1}`,
        lastName: `LastName ${i + 1}`,
        email: `staff${i + 1}@example.com`,
        password: `password${i + 1}`,
        phoneNumber: `12345678${i}`,
        dateOfBirth: `200${i}-01-01`,
        roleString: `Role ${i + 1}`,
        statusString: i % 2 === 0 ? "Active" : "Inactive",
        userId: i + 1,
      });
    }
    return dummyData;
  };

  // Dummy data
  const dummyData = generateDummyData();

  // State for switch status
  const [switchStatusMap, setSwitchStatusMap] = useState({});

  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <SiderBarWebAdmin choose={"menu-key/2"}></SiderBarWebAdmin>
        <Layout>
          <NavBarWebAdmin></NavBarWebAdmin>

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
                MANAGE STAFF
              </h1>

              <div
                style={{
                  padding: 25,
                  minHeight: 400,
                }}
              >
                <div style={{ height: "600px", overflow: "auto" }}>
                  <Table
                    className="custom-table"
                    dataSource={dummyData}
                    pagination={page}
                    size="middle"
                    components={{
                      header: {
                        cell: (props) => (
                          <th
                            {...props}
                            style={{
                              background: "hsl(253deg 61% 85%)",
                              border: "none",
                            }}
                          />
                        ),
                      },
                    }}
                    onRow={(record, rowIndex) => {
                      return {
                        onClick: (event) => {
                          // Handle row click
                        },
                      };
                    }}
                    rowClassName={(record, index) =>
                      index % 2 === 0 ? "even-row" : "odd-row"
                    }
                  >
                    <Column
                      title="FirstName"
                      dataIndex="firstName"
                      key="firstName"
                    />
                    <Column
                      title="LastName"
                      dataIndex="lastName"
                      key="lastName"
                    />
                    <Column title="Email" dataIndex="email" key="email" />
                    <Column
                      title="password"
                      dataIndex="password"
                      key="password"
                    />
                    <Column
                      title="Phone Number"
                      dataIndex="phoneNumber"
                      key="phoneNumber"
                    />
                    <Column
                      title="Date Of Birth"
                      dataIndex="dateOfBirth"
                      key="dateOfBirth"
                    />
                    <Column
                      title="Role"
                      dataIndex="roleString"
                      key="roleString"
                    />
                    <Column
                      title="Status"
                      dataIndex="statusString"
                      key="statusString"
                      render={(text, record) => (
                        <span
                          className={
                            text === "Active"
                              ? "badge text-bg-success"
                              : text === "OnTasking"
                              ? "badge bg-warning text-light"
                              : "badge text-bg-danger"
                          }
                        >
                          {text}
                        </span>
                      )}
                    />
                    <Column
                      title="Action"
                      key="action"
                      render={(_, record) => (
                        <Space size="middle">
                          <Switch
                            checked={
                              record.statusString === "Active" &&
                              (switchStatusMap[record.userId] || true)
                            }
                            onChange={(checked, event) => {
                              event.stopPropagation();

                              setSwitchStatusMap((prevMap) => ({
                                ...prevMap,
                                [record.userId]: checked,
                              }));
                            }}
                            size="small" // Set size to "small" for iOS-like appearance
                            style={{
                              backgroundColor:
                                record.statusString === "Active"
                                  ? "#4CD964"
                                  : "#D1D1D6",
                              borderColor:
                                record.statusString === "Active"
                                  ? "#4CD964"
                                  : "#D1D1D6",
                            }}
                          />
                        </Space>
                      )}
                    />
                  </Table>
                </div>
              </div>
            </Content>
          </div>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default ListAccountStaff;
