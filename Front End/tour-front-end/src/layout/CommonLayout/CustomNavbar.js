import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container } from 'reactstrap';
import withRouter from '../../components/withRouter';

const CustomNavbar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
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
                            <NavLink href="/login" className="nav-link">Đăng Nhập</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default withRouter(CustomNavbar);
