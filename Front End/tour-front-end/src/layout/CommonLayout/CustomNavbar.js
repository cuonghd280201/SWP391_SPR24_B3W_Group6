import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container } from 'reactstrap';
import withRouter from '../../components/withRouter';
import { UserAuth } from "../../utils/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faPenToSquare,
    faTrashCan,
    faPlusSquare,
  } from "@fortawesome/free-regular-svg-icons";

const CustomNavbar = (props) => {
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
                                                       <FontAwesomeIcon size="2xl" icon={faPlusSquare} />
                                        <p>Welcome, {user?.displayName}</p>
                                        <button onClick={handleSignOut}>Đăng Xuất</button>
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
