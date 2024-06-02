import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState({
    SayiAdi: "",
    CiltNumarasi: "",
    SayiNumarasi: "",
    Yil: "",
    BasEditorMesaj: "",
    EditorMesaj: "",
    GuncelMi: false,
  });
  const [coverImage, setCoverImage] = useState(null);
  const [fullPdf, setFullPdf] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [issueId, setIssueId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else if (role !== "admin") {
      navigate("/home");
    } else {
      fetchIssues();
    }
  }, [navigate, role]);

  const fetchIssues = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/issues");
      setIssues(response.data);
    } catch (error) {
      console.error("Fetch issues error:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIssue({ ...newIssue, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setNewIssue({ ...newIssue, GuncelMi: e.target.checked });
  };

  const handleFileChange = (e) => {
    if (e.target.name === "KapakFotografi") {
      setCoverImage(e.target.files[0]);
    } else if (e.target.name === "FullPdf") {
      setFullPdf(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(newIssue).forEach((key) => {
      formData.append(key, newIssue[key]);
    });
    formData.append("KapakFotografi", coverImage);
    formData.append("FullPdf", fullPdf);

    try {
      if (editMode) {
        await axios.put(
          `http://localhost:5000/api/issues/${issueId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setEditMode(false);
        setIssueId(null);
      } else {
        await axios.post("http://localhost:5000/api/issues", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      fetchIssues();
      setNewIssue({
        SayiAdi: "",
        CiltNumarasi: "",
        SayiNumarasi: "",
        Yil: "",
        BasEditorMesaj: "",
        EditorMesaj: "",
        GuncelMi: false,
      });
      setCoverImage(null);
      setFullPdf(null);
    } catch (error) {
      console.error("Submit issue error:", error);
    }
  };

  const handleEdit = (issue) => {
    setNewIssue({
      SayiAdi: issue.SayiAdi,
      CiltNumarasi: issue.CiltNumarasi,
      SayiNumarasi: issue.SayiNumarasi,
      Yil: issue.Yil,
      BasEditorMesaj: issue.BasEditorMesaj,
      EditorMesaj: issue.EditorMesaj,
      GuncelMi: issue.GuncelMi,
    });
    setEditMode(true);
    setIssueId(issue.SayiID);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/issues/${id}`);
      fetchIssues();
    } catch (error) {
      console.error("Delete issue error:", error);
    }
  };

  const filteredIssues = issues.filter((issue) =>
    issue.SayiAdi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (role !== "admin") {
    return null;
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Admin Panel</h1>
        <button className="logout-button" onClick={handleLogout}>
          Çıkış Yap
        </button>
      </div>
      <h2>Sayı Ekle</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Sayı Adı</label>
          <input
            type="text"
            name="SayiAdi"
            value={newIssue.SayiAdi}
            onChange={handleInputChange}
            placeholder="Sayı Adı"
            required
          />
        </div>
        <div className="form-group">
          <label>Sayı Numarası</label>
          <input
            type="number"
            name="SayiNumarasi"
            value={newIssue.SayiNumarasi}
            onChange={handleInputChange}
            placeholder="Sayı Numarası"
            required
          />
        </div>
        <div className="form-group">
          <label>Baş Editor Mesajı</label>
          <textarea
            name="BasEditorMesaj"
            value={newIssue.BasEditorMesaj}
            onChange={handleInputChange}
            placeholder="Baş Editor Mesajı"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Kapak Fotoğrafı</label>
          <input
            type="file"
            name="KapakFotografi"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Cilt Numarası</label>
          <input
            type="number"
            name="CiltNumarasi"
            value={newIssue.CiltNumarasi}
            onChange={handleInputChange}
            placeholder="Cilt Numarası"
            required
          />
        </div>
        <div className="form-group">
          <label>Yıl</label>
          <input
            type="text"
            name="Yil"
            value={newIssue.Yil}
            onChange={handleInputChange}
            placeholder="Yıl"
            required
          />
        </div>
        <div className="form-group">
          <label>Editor Mesajı</label>
          <textarea
            name="EditorMesaj"
            value={newIssue.EditorMesaj}
            onChange={handleInputChange}
            placeholder="Editor Mesajı"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Tam PDF</label>
          <input
            type="file"
            name="FullPdf"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="GuncelMi"
            checked={newIssue.GuncelMi}
            onChange={handleCheckboxChange}
          />
          <label>Güncel Mi</label>
        </div>
        <button type="submit">{editMode ? "Güncelle" : "Sayı Ekle"}</button>
      </form>

      <h2>Sayı Listesi</h2>
      <input
        type="text"
        className="search-bar"
        placeholder="Sayı Adı Ara..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="scrollable-table">
        <table>
          <thead>
            <tr>
              <th>Kapak Fotoğrafı</th>
              <th>Sayı Adı</th>
              <th>Cilt Numarası</th>
              <th>Sayı Numarası</th>
              <th>Yıl</th>
              <th>Güncel Mi</th>
              <th>PDF</th>
              <th>Makale Sayısı</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {filteredIssues.map((issue) => (
              <tr key={issue.SayiID}>
                <td>
                  {issue.KapakFotografi && (
                    <img
                      src={`http://localhost:5000/${issue.KapakFotografi}`}
                      alt="Kapak Fotoğrafı"
                      style={{ width: "50px", height: "70px" }} // Adjust the size as needed
                    />
                  )}
                </td>{" "}
                {/* Add this cell */}
                <td>
                  <Link to={`/issues/${issue.SayiID}`}>{issue.SayiAdi}</Link>
                </td>
                <td>{issue.CiltNumarasi}</td>
                <td>{issue.SayiNumarasi}</td>
                <td>{issue.Yil}</td>
                <td>{issue.GuncelMi ? "Evet" : "Hayır"}</td>
                <td>
                  <a
                    href={`http://localhost:5000/${issue.FullPdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF Görüntüle
                  </a>
                </td>
                <td>{issue.makaleSayisi}</td>
                <td className="table-actions">
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(issue)}
                  >
                    Düzenle
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(issue.SayiID)}
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

export default Admin;
