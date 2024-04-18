import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav, NavItem, NavLink, Label, FormGroup, TabPane, Input, Button, Card, CardHeader, CardBody } from 'reactstrap';
import '../Profile/profile.css';
import userServices from "../../services/user.services";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileInfo = () => {
    const [users, setUsers] = useState(); // Initialize users as an object
    const [avatar2, setAvatar2] = useState();
    const [userImage3, setUserImage3] = useState(null);

    const [userImageState, setUserState] = useState(null);
    const [dateState, setDateState] = useState(null);
    const [fullNameState, setFullnameState] = useState(null);
    const [genderState, setGenderState] = useState(null);
    const [phoneState, setPhonenameState] = useState(null);
    useEffect(() => {
        fetchTourData();
        fetchTourDataProfile();

    }, []);

    const fetchTourDataProfile = async () => {
        const response = await userServices.getUserProfile();
        setUsers(response.data.data);

    }


    const fetchTourData = async () => {
        try {
            const response = await userServices.getUserProfile();
            console.log("Response:", response); // Log the response object

            document.getElementById("fullNameTab2").value =
                response.data.data.name;
            document.getElementById("genderTab2").value =
                response.data.data.gender;
            document.getElementById("phoneNumberTab2").value =
                response.data.data.phone;
            let formattedDate;
            if (response.data.data.dateOfBirth) {
                const dateOfBirthtemp = response.data.data.dateOfBirth;
                // Split the date string into day, month, and year components
                const [day, month, year] = dateOfBirthtemp.split("-");

                // Create a new Date object with the components in YYYY-MM-DD format
                const parsedDate = new Date(`${year}-${month}-${day}`);

                // No need to add one day, unless necessary
                formattedDate = parsedDate.toISOString().split("T")[0];
                document.getElementById("dayOfBirthTab2").value = formattedDate; // Corrected ID
                setDateState(formattedDate);
            }

            setFullnameState(response.data.data.firstName);
            setGenderState(response.data.data.lastName);
            setPhonenameState(response.data.data.phoneNumber);

            if (response.data.data.userImage) {
                setUserImage3(response.data.data.userImage);
            } else {
                setUserImage3();
            }
        } catch (error) {
            console.error("Error fetching tours:", error);

        }
    };
    //Update Profile

    const handleEdit = async () => {
        try {
            // Get the date of birth input from the DOM
            const dayOfBirthInput = document.getElementById('dayOfBirthTab2').value;
    
            // Split the date input by hyphen to get date parts
            const dateParts = dayOfBirthInput.split('-');
    
            // Format the date to "yyyy-mm-dd"
            const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    
            // Retrieve form values
            const updatedProfile = {
                name: document.getElementById('fullNameTab2').value,
                phone: document.getElementById('phoneNumberTab2').value,
                dateOfBirth: formattedDate,
                gender: document.getElementById('genderTab2').value,
            };
    
            // Call the updateProfile function with the updated profile data
            const response = await userServices.updateProfile(
                updatedProfile.name,
                updatedProfile.phone,
                updatedProfile.gender,
                updatedProfile.dateOfBirth
            );
    
            console.log('Response:', response);
    
            // Handle the API response
            if (response.status === 200) {
                // Success: notify the user and update the application state
                toast.success("Update Profile successfully!")
                setUsers(response.data.data); // Update state with new user data
            } else {
                // Error: notify the user
                alert('An error occurred while updating the profile.');
            }
        } catch (error) {
            // Handle error and notify the user
            console.error('Error updating profile:', error);
            alert('An error occurred while updating the profile.');
        }
    };
    return (



        <main role="main">
            <section className="ftco-section ftco-counter img" style={{ backgroundImage: 'url(images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="10">
                            {/* Your content here */}
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="profile">
                <Container>
                    <Row className="py-4">
                        <Col md="3" className="left">
                            <div className="wrapper p-4">
                                <div className="info d-flex align-items-center mb-md-3">
                                    <div className="image me-3">
                                        <img className="rounded-circle" src="" alt="" />
                                    </div>
                                    <div className="info-wrapper">
                                        <div>
                                            {/* <h5 className="fw-bold">{users.name}</h5>
                                            <small>{users.email}</small> */}
                                        </div>
                                        <span id="toggle-profile-menu" className="d-lg-none">
                                            <i className="icon icon--chevron-down" />
                                        </span>
                                    </div>
                                </div>
                                <Nav className="profile-links py-3 d-block">
                                    <NavItem>
                                        <NavLink aria-expanded="false" aria-current="page" className="d-inline-flex align-items-center rounded collapsed active" href="/profile/info">
                                            <h6 className="fw-bold">Tài khoản</h6>
                                        </NavLink>
                                        <div id="getting-started-collapse" className="collapse show">
                                            <ul className="list-unstyled fw-normal pb-1 small">
                                                <li>
                                                    <NavLink aria-current="page" className="d-inline-flex align-items-center rounded active" href="/profile/info">Thông tin cá nhân</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink className="d-inline-flex align-items-center rounded" href="/profile/change-password">Đổi mật khẩu</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink className="d-inline-flex align-items-center rounded" href="/profile/sign-out">Đăng xuất</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="d-inline-flex align-items-center rounded" href="/orderHistory">
                                            <h6 className="fw-bold">Đơn đặt chỗ</h6>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </Col>

                        {/* Right Content */}
                        <Col md="7" className="right ps-md-4">
                            <div className="wrapper p-md-4">
                                <div className="heading">
                                    <h5 className="fw-bold">Thông tin cá nhân</h5>
                                    <p className="text-muted mb-4">Cập nhật thông tin của Quý khách và tìm hiểu các thông tin này được sử dụng ra sao.</p>
                                </div>
                                <div className="row section-01">
                                    <div className="col-md-12 col-12 setting-wrap">
                                        <FormGroup row>
                                            <Label for="fullname" md={3} className="col-form-label">Họ và Tên</Label>
                                            <Col md={9}>
                                                <Input className="form-control" id="fullNameTab2" name="fullname" placeholder="Nhập họ và tên" type="text"  />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="fullname" md={3} className="col-form-label">Số Điện Thoại</Label>
                                            <Col md={9}>
                                                <Input className="form-control" id="phoneNumberTab2" name="phone" placeholder="Nhập số điện thoại" type="text"  />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label for="birthdate" md={3} className="col-form-label">Ngày Sinh</Label>
                                            <Col md={9}>
                                                <Input
                                                    type="date"
                                                    className="form-control"
                                                    id="dayOfBirthTab2"
                                                />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label for="gender" md={3} className="col-form-label">Giới Tính</Label>
                                            <Col md={9}>
                                                <Input type="select" className="form-control" id="genderTab2" name="gender" >
                                                    <option>MALE</option>
                                                    <option>FEMALE</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <Button className="fw-bold text-underline toggle-edit-form" onClick={handleEdit}  >Chỉnh sửa</Button>


                                        {/* More Settings */}

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </main>
    );
}

export default ProfileInfo;
