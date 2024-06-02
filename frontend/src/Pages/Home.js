import React from "react";
import { Card } from "antd";
import aectLogo from "../images/aectlogo.png";
import istecLogo from "../images/istec.png";
import tasetLogo from "../images/taset.png";
import tasetTVLogo from "../images/tasetTV.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Card style={{ margin: 20 }}>
        <b>Sevgili iş arkadaşlarım,</b>
        <p>
          {" "}
           Çevrimiçi Bilim ve Teknoloji Dergisi (TOJSAT) sizi karşılıyor.
          TOJSAT, çevrimiçi dergi ilginiz için teşekkür eder. Online dergi
          sistemi Ocak 2011'den itibaren çok hızlı bir şekilde yaygınlaşmıştır.
          Bilim ve teknolojideki yeni trendleri tüm dünyaya yaymaya devam
          etmektedir. Dergimizin küresel bilim ve teknoloji hedefimizi de
          başarıyla gerçekleştireceğini umuyoruz. Dergide ifade edilen görüşler
          yazarların görüşleri olup, Editörün ve TOJSAT'ın görüşleri değildir.
          TOJSAT sizi makale katkılarına davet ediyor. Gönderilen makaleler
          bilim ve teknolojinin tüm yönleriyle ilgili olmalıdır. Makaleler
          orijinal olmalı, yayınlanmamış olmalı ve TOJSAT'a sunulduğu sırada
          başka bir yerde yayınlanmak üzere düşünülmemelidir. Yazılar İngilizce
          olarak sunulmalıdır.  TOJSAT, TASET (Bilim, Eğitim ve Teknoloji
          Derneği) organizasyonunun bir parçasıdır.  Uluslararası çevrimiçi
          dergi TOJSAT ile ilgili her türlü öneri ve görüşleriniz için lütfen
          mail göndermekten çekinmeyiniz.  TOJSAT, editörleri, konuk editörleri
          ve danışma kurulları tarafından yönlendirilmektedir. TOJSAT'a yazar,
          konuk editör veya hakem olarak katkıda bulunmak istiyorsanız lütfen
          cv'nizi tojsateditor@gmail.com adresine gönderin.
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
    </>
  );
};

export default Home;
