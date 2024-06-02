import React from "react";
import { Card } from "antd";
import aectLogo from "../images/aectlogo.png";
import istecLogo from "../images/istec.png";
import tasetLogo from "../images/taset.png";
import tasetTVLogo from "../images/tasetTV.png";

const Basvuru = () => {
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
        <h5>BAŞVURU ESASLARI</h5>
        <br />
        <br />
        <p>
          <b>BAŞVURU DOSYALARININ FORMATI</b>
          <p>
            Tüm başvurular Editöre e-posta ile GÖNDERİLMELİDİR. Basılı kopya
            teslim evrakları kabul edilmeyecektir.  "Belge görünümünü" en iyi
            koruyan format tercih edilir.   Gönderilen dosya türleri iki ana
            türden oluşur: Ana El Yazması ve Sanat Eseri dosyaları.  Kabul
            edilebilir gönderim dosyası türleri için aşağıya bakın. 
          </p>
            <b>Ana Makaledeki tüm dosyaları bağlayın ve grafikleri</b> bu
          belgeye yerleştirin.  Ayrıca,
          <b>
            TÜM dosyalar Ana Makaledeki adlarla eşleşen adlarla ayrı ayrı
            gönderilmelidir.
          </b>
            Sıkıştırılmış dosyalar GÖNDERMEYİN.   {" "}
          <p>
            --Ana Makale (birincil gönderim belgesi) Makalenizi KELİME
            FORMATINDA gönderin - Microsoft Word (.doc / .docx) (Örnek Makaleye
            Bakın) Üzeri çizili, gizli metin, gibi herhangi bir kelime işlem
            seçeneğini/aracı kullanmayın, yorumlar, birleştirmeler vb.  Bu
            yayının akademik odağı nedeniyle, şahıs zamirlerinin (ben, biz, vb.)
            ve şimdiki zamanın kullanılması kesinlikle önerilmez. 
          </p>{" "}
          --<b>Artwork</b> (Tablolar, Şekiller, Ekler ve Videolar){" "}
          <p>
            <b> Tablolar </b>- Tüm tablolar (yani satırlar ve sütunlar halinde
            görüntülenen veriler) ya <b>HTML</b> formatında ya da ilgili
            metindeki ilk referansın yanına yerleştirilmiş <b>MS Word </b>
            tabloları olarak gönderilmelidir.
            <b>Tablolar 500 pikselden (5,25") daha geniş OLMAMALIDIR.  </b>
            Çevrimiçi olarak okunması zor olduğundan uzun tablolar önerilmez.
            <p>
              <b>Şekiller </b>- Şekil grafikleri (ör. çizelgeler, grafikler,
              fotoğraflar ve çizimler) <b>.GIF</b> veya <b>.PNG</b> biçiminde
              olmalıdır. , veya <b>.JPG </b>formatında, elektronik dosyaya
              eklenmelidir.  Şekillerin dosya adları, şeklin altında Şekil 1,
              Şekil 2 vb. şeklinde açıkça etiketlenmeli, sola dayalı, sırayla
              numaralandırılmalı ve metin içinde kaynak gösterilmelidir.  ALT
              etiketleri tüm grafiklere uygulanacaktır. Varsayılan etiket, yazar
              tarafından sağlanan şekil başlığı olacaktır. Yazarlar, ses veya
              videolara bağlantı olarak kullanılan tüm grafikler için etiket
              metni sağlamalıdır. bir tablo veya şeklin tanımı ek olarak kabul
              edilecektir.
            </p>
            <p>
              <b>Ekler</b>- makalenin sonuna, referans listesinden sonra
              yerleştirilmelidir. Mümkünse yazarlar, makaledeki referanstan eke
              bir bağlantı vermelidir (ör. " bkz. Ek A”) asıl ekin başlangıcına.
            </p>
            <p>
              <b>Videolar</b> – Tüm videolar{" "}
              <a href="https://www.real.com/" target="_blank">
                <b style={{ color: "black" }}>RealMedia (.RM)</b>
              </a>
              (biçimlendirilmiş dosyalar, Web kullanımı için optimize edilmiş
              (bu paragrafın ardından gelen nota bakın) olarak gönderilmelidir.
              ({" "}
              <a
                href="https://helpx.adobe.com/support/animate.html"
                target="_blank"
              >
                <b style={{ color: "black" }}>Flash </b>
              </a>
              animasyonları da .RM biçimine dönüştürülmelidir.) Videolar metinde
              şu şekilde tanımlanmalıdır: "Video 1, Video 2" vb. ve video dosya
              adları, ilgili video numaralarını içermelidir. Yazarlar, makale
              içinde videoya bir bağlantı sağlamalıdır. Bu bağlantı bir metin
              bağlantısı (ör. "Video 1") veya videodan sabit kare (yani bir
              .GIF, .PNG veya .JPG dosyası).
            </p>{" "}
            <b>Ses dosyaları</b>- Ses dosyaları
            <b> RealMedia (.RM)</b> formatlı dosyalar olarak gönderilmelidir (bu
            paragrafın hemen öncesindeki nota bakın). metinde "Ses 1, Ses 2" vb.
            şeklinde olmalıdır ve ses dosyası adları ilgili ses numaralarını
            içermelidir. Yazarlar makale içindeki sese bir bağlantı
            sağlamalıdır. Bu bağlantı bir metin bağlantısı olabilir (ör. "Ses 1)
            ”) veya ilgili bir grafik NOT: Video ve sesin birden fazla formatta
            sıkıştırılması konusunda yardım için{" "}
            <a
              href="http://www.mediacleaner.com/products/CleanerOverview.html"
              target="_blank"
            >
              <b style={{ color: "black" }}>Media Cleaner </b>
            </a>{" "}
            yararlı bulabileceğiniz bir sektör lideridir.
          </p>{" "}
            <b>GENEL KURALLAR</b>
          <p>
            {" "}
            Materyal orijinal olmalı, bilimsel iletişimden beklenen bütünlüğü
            yansıtmalı ve makaleyi hem anlaşılır hem de ilginç kılacak bir
            tutarlılık ve birlik göstermelidir.  Makale göndermeden önce lütfen
            aşağıdaki önerileri inceleyin.  Doğru biçimde alınan orijinal
            yazılar inceleme sürecini hızlandırmaya yarar, diğerleri yazara iade
            edilecektir. Yazım, noktalama işaretleri, cümle yapısı ve
            düzenlemelerin mekanik unsurları, aralıklar, uzunluk ve biçim ve
            açıklamalardaki kullanımın tutarlılığı, teslim edilmeden önce
            incelenmelidir.
          </p>{" "}
            <b>--Uzunluk</b>{" "}
          <p>
            Bu elektronik bir dergi olduğundan makalelerin uzunlukları
            değişiklik gösterebilir.  Makalenizin uzunluğu konuya ve odak
            noktasına uygun olmalıdır.  Yalnızca iki veya üç sayfa uzunluğunda,
            bazıları ise 40 veya 50 sayfa uzunluğunda olan bazı makaleleri kabul
            edeceğiz. Kritik konu uzunluğun uygun olup olmadığıdır.  {" "}
          </p>
          <b>--Özgünlük</b>
          <p>
            {" "}
            Tüm yazılar orijinal olmalıdır. Daha önce yayınlanmış veya başka bir
            dergi veya dergi tarafından değerlendirilmekte olan hiçbir makale
            değerlendirmeye alınmayacaktır. Bununla birlikte, konferans
            tutanaklarında tanımlanan çalışmanın büyük ölçüde revize edilmesi ve
            genişletilmesi halinde, bu değerlendirmeye alınacaktır. Bir
            makalenin sunulması, yazar tarafından makalenin
            değerlendirilmediğini veya başka bir yerde yayınlanmadığını
            onayladığını gösterir.{" "}
          </p>
          <b>  --Yazıların İşlenmesi</b>
          <p>
            {" "}
            Tüm yazılar alındıktan sonra e-posta yoluyla onaylanır. İnceleme
            mümkün olan en kısa sürede gerçekleştirilir. Makale, Editör İnceleme
            Kurulunun en az iki üyesi tarafından incelenecektir ve bu genellikle
            sekiz haftadan fazla sürmez. Yayın veya ret kararı verildiğinde,
            yazışmayı almak üzere belirlenen ilk yazara veya yazara bilgi
            verilir.{" "}
          </p>
          <b>  --Başlık Sayfası </b>
          <p>
            YAZAR 1*, YAZAR 2**, YAZAR 3*** Ortak İletişim Bilgileri* birinci
            yazarın özel iletişim bilgileri (varsa) * ikinci yazarın özel
            iletişim bilgileri (varsa) **  üçüncü yazarın özel iletişim
            bilgileri (varsa)***{" "}
          </p>
           <b> --Özet</b>
          <p>
            {" "}
            Her makale 75 ila 200 kelimelik bilgilendirici, kapsamlı bir özet
            içermelidir. Bu özet, makalenin ana noktalarını ve yazarın özetini
            ve/veya sonuçlarını kısa ve öz bir şekilde özetlemelidir.{" "}
          </p>
          <b>  --Mekanik Gereksinimler </b>
          <p>
            Bu elektronik bir dergi olduğundan makalelerin uzunlukları
            değişiklik gösterebilir.  Makalenizin uzunluğu konuya ve odak
            noktasına uygun olmalıdır.  Yalnızca iki veya üç sayfa uzunluğunda,
            bazıları ise 40 veya 50 sayfa uzunluğunda olan bazı makaleleri kabul
            edeceğiz. Kritik konu uzunluğun uygun olup olmadığıdır.
          </p>{" "}
           <b> -- Katkıda Bulunanlar ve Teşekkürler </b>
          <p>
            Taslakta veya rapor edilen materyalde yardım sağlayan kişilere
            teşekkür veya takdirler, makalenin sonundaki Teşekkür kısmına dahil
            edilmelidir.{" "}
          </p>
           <b> --Referanslar </b>
          <p>
            Yazarlar, tüm referansların doğruluğunu kontrol etmekten ve metinde
            belirtilen tüm referansların aynı zamanda Referanslar bölümünde de
            yer aldığını kontrol etmekten sorumludur. Tüm referanslar yazara
            göre (numarasız) Amerikan Psikoloji Derneği (<b>APA</b>) stilinde
            alfabetik olarak sıralanmalıdır. Atıf örnekleri (1) kitap ve (2)
            süreli yayın: İşman, Aytekin (1997). Uzaktan Eğitim: Öğrenciler ve
            öğretmenler için bir rehber. Ankara: Dernek Basımı. İşman, G.Y.
            (1998). Uzaktan Eğitime İlişkin Öğrenci Algıları. Uzaktan Eğitim,
            8(1), 7-22.
          </p>{" "}
          <b>--Elektronik Medyadan Alıntı Yapmak</b>{" "}
          <p>
            Çevrimiçi kaynaklardan alıntı yapmak için aşağıdaki formlar,{" "}
            <b>APA</b>
            Yayın Kılavuzları, Ek 3-A, Bölüm I'den (s. 218-222) alınmıştır.
            Elektronik ortamın biçimlendirilmesine ilişkin ek bilgi için lütfen
            APA kılavuzuna bakın.  Bir blok alıntı en az 40 kelime veya dört
            satırdan oluşmalıdır, tek aralıklı (şu anda belirtildiği gibi 20 ve
            çift aralıklı değil).  Alıntılarda ve diğerleri, yalnızca tüm
            yazarlara atıfta bulunulduktan veya referans verildikten sonra
            kullanılabilir. APA'ya göre tüm alıntıların referans listesiyle
            eşleşmesi gerekir; bunun tersi de geçerlidir.  <b>Maksimum</b> 40
            referans önerilir.
          </p>
          <blockquote
            style={{
              borderLeft: "2px solid #ccc",
              paddingLeft: "10px",
              color: "#555",
            }}
          >
            <b>Çevrimiçi bilgilere yapılan referansların unsurları</b>{" "}
            <p>
              Yazar, İ. (tarih). Makalenin başlığı. Süreli Yayının Adı
              [On-line], xx. Mevcut: Yolu belirtin Yazar, I. ve Yazar, I.
              (tarih). Bölümün başlığı. Tam çalışmanın başlığında [Çevrimiçi].
              Mevcut: Yolu belirtin Yazar, I., Yazar, I. ve Yazar, I. (tarih).
              Tam çalışmanın başlığı [Çevrimiçi]. Mevcut: Yolu belirtin Tarih
              öğesi yayın yılını veya kaynak düzenli olarak gözden geçiriliyorsa
              en son güncellemeyi belirtmelidir; tarih belirlenemiyorsa
              aramanızın kesin tarihini belirtin. (s. 219) Kullanılabilirlik
              bildirimi, genellikle metin referansları için sağlanan yayıncının
              konumu ve adının yerine geçer. Materyali almak için yeterli
              bilgiyi sağlayın. Örneğin, ağlarda yaygın olarak bulunan
              materyaller için, materyali bulmakta kullanılan protokol (Telnet,
              FTP, Internet vb.), dizin ve dosya adı gibi yöntemi belirtin. (s.
              219)
            </p>{" "}
            <b>Diğer Elektronik Medya</b>
            <p>
              Yazar, I. (Sürüm numarası) [CD-ROM]. (tarih).
              Üreticinin/dağıtıcının yeri: Üreticinin/dağıtıcının adı. Yazar, İ.
              (tarih). Makalenin başlığı [CD-ROM]. Derginin Adı, xx, xxx-xxx.
              Özet kaynağı: Kaynak ve erişim numarası Yazar, İ. (tarih).
              Yazılımın Adı (Sürüm numarası) [Bilgisayar yazılımı].
              Üreticinin/dağıtıcının Yeri: Üreticinin/dağıtıcının adı.
              Çalışmanın başlığından sonra, başlık öğesinin bir parçası olarak
              parantez içine (yani, noktadan önce) materyalin ortamının türünü
              ekleyin (mevcut örnekler arasında CD-ROM, Elektronik veri bandı,
              kartuş bandı ve bilgisayar programı bulunmaktadır). (s. 220)
              Bibliyografik veri tabanının tamamından alıntı yapılıyorsa,
              üreticinin ve dağıtıcının konumunu ve adını ekleyin. (s. 220)
            </p>{" "}
            --<b>URL'ler</b> Yazarlar, okuyucuların yazarların ifade etmeye
            çalıştığı kavramları daha iyi anlamalarına ve hayal etmelerine
            yardımcı olacak etkileşimli medyaya veya animasyon, ses ve
            görüntüler içeren dosyalara bağlantılar sağlayabilir (bkz.
            Multimedya Yönergeleri). Yazarlar, okuyucuların ilgisini çeken
            siteler için en fazla 15 referans olmayan URL içerebilir.{" "}
            <p>
              <b>  İletişim bilgileri</b>
              <p> tojsateditor@gmail.com</p>
            </p>
          </blockquote>
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

export default Basvuru;
