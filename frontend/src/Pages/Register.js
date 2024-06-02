import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // CSS dosyasını ekle

const Register = () => {
  const [KullaniciAdi, setKullaniciAdi] = useState("");
  const [Email, setEmail] = useState("");
  const [Sifre, setSifre] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          KullaniciAdi,
          Email,
          Sifre,
        }
      );
      setSuccess("Kayıt başarılı. Lütfen giriş yapın.");
      setError("");
    } catch (error) {
      console.error("Register error:", error);
      setError("Kayıt başarısız. Lütfen tekrar deneyin.");
      setSuccess("");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Üye Ol</h2>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={KullaniciAdi}
          onChange={(e) => setKullaniciAdi(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={Sifre}
          onChange={(e) => setSifre(e.target.value)}
          required
        />
        <button type="submit">Üye Ol</button>
        <button type="button" onClick={() => navigate("/")}>
          Giriş Yap
        </button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default Register;
