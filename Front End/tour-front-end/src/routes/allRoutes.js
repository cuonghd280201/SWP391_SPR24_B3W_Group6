import React from "react";


//Home Section
import DetailTour from "../pages/Home/detailTour";
import Login from "../pages/Home/login"
import InfomationTour from "../pages/Home/infomationTour";
import Payment from "../pages/Home/payment";
import HomeSlider from "../pages/HomeSlider/homeSlider";
import FindTour from "../pages/Home/findTour";

const Home = React.lazy(() => import("../pages/Home/home"));

const userRoutes = [
  //Home Section
  { path: "/home", component: <Home /> },
  { path: "/", component: <Home /> },
  { path: "/detailTour", component: <DetailTour/>},
  { path: "/login", component: <Login/>},
  { path: "/payment", component: <Payment/>},
  { path: "/homeSlider", component: <HomeSlider/>},
  { path: "/findTour", component: <FindTour/>},





  { path: "/infomationTour", component: <InfomationTour/>}

];

const authRoutes = [




];

export { userRoutes, authRoutes };
