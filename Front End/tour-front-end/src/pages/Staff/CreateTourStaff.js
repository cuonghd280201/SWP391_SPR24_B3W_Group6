import React, { useEffect, useState } from "react";

import "../Admin/dashboard.css";
import {
  
  Layout,
  
} from "antd";

import { Editor } from "@tinymce/tinymce-react";

import NavBarWebStaff from "./Navbar/NavBarWebStaff";
import SiderBarWebStaff from "./SlideBar/SiderBarWebStaff";
import Footer from "../../layout/CommonLayout/Footer";
import { ProgressB } from "./ProgressB";
const { Content } = Layout;

const CreateTourStaff = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderBarWebStaff choose={"menu-key/1"}></SiderBarWebStaff>
      <Layout>
        <NavBarWebStaff></NavBarWebStaff>
        <div
          style={{
            padding: "30px",
            background: "white",
            margin: "30px",
            borderRadius: "12px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <Content>
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <div class="rounded shadow bg-white p-4">
                  <div class="custom-form">
                    <div id="message3"></div>
                    <form
                      method="post"
                      action="php/contact.php"
                      name="contact-form"
                      id="contact-form3"
                    > <ProgressB/>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};

export default CreateTourStaff;
