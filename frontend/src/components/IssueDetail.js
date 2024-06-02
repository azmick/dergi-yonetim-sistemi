import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./IssueDetail.css";

const IssueDetail = () => {
  const { issueId } = useParams();
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    Baslik: "",
    Yazar: "",
    Ozet: "",
    AnahtarKelime: "",
  });
  const [articlePdf, setArticlePdf] = useState(null);
  const [editingArticle, setEditingArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles();
  }, [issueId]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/issues/${issueId}/articles`
      );
      setArticles(response.data);
    } catch (error) {
      console.error("Fetch articles error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const handleFileChange = (e) => {
    setArticlePdf(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("Baslik", newArticle.Baslik);
    formData.append("Yazar", newArticle.Yazar);
    formData.append("Ozet", newArticle.Ozet);
    formData.append("AnahtarKelime", newArticle.AnahtarKelime);
    if (articlePdf) {
      formData.append("MakalePDF", articlePdf);
    }

    try {
      if (editingArticle) {
        await axios.put(
          `http://localhost:5000/api/issues/${issueId}/articles/${editingArticle.MakaleID}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setEditingArticle(null);
        setSuccess("Makale başarıyla güncellendi.");
      } else {
        await axios.post(
          `http://localhost:5000/api/issues/${issueId}/articles`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setSuccess("Makale başarıyla eklendi.");
      }
      fetchArticles();
      setNewArticle({
        Baslik: "",
        Yazar: "",
        Ozet: "",
        AnahtarKelime: "",
      });
      setArticlePdf(null);
    } catch (error) {
      console.error("Submit article error:", error.response?.data || error);
      setError(
        "Makale gönderme hatası: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  const handleEdit = (article) => {
    setNewArticle({
      Baslik: article.Baslik,
      Yazar: article.Yazar,
      Ozet: article.Ozet,
      AnahtarKelime: article.AnahtarKelime,
    });
    setArticlePdf(null);
    setEditingArticle(article);
  };

  const handleDelete = async (articleId) => {
    const confirmed = window.confirm(
      "Bu makaleyi silmek istediğinizden emin misiniz?"
    );
    if (!confirmed) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/issues/${issueId}/articles/${articleId}`
      );
      fetchArticles();
      setSuccess("Makale başarıyla silindi.");
    } catch (error) {
      console.error("Delete article error:", error);
      setError(
        "Makale silme hatası: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  const handleIssueList = () => {
    navigate("/admin");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const filteredArticles = articles.filter((article) =>
    article.Baslik.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={handleIssueList} className="issuelistButton">
          Sayı Listesine Dön
        </button>
        <button onClick={handleLogout} className="logoutButton">
          Çıkış Yap
        </button>
      </div>
      <h1>Makale Ekleme Sayfası</h1>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Baslik">Başlık</label>
          <input
            type="text"
            id="Baslik"
            name="Baslik"
            value={newArticle.Baslik}
            onChange={handleInputChange}
            placeholder="Başlık"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Yazar">Yazar</label>
          <input
            type="text"
            id="Yazar"
            name="Yazar"
            value={newArticle.Yazar}
            onChange={handleInputChange}
            placeholder="Yazar"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Ozet">Özet</label>
          <textarea
            id="Ozet"
            name="Ozet"
            value={newArticle.Ozet}
            onChange={handleInputChange}
            placeholder="Özet"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="AnahtarKelime">Anahtar Kelime</label>
          <input
            type="text"
            id="AnahtarKelime"
            name="AnahtarKelime"
            value={newArticle.AnahtarKelime}
            onChange={handleInputChange}
            placeholder="Anahtar Kelime"
          />
        </div>
        <div className="form-group">
          <label htmlFor="MakalePDF">PDF Yükle</label>
          <input
            type="file"
            id="MakalePDF"
            name="MakalePDF"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editingArticle ? "Güncelle" : "Makale Ekle"}
        </button>
      </form>
      <h2>Makale Listesi</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Başlığa göre ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="scrollable-table">
        <table className="article-table">
          <thead>
            <tr>
              <th>Başlık</th>
              <th>Özet</th>
              <th>Anahtar Kelime</th>
              <th>Yazar</th>
              <th>PDF</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {filteredArticles.map((article) => (
              <tr key={article.MakaleID}>
                <td>{article.Baslik}</td>
                <td>{truncateText(article.Ozet, 50)}</td>
                <td>{article.AnahtarKelime}</td>
                <td>{article.Yazar}</td>
                <td>
                  <a
                    href={`http://localhost:5000/${article.MakalePDF}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.MakalePDF.split("\\").pop()}
                  </a>
                </td>
                <td className="table-actions">
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(article)}
                  >
                    Düzenle
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(article.MakaleID)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueDetail;
