import React, { useEffect, useState } from "react";
import { Layout, Table, Space, Input, Switch } from "antd";

import SiderBarWebAdmin from "./SlideBar/SiderBarWebAdmin";
// import UpdateHRAccountPopup from "./UpdateUserAccountPopup/UpdateUserAccountPopup";
import NavBarWebAdmin from "./Navbar/NavBarWebAdmin";
import adminServices from "../../services/admin.services";
const page = {
  pageSize: 5, // Number of items per page
};

const { Column } = Table;

const { Content } = Layout;
const { Search } = Input;

const ListAccountStaff = () => {
  // State for switch status
  const [switchStatusMap, setSwitchStatusMap] = useState({});
  const [allStaff, setAllStaff] = useState();

  useEffect(() => {
    fetchAllUser();
  }, []);

  const fetchAllUser = async () => {
    const response = await adminServices.getAllStaff();
    setAllStaff(response.data.data);
  };

  return (
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
              QUẢN LÝ NHÂN VIÊN
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
                  dataSource={allStaff}
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
                >
                  <Column title="ID" dataIndex="id" key="id" />
                  <Column title="Tên" dataIndex="name" key="name" />
                  <Column title="Số điện thoại" dataIndex="phone" key="phone" />
                  <Column title="Email" dataIndex="email" key="email" />
                  <Column
                    title="Ngày sinh"
                    dataIndex="dateOfBirth"
                    key="dateOfBirth"
                  />
                  <Column title="Giới tính" dataIndex="gender" key="gender" />
                  <Column title="Vai trò" dataIndex="role" key="role" />
                  <Column
                    title="Avatar"
                    dataIndex="image"
                    key="image"
                    render={(img) => (
                      <img
                        src={img}
                        style={{ width: 45, height: 45, borderRadius: 5 }}
                      />
                    )}
                  />
                  {/* <Column
                      title="Trạng thái"
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
                      title="Vô hiệu hóa"
                      key="action"
                      render={(_, record) => (
                        <Space size="middle">
                      
                          <Switch
                            checked={record.statusString === 'Active' && (switchStatusMap[record.userId] || true)}
                            onChange={(checked, event) => {
                              event.stopPropagation();

                              setSwitchStatusMap((prevMap) => ({ ...prevMap, [record.userId]: checked }));
                            }}

                            size="small" // Set size to "small" for iOS-like appearance
                            style={{ backgroundColor: record.statusString === 'Active' ? '#4CD964' : '#D1D1D6', borderColor: record.statusString === 'Active' ? '#4CD964' : '#D1D1D6' }}
                          />
                        </Space>
                      )}
                    /> */}
                </Table>
              </div>
            </div>
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};

export default ListAccountStaff;
