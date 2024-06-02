import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import IssueDetail from "./components/IssueDetail";
import YayinKurulu from "./Pages/YayinKurulu";
import Taslak from "./Pages/Taslak";
import Basvuru from "./Pages/Basvuru";
import EtikKurallar from "./Pages/EtikKurallar";
import Hakkımızda from "./Pages/Hakkımızda";
import KotuBildirim from "./Pages/KotuBildirim";
import OnlineKitaplar from "./Pages/OnlineKitaplar";
import İletisim from "./Pages/İletisim";
import SayiGoster from "./Pages/SayiGoster";
import Register from "./Pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/home"
          element={
            <Taslak>
              <Home />
            </Taslak>
          }
        />
        <Route
          path="/yayinkurulu"
          element={
            <Taslak>
              <YayinKurulu />
            </Taslak>
          }
        />
        <Route path="/issues/:issueId" element={<IssueDetail />} />
        <Route
          path="/basvuru"
          element={
            <Taslak>
              <Basvuru />
            </Taslak>
          }
        />
        <Route
          path="/etikkurallar"
          element={
            <Taslak>
              <EtikKurallar />
            </Taslak>
          }
        />
        <Route
          path="/hakkimizda"
          element={
            <Taslak>
              <Hakkımızda />
            </Taslak>
          }
        />

        <Route
          path="/kotubildirim"
          element={
            <Taslak>
              <KotuBildirim />
            </Taslak>
          }
        />
        <Route
          path="/onlinekitaplar"
          element={
            <Taslak>
              <OnlineKitaplar />
            </Taslak>
          }
        />
        <Route
          path="/iletisim"
          element={
            <Taslak>
              <İletisim />
            </Taslak>
          }
        />
        <Route
          path="/SayiGoster/:issueId"
          element={
            <Taslak>
              <SayiGoster />
            </Taslak>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
