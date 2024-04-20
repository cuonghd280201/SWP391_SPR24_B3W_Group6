import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2em", color: "#cc0000", fontWeight: "bold" }}>
          Liên hệ
        </div>
        <div
          style={{
            marginTop: "10px",
            color: "#404040",
            fontSize: "1.2em",
            fontWeight: "inherit",
          }}
        >
          Liên hệ với chúng tôi qua số điện thoại hoặc email để được xử lý các
          yêu cầu mà quý khách gặp phải một cách nhanh chóng
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            width: "30%",
            marginBottom: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginRight: "20px",
          }}
        >
          <h3
            style={{
              fontWeight: "bolder",
              fontSize: "18px",
              marginBottom: "10px",
              color: "#5900b3",
            }}
          >
            CHI NHÁNH THỦ ĐỨC
          </h3>
          <p style={{ margin: "5px 0" }}>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ marginRight: "5px" }}
            />
            224 Kha Vạn Cân, Thành phố Thủ Đức
          </p>
          <p style={{ margin: "5px 0" }}>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />
            Tel: (84) 898922059
          </p>
          <p style={{ margin: "5px 0" }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />
            Email: qklgithub@gmail.com
          </p>
        </div>
        <div
          style={{
            width: "30%",
            marginBottom: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginRight: "20px",
          }}
        >
          <h3
            style={{
              fontWeight: "bolder",
              fontSize: "18px",
              marginBottom: "10px",
              color: "#5900b3",
            }}
          >
            TRỤ SỞ CHÍNH
          </h3>
          <p style={{ margin: "5px 0" }}>
            {" "}
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ marginRight: "5px" }}
            />
            273 Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương, Việt Nam
          </p>
          <p style={{ margin: "5px 0" }}>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />
            Tel: (84) 898922059
          </p>
          <p style={{ margin: "5px 0" }}>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />
            Email: qklgithub@gmail.com
          </p>
        </div>
        <div
          style={{
            width: "30%",
            marginBottom: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{
              fontWeight: "bolder",
              fontSize: "18px",
              marginBottom: "10px",
              color: "#5900b3",
            }}
          >
            CHI NHÁNH BÌNH THẠNH
          </h3>
          <p style={{ margin: "5px 0" }}>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ marginRight: "5px" }}
            />
            264 Ung Văn Khiêm, Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam
          </p>
          <p style={{ margin: "5px 0" }}>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />
            Tel: (84) 898922059
          </p>
          <p style={{ margin: "5px 0" }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />
            Email: qklgithub@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
