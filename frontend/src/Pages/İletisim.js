import React from "react";
import { Card, Row, Col } from "antd";
import aectLogo from "../images/aectlogo.png";
import istecLogo from "../images/istec.png";
import tasetLogo from "../images/taset.png";
import tasetTVLogo from "../images/tasetTV.png";
import Aytekin from "../images/AytekinIsman.jpg";
import Sahin from "../images/SahinDundar.jpg";

const Iletisim = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ margin: 20, width: "80%" }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <img
              src={Aytekin}
              style={{ width: "100%", borderRadius: 10 }}
              alt="Editor 1"
            />
            <div style={{ textAlign: "center", marginTop: 10 }}>
              <p>
                <b>Prof.Dr. Aytekin İŞMAN</b>
              </p>
              <p>Genel Yayın Yönetmeni</p>
              <p>aytekinsman@gmail.com</p>
            </div>
          </Col>
          <Col span={12}>
            <img
              src={Sahin}
              style={{ width: "100%", borderRadius: 10 }}
              alt="Editor 2"
            />
            <div style={{ textAlign: "center", marginTop: 10 }}>
              <p>
                <b>Prof.Dr. Mustafa Şahin Dündar</b>
              </p>
              <p>Editör</p>
              <p>tojsateditor@gmail.com</p>
            </div>
          </Col>
        </Row>
      </Card>
      <Card
        style={{
          height: "100%",
          width: "80%",
          marginBottom: 40,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href="https://aect.org/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo"
            src={aectLogo}
            height={110}
            width={110}
            style={{ marginRight: 10, padding: 5, borderRadius: 10 }}
          />
        </a>
        <a
          href="https://www.iste-c.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo"
            src={istecLogo}
            height={110}
            width={110}
            style={{ marginRight: 10, padding: 5, borderRadius: 10 }}
          />
        </a>
        <a
          href="http://www.taset.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo"
            src={tasetLogo}
            height={110}
            width={110}
            style={{ marginRight: 10, padding: 5, borderRadius: 10 }}
          />
        </a>
        <a
          href="https://taset.web.tv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo"
            src={tasetTVLogo}
            height={110}
            width={110}
            style={{ marginRight: 10, padding: 5, borderRadius: 10 }}
          />
        </a>
      </Card>
    </div>
  );
};

export default Iletisim;
