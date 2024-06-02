import React from "react";
import { Card } from "antd";
import aectLogo from "../images/aectlogo.png";
import istecLogo from "../images/istec.png";
import tasetLogo from "../images/taset.png";
import tasetTVLogo from "../images/tasetTV.png";

const EtikKurallar = () => {
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
        <h5>ETİK KURALLAR</h5>
        <br />
        <b>Etik Kurallar</b>
        <ul>
          <li>
            Yazar(lar), gönderilen makalenin kendisine ait orijinal araştırma
            olduğunu garanti eder.
          </li>
          <li>
            Bu çalışmadaki tüm yazarlar, makalenin başka bir dergiye
            gönderilmediğini onaylar ve kamu sorumluluğunu kabul eder.
          </li>
          <li>
            Makale içeriği, mevcut telif hakkı kurallarını veya herhangi bir
            kişi veya kuruluşun fikri mülkiyet haklarını ihlal etmez.
          </li>
          <li>
            Makale, araştırma disiplinine uygun etik standartlara uygundur.
          </li>
          <li>
            Tüm hakemli yayınlar, ilgili alanında uzman en az iki uluslararası
            hakem tarafından çift kör hakemlik sürecinde değerlendirilecektir.
            Kitap, Yazılım ve Web Site İncelemeleri değerlendirmeye alınmayacak,
            ancak editörler incelemeyi reddetme veya düzenleme hakkını saklı
            tutar.
          </li>
        </ul>
        <br />
        <b>Telif Hakkı Mesajı</b>
        <ul>
          <li>
            TOJSAT tarafından telif hakkı korunmaktadır. Yazarlar, makalelerin
            telif hakkını ortaklaşa saklı tutar. Kişisel veya sınıf kullanımı
            için bu eserin dijital veya basılı kopyalarını yapmak izne tabidir
            ve kopyalar, ticari kazanç veya avantaj sağlamak amacıyla
            dağıtılmamalıdır. Ayrıca, kopyalar ilk sayfada tam alıntıyı
            içermelidir. Bu çalışmada başka kişiler tarafından sahip olunan
            bileşenlerin telif hakları korunmalıdır. Kredi ile özetleme
            yapılabilir. Başka türlü yeniden yayımlamak, sunucularda yayınlamak
            veya listelere yeniden dağıtmak, özel izin ve/veya ücret gerektirir.
            İzin istekleri için editörlerle iletişime geçin:
            aytekinsman@gmail.com veya tojsateditor@gmail.com
          </li>
        </ul>
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

export default EtikKurallar;
