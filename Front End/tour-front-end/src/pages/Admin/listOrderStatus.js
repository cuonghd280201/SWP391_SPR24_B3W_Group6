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
  const [sortOrderMap, setSortOrderMap] = useState({ DONE: "asc", NOT_DONE: "asc", WAITING_CANCEL: "asc", CANCEL: "asc" });

  useEffect(() => {
    fetchOrderStatusData();
  }, [orderStatus, sortOrderMap[orderStatus]]);

  const fetchOrderStatusData = async () => {
    try {
      const response = await adminServices.getOrderStatus(
        orderStatus,
        sortOrderMap[orderStatus] // Use the sorting order for the current status
      );
      setOrderStatusData(response.data.data);
    } catch (error) {
      console.error("Error fetching order status data:", error);
    }
  };

  const handleOrderStatusChange = (value) => {
    setOrderStatus(value); // Update selected order status
  };

  const handleSortOrderChange = (value) => {
    const newSortOrderMap = { ...sortOrderMap, [orderStatus]: value };
    setSortOrderMap(newSortOrderMap); // Update sorting order map for the current status
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "DONE":
        return "#32CD32"; // Example color for "DONE" status
      case "NOT_DONE":
        return "red"; // Example color for "NOT_DONE" status
      case "WAITING_CANCEL":
        return "#FEBE10"; // Example color for "WAITING_CANCEL" status
      case "CANCEL":
        return "gray"; // Example color for "CANCEL" status
      default:
        return "black"; // Default color
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar and Navbar components */}
      <SiderBarWebAdmin choose={"menu-key/4"}></SiderBarWebAdmin>
      <Layout>
        <NavBarWebAdmin></NavBarWebAdmin>
        <Content
          style={{ margin: "20px", padding: "20px", backgroundColor: "#fff" }}
        >
          {/* Title and Select component */}
          <h1
            style={{
              padding: "0px 0px 0px 0px",
              margin: "0px 0px 30px 5px",
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
            Danh sách trạng thái đơn hàng
          </h1>
          <Select
            defaultValue="DONE"
            onChange={handleOrderStatusChange}
            style={{ marginLeft: "400px", width: "200px" }}
          >
            <Option value="DONE">ĐÃ HOÀN THÀNH</Option>
            <Option value="NOT_DONE">CHƯA HOÀN THÀNH</Option>
            <Option value="WAITING_CANCEL">CHỜ HỦY</Option>
            <Option value="CANCEL">HỦY</Option>
          </Select>
          {/* Table component */}
          <Table
            dataSource={orderStatusData}
            pagination={page}
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
            onChange={(pagination, filters, sorter) => handleSortOrderChange(sorter.order)}
          >
            <Column title="Mã đơn hàng" dataIndex="code" key="code" />
            <Column
              title="Giá"
              dataIndex="price"
              key="price"
              render={(text) => (
                <span style={{ padding: "8px 16px" }}>
                  {(text / 1).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              )}
            />
            <Column
              title="Đã thanh toán"
              dataIndex="paid"
              key="paid"
              render={(text) => (
                <span style={{ padding: "8px 16px" }}>
                  {(text / 1).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              )}
            />
            <Column
              title="Giá sau khi thanh toán"
              dataIndex="priceAfterPaid"
              key="priceAfterPaid"
              render={(text) => (
                <span style={{ padding: "8px 16px" }}>
                  {(text / 1).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              )}
            />
            <Column
              title="Tổng tiền thanh toán"
              dataIndex="amount"
              key="amount"
              sorter={(a, b) => a.amount - b.amount} // Enable sorting by total payment amount
              sortOrder={sortOrderMap[orderStatus]} // Use the sorting order for the current status
            />
            <Column
              title="Tiền hoàn trả"
              dataIndex="refund"
              key="refund"
              render={(text) => (
                <span style={{ padding: "8px 16px" }}>
                  {(text / 1).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              )}
            />
            <Column
              title="Trạng thái đơn hàng"
              dataIndex="orderStatus"
              key="orderStatus"
              render={(text) => (
                <span
                  style={{
                    backgroundColor: getStatusColor(text), // Function to determine background color
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                >
                  {text}
                </span>
              )}
            />
          </Table>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ListOrderStatus;
