import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "antd";
import aectLogo from "../images/aectlogo.png";
import istecLogo from "../images/istec.png";
import tasetLogo from "../images/taset.png";
import tasetTVLogo from "../images/tasetTV.png";

const SayiGoster = () => {
  const { issueId } = useParams();
  const [issueDetails, setIssueDetails] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleSummaryId, setVisibleSummaryId] = useState(null); // Move this hook here

  useEffect(() => {
    const fetchIssueDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/issues/${issueId}`
        );
        console.log("Issue Details:", response.data); // Debug log
        setIssueDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching issue details:", error);
        setLoading(false);
      }
    };

    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/issues/${issueId}/articles`
        );
        console.log("Articles:", response.data); // Debug log
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchIssueDetails();
    fetchArticles();
  }, [issueId]);

  const toggleSummary = (id) => {
    setVisibleSummaryId(visibleSummaryId === id ? null : id);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!issueDetails) {
    return <p>No details found for this issue.</p>;
  }

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
        {issueDetails.KapakFotografi && (
          <img
            src={`http://localhost:5000/${issueDetails.KapakFotografi}`}
            alt="Kapak Fotografı"
          />
        )}
        <p>
          <b>
            Cilt {issueDetails.CiltNumarasi} - Sayı {issueDetails.SayiNumarasi}{" "}
            - {issueDetails.Yil}
            <p>
              <a
                href={`http://localhost:5000/${issueDetails.FullPdf}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tam Metin PDF
              </a>
            </p>
          </b>
        </p>
        <h3>Makaleler</h3>
        {articles.length > 0 ? (
          articles.map((article) => (
            <Card key={article.MakaleID} style={{ marginBottom: 10 }}>
              <h4>{article.Baslik}</h4>
              <p>
                <b>Yazar:</b> {article.Yazar}
              </p>
              <p>
                <b>Özet:</b>{" "}
                {visibleSummaryId === article.MakaleID ? (
                  <>
                    {article.Ozet}{" "}
                    <span
                      onClick={() => toggleSummary(article.MakaleID)}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      Özeti gizle
                    </span>
                  </>
                ) : (
                  <span
                    onClick={() => toggleSummary(article.MakaleID)}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    Özeti göster
                  </span>
                )}
              </p>
              <p>
                <a
                  href={`http://localhost:5000/${article.MakalePDF}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PDF
                </a>
              </p>
            </Card>
          ))
        ) : (
          <p>No articles found for this issue.</p>
        )}
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

export default SayiGoster;
