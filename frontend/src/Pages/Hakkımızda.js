import React from "react";
import { Card } from "antd";
import aectLogo from "../images/aectlogo.png";
import istecLogo from "../images/istec.png";
import tasetLogo from "../images/taset.png";
import tasetTVLogo from "../images/tasetTV.png";

const Hakkımızda = () => {
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
        <h5>HAKKIMIZDA</h5>
        <p>
          Son dönemdeki bilimsel ve teknolojik faaliyetlerin yakınlaşması hem
          teorik hem de uygulamalı bilimler için eşsiz fırsatlar ve bir altyapı
          sağlamaktadır. Ancak bilginin yapılandırılması için özel ortamlara
          ihtiyaç vardır. Bu tür ortamlarda bilgi medyası, farklı akademik,
          idari ve destek ihtiyaçları olan öğrenciler için anlamlı ortamlar
          oluşturacak şekilde teknoloji ve öğrenme teorilerini bir araya
          getirmelidir. Tojsat, araştırmacılara sanayi, üniversite ve
          şirketlerde bilim ve teknolojinin güncel durumunu tartışabilecekleri
          bir ortam sağlamayı amaçlamaktadır.
        </p>
        <p>
          TOJSAT'ın içeriği bilim ve teknolojiyle ilgilidir. TOJSAT, yılda dört
          kez (Ocak, Nisan, Temmuz ve Ekim) makaleler yayınlayan çevrimiçi
          uluslararası elektronik bir dergidir. Makaleler yayınlanmak üzere
          herhangi bir zamanda katkıda bulunabilir. Potansiyel makaleler editör
          inceleme komitesi üyeleri tarafından incelenir.
        </p>
        <p>
          İnceleme süreci genellikle üç ila sekiz hafta sürer; Yazarın revizyonu
          ve editoryal/üretim döngüsü dört aya kadar sürebilir. Yazılar kelime
          işlemcili dosya olarak TOJSAT Yayın Kuruluna (tojsateditor@gmail.com)
          gönderilmelidir.
        </p>
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

export default Hakkımızda;
