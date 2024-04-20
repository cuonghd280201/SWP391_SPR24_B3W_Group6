import React from "react";

const Contact = () => {
  return (
    <div>
      <div style={{ fontSize: "2em", color: "red", fontWeight: "bold" }}>
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
        Liên hệ với chúng tôi để được xử lý các yêu cầu mà quý khách gặp phải
        một cách nhanh chóng
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "30%",
            marginBottom: "20px",
            padding: "20px",
            border: "1px solid #ccc",
          }}
        >
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
            TRỤ SỞ CHÍNH
          </h3>
          <p style={{ margin: "5px 0" }}>
            190 Pasteur, P. Võ Thị Sáu, Q.3, Tp. Hồ Chí Minh, Việt Nam
          </p>
          <p style={{ margin: "5px 0" }}>Tel: (84-28) 38 668 999 (20 lines)</p>
          <p style={{ margin: "5px 0" }}>Fax: (84-28) 38 29 9142</p>
          <p style={{ margin: "5px 0" }}>
            Email: info@vietravel.com - info.asia@vietravel.com (English
            Support)
          </p>
        </div>
        <div
          style={{
            width: "30%",
            marginBottom: "20px",
            padding: "20px",
            border: "1px solid #ccc",
          }}
        >
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
            PHÒNG ĐĂNG KÝ DU LỊCH CHỢ LỚN
          </h3>
          <p style={{ margin: "5px 0" }}>
            86A Châu Văn Liêm, Phường 11, Quận 5, Tp. HCM
          </p>
          <p style={{ margin: "5px 0" }}>Tel: (84-28) 35 358 709</p>
          <p style={{ margin: "5px 0" }}>Fax:</p>
          <p style={{ margin: "5px 0" }}>Email: vtv.cholon@vietravel.com</p>
        </div>
        <div
          style={{
            width: "30%",
            marginBottom: "20px",
            padding: "20px",
            border: "1px solid #ccc",
          }}
        >
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
            PHÒNG ĐĂNG KÝ DU LỊCH QUẬN 11
          </h3>
          <p style={{ margin: "5px 0" }}>
            1475 Đường 3/2, Phường 16, Quận 11, Tp. HCM
          </p>
          <p style={{ margin: "5px 0" }}>Tel: (84-28) 39 699 439</p>
          <p style={{ margin: "5px 0" }}>Fax:</p>
          <p style={{ margin: "5px 0" }}>Email: vtv.caygo@vietravel.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
