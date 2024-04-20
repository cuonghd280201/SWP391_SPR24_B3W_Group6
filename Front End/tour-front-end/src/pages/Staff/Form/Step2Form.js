import React, { useEffect, useState } from "react";

import {
  
  Layout,
  
} from "antd";

import { Editor } from "@tinymce/tinymce-react";


const { Content } = Layout;

const Step2Form = () => {
  return (
      <Layout>
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
                    > 
                      <h4 class="text-dark mb-3">Tạo chi tiết chuyến đi </h4>
                     

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group app-label mt-2">
                          <label class="text-muted">Đồ ăn</label>
                            <input
                              id="job-title"
                              type="text"
                              class="form-control resume"
                              maxlength="100"
                              required
                            ></input>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group app-label mt-2">
                            <label class="text-muted">Khách sạn</label>
                            <input
                              id="job-title"
                              type="text"
                              class="form-control resume"
                              maxlength="100"
                              required
                            ></input>
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group app-label mt-2">
                            <label class="text-muted">Địa điểm</label>
                            <input
                              id="job-title"
                              type="text"
                              class="form-control resume"
                              maxlength="100"
                              required
                            ></input>
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group app-label mt-2">
                            <label class="text-muted">Thời gian</label>
                            <input
                              id="job-title"
                              type="text"
                              class="form-control resume"
                              maxlength="100"
                              required
                            ></input>
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group app-label mt-2">
                            <label class="text-muted">Phương tiện</label>
                            <input
                              id="job-title"
                              type="text"
                              class="form-control resume"
                              maxlength="100"
                              required
                            ></input>
                          </div>
                        </div>
                      </div>
        

                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </div>
      </Layout>
  );
};

export default Step2Form;
