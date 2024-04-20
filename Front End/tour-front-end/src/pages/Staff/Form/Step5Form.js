import React, { useEffect, useState } from "react";

import {
  
  Layout,
  
} from "antd";

import { Editor } from "@tinymce/tinymce-react";


const { Content } = Layout;

const Step5Form = () => {
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
                      <h4 class="text-dark mb-3">Tạo ảnh cho chuyến đi </h4>
                     
                     
                      <div class="row">
                      <div class="col-md-6">
                          <label for="imageUpload" class="form-label">
                            Chọn ảnh:
                          </label>

                          <input
                            type="file"
                            class="form-control"
                            id="imageUpload"
                            name="imageUpload"
                            multiple
                          />
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

export default Step5Form;
