import React from "react";


//Home Section
import DetailTour from "../pages/Home/detailTour";
import Login from "../pages/Home/login"
import InfomationTour from "../pages/Home/infomationTour";
import Payment from "../pages/Home/payment";
import HomeSlider from "../pages/HomeSlider/homeSlider";
import FindTour from "../pages/Home/findTour";
import ProfileInfo from "../pages/Profile/profile";
import OrderHistory from "../pages/Profile/orderHistory";
import Dashboard from "../pages/Admin/dashboard";
import ListTourStaff from "../pages/Staff/ListTourStaff";
import ListAccountCustomer from "../pages/Admin/listAccountCustomer";
import CreateTourStaff from "../pages/Staff/CreateTourStaff";
import ListTourBook from "../pages/Staff/ListTourBook"
import ListAccountStaff from "../pages/Admin/listAccountStaff";
import ListTourStaffDetail from "../pages/Staff/ListTourStaffDetail";
import FileUploadImage from "../pages/Profile/FileUploadImage";

import OrderBookTourDetail from "../pages/Profile/orderBookTourDetail";
import Contact from "../pages/Home/contact";

const Home = React.lazy(() => import("../pages/Home/home"));

const userRoutes = [
  //Home Section
  { path: "/home", component: <Home /> },
  { path: "/", component: <Home /> },
  { path: "/detailTour", component: <DetailTour/>},
  { path: "/login", component: <Login/>},
  { path: "/payment", component: <Payment/>},
  { path: "/findTour", component: <FindTour/>},
  { path: "/profileInfo", component: <ProfileInfo/>},
  { path: "/orderHistory", component: <OrderHistory/>},
  { path: "/infomationTour", component: <InfomationTour/>},
  { path: "/orderBookTouDetail", component: <OrderBookTourDetail/>},
  
];

const authRoutes = [

  { path: "/dashboard", component: <Dashboard /> },
  { path: "/listTourStaff", component: <ListTourStaff /> },
  { path: "/listTourStaffDetail", component: <ListTourStaffDetail /> },
  { path: "/createToutStaff", component: <CreateTourStaff /> },
  { path: "/listTourBook", component: <ListTourBook /> },
  { path: "/listAccountCustomer", component: <ListAccountCustomer /> },
  { path: "/listAccountStaff", component: <ListAccountStaff /> },
  { path: "/homeSlider", component: <HomeSlider/>},
  { path: "/fileImage", component: <FileUploadImage/>},
  { path: "/listTourBookDetail", component: <ListTourStaffDetail/>},
  { path: "/contact", component: <Contact/>}



];

export { userRoutes, authRoutes };
