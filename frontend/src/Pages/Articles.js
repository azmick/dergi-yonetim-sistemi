import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Articles = () => {
  const { issueId } = useParams();
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    Baslik: "",
    Yazar: "",
    Ozet: "",
    AnahtarKelime: "",
  });
  const [articlePdf, setArticlePdf] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

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
    const formData = new FormData();
    formData.append("Baslik", newArticle.Baslik);
    formData.append("Yazar", newArticle.Yazar);
    formData.append("Ozet", newArticle.Ozet);
    formData.append("AnahtarKelime", newArticle.AnahtarKelime);
    formData.append("MakalePDF", articlePdf);

    try {
      await axios.post(
        `http://localhost:5000/api/issues/${issueId}/articles`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
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
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div>
      <h1>Makale Ekleme Sayfası</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Baslik"
          value={newArticle.Baslik}
          onChange={handleInputChange}
          placeholder="Başlık"
        />
        <input
          type="text"
          name="Yazar"
          value={newArticle.Yazar}
          onChange={handleInputChange}
          placeholder="Yazar"
        />
        <input
          type="text"
          name="Ozet"
          value={newArticle.Ozet}
          onChange={handleInputChange}
          placeholder="Özet"
        />
        <input
          type="text"
          name="AnahtarKelime"
          value={newArticle.AnahtarKelime}
          onChange={handleInputChange}
          placeholder="Anahtar Kelime"
        />
        <input type="file" name="MakalePDF" onChange={handleFileChange} />
        <button type="submit">Makale Ekle</button>
      </form>
      <h2>Makale Listesi</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.MakaleID}>
            {article.Baslik} - {article.Yazar} -{" "}
            <span>{truncateText(article.Ozet, 50)}</span> -{" "}
            {article.AnahtarKelime} - {article.MakalePDF}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
