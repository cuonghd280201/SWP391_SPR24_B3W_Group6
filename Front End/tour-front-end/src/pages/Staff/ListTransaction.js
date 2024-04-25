import React, { useState, useEffect } from "react";
import { Layout, Table, Space, Input, Switch } from "antd";

import paymentServices from "../../services/payment.services";
import SiderBarWebAdmin from "../Admin/SlideBar/SiderBarWebAdmin";
import NavBarWebAdmin from "../Admin/Navbar/NavBarWebAdmin";

const { Column } = Table;
const { Content } = Layout;
const { Search } = Input;

const ListTransaction = () => {
  const [payments, setPayments] = useState([]);
  const [switchStatusMap, setSwitchStatusMap] = useState({});
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [filteredPayments, setFilteredPayments] = useState([]);

  useEffect(() => {
    fetchPaymentData();
  }, [currentPage, pageSize]);

  const fetchPaymentData = async (
    sortBy = "createDate",
    sortOrder = "desc"
  ) => {
    try {
      const response = await paymentServices.getAllTransaction(
        currentPage - 1,
        pageSize,
        sortBy,
        sortOrder
      );
      console.log("Response:", response);
      setPayments(response.data.data);
      setFilteredPayments(response.data.data);
    } catch (error) {
      console.error("Error fetching payments:", error);
      setError(error);
    }
  };

  const page = {
    pageSize: 5, // Number of items per page
  };

  const handleSearch = (value) => {
    //convert the value to lowercase and trim any leading or trailing whitespace.
    const searchValue = value.toLowerCase().trim();
  
    const filtered = payments.filter((payment) => {
      const idMatch = payment.id.toString().toLowerCase().includes(searchValue);
      const amountMatch = payment.amount.toString().includes(searchValue);
      return idMatch || amountMatch || searchValue === "";
    });
  
    // Set the filtered payments
    setFilteredPayments(filtered);
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
              BÁO CÁO GIAO DỊCH
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
                  dataSource={filteredPayments}
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
                  <Column title="Mã đơn hàng" dataIndex="id" key="id" />
                  <Column
                    title="Mail"
                    dataIndex={["userDTO", "email"]}
                    key="email"
                  />
                  <Column title="Tổng tiền" dataIndex="amount" key="amount" />
                  <Column
                    title="Mô tả"
                    dataIndex="description"
                    key="description"
                  />
                  <Column
                    title="Tình trạng giao dịch"
                    dataIndex="transactionStatus"
                    key="transactionStatus"
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

export default ListTransaction;
