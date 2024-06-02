import React from "react";
import { Card, Row, Col } from "antd";
import aectLogo from "../images/aectlogo.png";
import istecLogo from "../images/istec.png";
import tasetLogo from "../images/taset.png";
import tasetTVLogo from "../images/tasetTV.png";
import sau2017 from "../images/SAU_Iletisim_Calismalari_2017_Kitap.jpg";
import sau2018 from "../images/SAU_Iletisim_Calismalari_2018_Kitap.jpg";
import sau2019 from "../images/SAU_Iletisim_Calismalari_2019_Kitap.jpg";
import sau2020 from "../images/SAU_Iletisim_Calismalari_2020_Kitap.jpg";
import sau2021 from "../images/iletisimcalismalari2021.jpg";
import sauAkreditasyon from "../images/YuksekogretimdeKaliteVeAkreditasyonCalismalari2021.jpg";

const OnlineKitaplar = () => {
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
          <Col span={8}>
            <a
              href="https://www.iet-c.net/publication_folder/iticam/YuksekogretimdeKaliteVeAkreditasyonCalismalari2021.pdf"
              target="_blank"
            >
              <img
                src={sauAkreditasyon}
                style={{ width: "100%" }}
                alt="Akreditasyon 2021"
              />
            </a>
          </Col>
          <Col span={8}>
            <a
              href="https://www.iet-c.net/publication_folder/iticam/iletisimcalismalari2021.pdf"
              target="_blank"
            >
              <img src={sau2021} style={{ width: "100%" }} alt="SAU 2021" />
            </a>
          </Col>
          <Col span={8}>
            <a
              href="https://www.tojcam.net/journals/public/pdf/SAU_Iletisim_Calismalari_2020_Kitap.pdf"
              target="_blank"
            >
              <img src={sau2020} style={{ width: "100%" }} alt="SAU 2020" />
            </a>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <a
              href="https://www.tojcam.net/journals/public/pdf/SAU_Iletisim_Calismalari_2019_Kitap.pdf"
              target="_blank"
            >
              <img src={sau2019} style={{ width: "100%" }} alt="SAU 2019" />
            </a>
          </Col>
          <Col span={8}>
            <a
              href="https://www.tojcam.net/journals/public/pdf/SAU_Iletisim_Calismalari_2018_Kitap.pdf"
              target="_blank"
            >
              <img src={sau2018} style={{ width: "100%" }} alt="SAU 2018" />
            </a>
          </Col>
          <Col span={8}>
            <a
              href="https://www.tojcam.net/journals/public/pdf/SAU_Iletisim_Calismalari_2017_Kitap.pdf"
              target="_blank"
            >
              <img src={sau2017} style={{ width: "100%" }} alt="SAU 2017" />
            </a>
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

export default OnlineKitaplar;
