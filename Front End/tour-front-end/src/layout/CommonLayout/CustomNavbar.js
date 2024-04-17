import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container } from 'reactstrap';
import withRouter from '../../components/withRouter';
import { UserAuth } from "../../utils/AuthContext";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    Label,
    Col,
    Row,
} from "reactstrap";
import { Link } from "react-router-dom";



const CustomNavbar = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [name, setName] = useState("");
    const [imgUser, setImgUser] = useState("");
    const [status, setStatus] = useState("");
    const [roleString, setRoleString] = useState("");

    //-------------------------------------------------------------------------
    const userId = localStorage.getItem("userId");
    //-------------------------------------------------------------------------
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    //------------------------------------------------------------------------
    const [showPopupProfileUser, setShowPopupProfileUser] = useState(false);

    const openPopupProfileUser = () => {
        setShowPopupProfileUser(true);
    };

    const closePopupProfileUser = () => {
        setShowPopupProfileUser(false);
    };

    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <React.Fragment >

            <Navbar className="navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" expand="lg">
                <Container>
                    <NavbarBrand href="/">DU LỊCH</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/" className="nav-link">Trang Chủ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/home" className="nav-link">Về Chúng Tôi</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact" className="nav-link">Liên Lạc</NavLink>
                            </NavItem>
                            <NavItem>
                                {user?.displayName ? (
                                    <div>
                                        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                            <DropdownToggle
                                                className="p-1 d-flex gap-3 align-items-center"
                                                style={{
                                                    height: "60px",
                                                    color: "white",

                                                    cursor: "pointer",
                                                    border: "0px",
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        src={imgUser}
                                                        className="ms-1 px-0"
                                                        style={{
                                                            borderRadius: "7px",
                                                            height: "50px",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                </div>
                                                <div className="me-1 d-flex flex-column align-items-center">
                                                    <p>Welcome, {user?.displayName}</p>
                                                    {/* <span>{roleString}</span> */}
                                                </div>
                                            </DropdownToggle>
                                            <DropdownMenu
                                                style={{
                                                    marginLeft: "-25px",
                                                }}
                                            >
                                                <DropdownItem style={{ padding: "0px" }}>
                                                    <div>
                                                        {/* onClick={openPopupProfileUser} */}
                                                        <Link
                                                            to={"/profileInfo"}
                                                            className="dropdown-item px-0 p-0"
                                                        >
                                                            <div className="dropdown-item">Thông Tin Cá Nhân</div>
                                                        </Link>
                                                    </div>
                                                </DropdownItem>

                                                {/* <DropdownItem style={{ padding: "0px" }}>
                                                    <div>
                                                        <Link to="#" className="dropdown-item">
                                                            Change Password
                                                        </Link>
                                                    </div>
                                                </DropdownItem> */}

                                                <DropdownItem style={{ padding: "0px" }}>
                                                    <div>
                                                        <Link  className="dropdown-item" onClick={handleSignOut}>
                                                            Đăng Xuất
                                                        </Link>


                                                        {/* <button onClick={handleSignOut}>Đăng Xuất</button> */}

                                                    </div>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>


                                    </div>
                                ) : (
                                    <div>
                                        <NavLink href="/login" className="nav-link">Đăng Nhập</NavLink>
                                    </div>
                                )}
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </React.Fragment>

    );
};

export default withRouter(CustomNavbar);
