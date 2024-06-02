import React, { useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { Layout, Button, Menu, Card, Select } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { FaHome, FaCopyright, FaBook, FaHandPointRight } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { ImHammer2 } from "react-icons/im";
import { IoMdPeople, IoMdMail, IoMdLogOut } from "react-icons/io";
import { MdReportProblem } from "react-icons/md";
import HeadLogo from "../images/logo.png";
import "./Taslak.css";

const { Header, Content, Sider } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 100,
  paddingInline: 48,
  lineHeight: "10px",
  backgroundColor: "#4096ff",
  display: "flex",
  gap: "245px",
};

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  overflowY: "auto",
};

const siderStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "rgb(0, 21, 41)",
};

const rightSiderStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "1260px",
  height: "720px",
  maxWidth: "1440px",
};

const Taslak = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [guncelSayi, setGuncelSayi] = useState(null);
  const [pastIssues, setPastIssues] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/issues");
        console.log("Fetched issues:", response.data); // Debug log
        const guncel = response.data.find((issue) => issue.GuncelMi === true);
        console.log("Current issue:", guncel); // Debug log
        setGuncelSayi(guncel);
        setPastIssues(response.data.filter((issue) => !issue.GuncelMi));
      } catch (error) {
        console.log("Issues could not be fetched", error);
      }
    };

    fetchIssues();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleIssueChange = (value) => {
    navigate(`/SayiGoster/${value}`);
  };

  const handleGuncelSayiClick = () => {
    if (guncelSayi) {
      navigate(`/SayiGoster/${guncelSayi.SayiID}`);
    }
  };

  const items = [
    { key: "1", icon: <FaHome />, label: <Link to="/home"> Ana Sayfa </Link> },
    {
      key: "2",
      icon: <FaPeopleGroup />,
      label: <Link to="/yayinkurulu">Yayın Kurulu</Link>,
    },
    {
      key: "3",
      icon: <IoDocumentTextSharp />,
      label: <Link to="/basvuru">Başvuru Esasları</Link>,
    },
    {
      key: "4",
      icon: <ImHammer2 />,
      label: <Link to="/etikkurallar">Etik Kurallar</Link>,
    },
    {
      key: "5",
      icon: <IoMdPeople />,
      label: <Link to="/hakkimizda">Hakkımızda</Link>,
    },
    {
      key: "6",
      icon: <FaCopyright />,
      label: (
        <Link
          to="https://tojsat.net/journals/tojsat/uploads/copyright-form_Tojsat.pdf"
          target="_blank"
        >
          Telif Hakkı Formu
        </Link>
      ),
    },
    {
      key: "7",
      icon: <MdReportProblem />,
      label: <Link to="/kotubildirim">Kötü Uygulama Bildirimleri</Link>,
    },
    {
      key: "8",
      icon: <FaBook />,
      label: <Link to="/onlinekitaplar">Online Kitaplar</Link>,
    },
    {
      key: "9",
      icon: <FaHandPointRight />,
      label: (
        <Link to="https://www.iste-c.net/" target="_blank">
          {" "}
          ISTEC Konferansları{" "}
        </Link>
      ),
    },
    {
      key: "10",
      icon: <IoMdMail />,
      label: <Link to="/iletisim">İletişim</Link>,
    },
    {
      key: "11",
      icon: <IoMdLogOut />,
      label: "Çıkış Yap",
      onClick: handleLogout,
    },
  ];

  const pastIssueOptions = pastIssues.map((issue) => ({
    value: issue.SayiID,
    label: `${issue.SayiAdi} - ${issue.Yil}`,
  }));

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <img
            src={HeadLogo}
            style={{ height: 50, width: 200, marginTop: 12 }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5 style={{ marginTop: 10 }}>Online Bilim ve Teknoloji Dergisi</h5>
          <p>
            üç ayda bir yayınlanan, açık erişimli uluslararası elektronik dergi
          </p>
        </div>
      </Header>
      <Layout>
        <Sider collapsed={collapsed} width="15%" style={siderStyle}>
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
              marginTop: 16,
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
            style={{ minWidth: 0, flex: "auto" }}
          />
        </Sider>
        <Content style={contentStyle}>{children}</Content>
        <Sider width="20%" style={rightSiderStyle}>
          <Card title="Güncel Sayı" style={{ width: 200, margin: 25 }}>
            {guncelSayi ? (
              <>
                <a href="#" onClick={handleGuncelSayiClick}>
                  {guncelSayi.SayiAdi}
                </a>
                {guncelSayi.KapakFotografi && (
                  <img
                    width="75%"
                    src={`http://localhost:5000/${guncelSayi.KapakFotografi}`}
                    style={{ marginTop: 10 }}
                    alt="Güncel Sayı Kapak Fotoğrafı"
                  />
                )}
              </>
            ) : (
              "Güncel sayı bulunamadı"
            )}
          </Card>
          <Card title="Geçmiş Sayılar" style={{ width: 250 }}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Geçmiş Sayılar"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              getPopupContainer={(trigger) => trigger.parentElement}
              options={pastIssueOptions}
              onChange={handleIssueChange}
            />
          </Card>
        </Sider>
      </Layout>
    </Layout>
  );
};

export default Taslak;
