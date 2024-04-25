import React, { useEffect, useState } from "react";
import { Layout, Table, Space, Input, Switch } from "antd";

import SiderBarWebAdmin from "./SlideBar/SiderBarWebAdmin";
import NavBarWebAdmin from "./Navbar/NavBarWebAdmin";
import adminServices from "../../services/admin.services";

const { Column } = Table;
const { Content } = Layout;
const { Search } = Input;
const page = {
  pageSize: 5, // Number of items per page
};

const ListAccountCustomer = () => {
  const [switchStatusMap, setSwitchStatusMap] = useState({});
  const [allUser, setAllUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchAllUser();
  }, []);

  const fetchAllUser = async () => {
    const response = await adminServices.getAllUser();
    setAllUser(response.data.data);
    setFilteredUsers(response.data.data); 
  };

  const handleSearch = (value) => {
    const searchValue = value.toLowerCase().trim();

    const filtered = allUser.filter((user) =>{
      const nameMatch = user.name.toLowerCase().includes(searchValue);
      const emailMatch = user.email.toLowerCase().includes(searchValue);
      return nameMatch || emailMatch || searchValue === "";
    }
   
    );
    setFilteredUsers(filtered);
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
              QUẢN LÝ KHÁCH HÀNG
            </h1>

            <div
              style={{
                padding: 25,
                minHeight: 400,
              }}
            >
              <div style={{ height: "600px", overflow: "auto" }}>
                <Search
                  placeholder="Enter name to search"
                  allowClear
                  onSearch={handleSearch}
                  style={{ width: 200, marginBottom: 16 }}
                />
                <Table
                  className="custom-table"
                  dataSource={filteredUsers} // Render filtered users instead of all users
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
                  {/* Columns definition */}
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
                    title="Trạng thái"
                    dataIndex="enable"
                    key="enable"
                    width={"150px"}
                    render={(text, record) => (
                      <span
                        style={{
                          backgroundColor: text ? "#32CD32" : "red",
                          color: "white",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontSize: "12px",
                        }}
                      >
                        {text ? "Hoạt động" : "Inactive"}
                      </span>
                    )}
                  />

                  <Column
                    title="Vô hiệu hóa"
                    key="action"
                    render={(text, record) => (
                      <Space size="middle">
                        <Switch
                          checked={record.enable}
                          onChange={(checked, event) => {
                            event.stopPropagation();

                            // Toggle the 'enable' property of the record
                            const newRecord = {
                              ...record,
                              enable: !record.enable,
                            };

                            // Update the switch status map
                            setSwitchStatusMap((prevMap) => ({
                              ...prevMap,
                              [record.userId]: !record.enable,
                            }));

                     
                          }}
                          size="small" 
                          style={{
                            backgroundColor: record.enable ? "green" : "red", // Determine color based on the 'enable' property
                            borderColor: record.enable ? "green" : "red", // Determine border color accordingly
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
  );
};

export default ListAccountCustomer;
