import React, { useEffect, useState } from "react";
import { Layout, Table, Select } from "antd";
import NavBarWebAdmin from "./Navbar/NavBarWebAdmin";
import SiderBarWebAdmin from "./SlideBar/SiderBarWebAdmin";
import adminServices from "../../services/admin.services";

const { Content } = Layout;
const { Column } = Table;
const { Option } = Select;
const page = {
  pageSize: 5, // Number of items per page
};

const ListOrderStatus = () => {
  const [orderStatus, setOrderStatus] = useState("DONE"); // State to store selected order status
  const [orderStatusData, setOrderStatusData] = useState([]);

  useEffect(() => {
    const fetchOrderStatusData = async () => {
      try {
        const response = await adminServices.getOrderStatus(orderStatus);
        // Assuming the response.data contains the order data
        setOrderStatusData(response.data.data);
      } catch (error) {
        console.error("Error fetching order status data:", error);
      }
    };
    fetchOrderStatusData();
  }, [orderStatus]);

  const handleOrderStatusChange = (value) => {
    setOrderStatus(value); // Update selected order status
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderBarWebAdmin choose={"menu-key/4"}></SiderBarWebAdmin>
      <Layout>
        <NavBarWebAdmin></NavBarWebAdmin>
        <Content
          style={{ margin: "20px", padding: "20px", backgroundColor: "#fff" }}
        >
          <h1>Danh sách trạng thái đơn hàng</h1>
          <Select
            defaultValue="DONE"
            onChange={handleOrderStatusChange}
            style={{ width: "200px" }}
          >
            <Option value="DONE">ĐÃ HOÀN THÀNH</Option>
            <Option value="NOT_DONE">CHƯA HOÀN THÀNH</Option>
            <Option value="WAITING_CANCEL">CHỜ HỦY</Option>
            <Option value="CANCEL">HỦY</Option>
          </Select>
          <Table dataSource={orderStatusData} pagination={page}>
            <Column title="Mã đơn hàng" dataIndex="id" key="id" />
            <Column title="Giá" dataIndex="price" key="price" />
            <Column title="Đã thanh toán" dataIndex="paid" key="paid" />
            <Column
              title="Giá sau khi thanh toán"
              dataIndex="priceAfterPaid"
              key="priceAfterPaid"
            />
            <Column title="Tổng tiền thanh toán" dataIndex="amount" key="amount" />
            <Column title="Tiền hoàn trả" dataIndex="refund" key="refund" />

            <Column
              title="Trạng thái đơn hàng"
              dataIndex="orderStatus"
              key="orderStatus"
            />
            {/* Add more columns as needed */}
          </Table>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ListOrderStatus;
