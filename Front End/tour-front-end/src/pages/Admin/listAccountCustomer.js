import React, { useEffect, useState } from "react";
import {
  Layout,
  Button,
  Table,
  Divider,
  Tag,
  Space,
  Avatar,
  Badge,
  Input,
  Breadcrumb,
  Modal,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Col,
  Row,
  message,
  notification,
  Menu,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  LeftOutlined,
  RightOutlined,
  HomeOutlined,
  SnippetsOutlined,
  SolutionOutlined,
  CodeOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { FaSpider, FaUserAltSlash } from "react-icons/fa";
import {
  faClock,
  faPenToSquare,
  faTrashCan,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { toast } from 'react-toastify';

import SiderBarWebAdmin from "./SlideBar/SiderBarWebAdmin";
// import UpdateHRAccountPopup from "./UpdateUserAccountPopup/UpdateUserAccountPopup";
import NavBarWebAdmin from "./Navbar/NavBarWebAdmin";
const page = {
  pageSize: 6, // Number of items per page
};

const { Column, ColumnGroup } = Table;

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

const ListAccountCustomer = () => {
  //--------------------------------------------------------------------------------------------------------

  const [visibleModal1, setVisibleModal1] = useState(false);
  const [visibleModal2, setVisibleModal2] = useState(false);
  const [visibleModal3, setVisibleModal3] = useState(false);
  const [visibleModal4, setVisibleModal4] = useState(false);

  const showModal1 = () => {
    setVisibleModal1(true);
  };

  const [userIdAccountManage, setManagerIdAccount] = useState(null);

  const showModal2 = (userId) => {
    setManagerIdAccount(userId);
    setVisibleModal2(true);
  };

  const closedModal2 = () => {
    setVisibleModal2(false);
  };
  const showModal3 = () => {
    setVisibleModal3(true);
  };
  const showModal4 = () => {
    setVisibleModal4(true);
  };
  const handleOk = () => {
    setVisibleModal1(false);
    setVisibleModal2(false);
    setVisibleModal3(false);
    setVisibleModal4(false);
  };

  const handleCancel = () => {
    setVisibleModal1(false);
    setVisibleModal2(false);
    setVisibleModal3(false);
    setVisibleModal4(false);
  };

 

  //----------------------------------------------------------------
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                MANAGE CUSTOMER
              </h1>

              <a
                className="me-1 d-flex flex-column align-items-end"
                onClick={showModal1}
              >
                <FontAwesomeIcon size="2xl" icon={faPlusSquare} />
              </a>
              <div
                style={{
                  padding: 25,
                  minHeight: 400,
                }}
              >
                <div style={{ height: "600px", overflow: "auto" }}>
                  <Table
                    className="custom-table"
                    dataSource={""}
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
                    {/* <Column
                      title="Image"
                      dataIndex="userImage"
                      key="userImage"
                      render={(text, record) => (
                        <img
                          src={record.userImage}
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      )}
                    /> */}
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
                          
                            <FontAwesomeIcon
                              style={{ color: "#6d73f6" }}
                              size="xl"
                              icon={faPenToSquare}
                            />
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

export default ListAccountCustomer;
