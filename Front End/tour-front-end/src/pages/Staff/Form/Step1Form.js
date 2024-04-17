import React, { useEffect, useState } from "react";

import {
  
  Layout,
  
} from "antd";

import { Editor } from "@tinymce/tinymce-react";


const { Content } = Layout;

const Step1Form = () => {
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
                      <h4 class="text-dark mb-3">Tạo chuyến đi </h4>
                     
                      <div class="row">
                        <div class="col-md-9">
                          <div class="form-group app-label mt-2">
                            <label class="text-muted">Tên chuyến đi</label>
                            <input
                              id="job-title"
                              type="text"
                              class="form-control resume"
                              placeholder="Tên..."
                              maxlength="100"
                              required
                            ></input>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group app-label mt-2">
                            <label class="text-muted">Số lượng người đi</label>
                            <input
                              id="number-dev"
                              type="number"
                              class="form-control resume"
                              placeholder="0"
                            ></input>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group app-label mt-2">
                            <label class="text-muted">
                              Giá chuyến đi (VND)
                            </label>
                            <input
                              id="budget"
                              type="number"
                              class="form-control resume"
                              placeholder="3000000 VND"
                            ></input>
                          </div>
                        </div>

                        <div class="col-md-3">
                          <div class="form-group app-label mt-2">
                            <label class="text-muted">Thời gian đi</label>
                            <input
                              type="date"
                              class="form-control resume"
                              placeholder=""
                              readOnly
                              value=""
                            ></input>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group app-label mt-2">
                            <label class="text-muted"></label>
                            <input
                              id="duration"
                              type="date"
                              class="form-control resume"
                              placeholder=""
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group app-label mt-2">
                            <label class="text-muted">Nơi khởi hành</label>
                            <input
                              id="job-title"
                              type="text"
                              class="form-control resume"
                              placeholder="Title..."
                              maxlength="100"
                              required
                            ></input>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group app-label mt-2">
                            <label class="text-muted">Khác</label>
                            <input
                              id="job-title"
                              type="text"
                              class="form-control resume"
                              placeholder="Title..."
                              maxlength="100"
                              required
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="mb-3">
                          <label for="imageUpload" class="form-label">
                            Add an image:
                          </label>

                          <input
                            type="file"
                            class="form-control"
                            id="imageUpload"
                            name="imageUpload"
                          />
                        </div>
                        <div class="col-md-24">
                          <div class="form-group app-label mt-2">
                            <label class="text-muted">
                              Hiring request description
                            </label>
                            <Editor
                              class="fix-height"
                              id="description"
                              apiKey="axy85kauuja11vgbfrm96qlmduhgfg6egrjpbjil00dfqpwf"
                            />
                          </div>
                        </div>
                      </div>
{/* 
                      <center>
                        <button
                          type="button"
                          className="btn btn-success"
                          style={{ marginRight: "10px" }}
                        >
                          Save
                        </button>
                        <button type="button" className="btn btn-danger">
                          Cancel
                        </button>
                      </center> */}

                      
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

export default Step1Form;
