// Diğer importlar ve konfigürasyonlar...
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { Issue, Article, sequelize } = require("../models");

// Storage configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Get all issues
router.get("/", async (req, res) => {
  try {
    const issues = await Issue.findAll({
      include: [
        {
          model: Article,
          attributes: [],
        },
      ],
      attributes: {
        include: [
          [
            sequelize.literal(
              `(SELECT COUNT(*) FROM "Articles" WHERE "Articles"."SayiID" = "Issue"."SayiID")`
            ),
            "makaleSayisi",
          ],
        ],
      },
    });
    res.json(issues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

// Create a new issue
router.post(
  "/",
  upload.fields([{ name: "KapakFotografi" }, { name: "FullPdf" }]),
  async (req, res) => {
    try {
      const {
        SayiAdi,
        CiltNumarasi,
        SayiNumarasi,
        Yil,
        BasEditorMesaj,
        EditorMesaj,
        GuncelMi,
      } = req.body;
      const issue = await Issue.create({
        SayiAdi,
        CiltNumarasi,
        SayiNumarasi,
        Yil,
        BasEditorMesaj,
        EditorMesaj,
        KapakFotografi: req.files.KapakFotografi
          ? req.files.KapakFotografi[0].path
          : null,
        FullPdf: req.files.FullPdf ? req.files.FullPdf[0].path : null,
        GuncelMi: GuncelMi === "true",
      });
      res.json(issue);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Sunucu hatası" });
    }
  }
);

// Get a specific issue by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findByPk(id, {
      include: Article,
    });
    if (!issue) {
      return res.status(404).json({ message: "Sayı bulunamadı" });
    }
    res.json(issue);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

// Get all articles for a specific issue
router.get("/:id/articles", async (req, res) => {
  try {
    const { id } = req.params;
    const articles = await Article.findAll({
      where: {
        SayiID: id,
      },
    });
    if (!articles) {
      return res.status(404).json({ message: "Makaleler bulunamadı" });
    }
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

// Create a new article for a specific issue
router.post("/:id/articles", upload.single("MakalePDF"), async (req, res) => {
  try {
    const { id } = req.params;
    const { Baslik, Yazar, Ozet, AnahtarKelime } = req.body;
    const article = await Article.create({
      SayiID: id,
      Baslik,
      Yazar,
      Ozet,
      AnahtarKelime,
      MakalePDF: req.file ? req.file.path : null,
    });
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

// Update an article for a specific issue
router.put(
  "/:issueId/articles/:articleId",
  upload.single("MakalePDF"),
  async (req, res) => {
    try {
      const { issueId, articleId } = req.params;
      const { Baslik, Yazar, Ozet, AnahtarKelime } = req.body;

      const article = await Article.findOne({
        where: { SayiID: issueId, MakaleID: articleId },
      });
      if (!article) {
        return res.status(404).json({ message: "Makale bulunamadı" });
      }

      article.Baslik = Baslik;
      article.Yazar = Yazar;
      article.Ozet = Ozet;
      article.AnahtarKelime = AnahtarKelime;

      if (req.file) {
        article.MakalePDF = req.file.path;
      }

      await article.save();
      res.json(article);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Sunucu hatası" });
    }
  }
);

// Update an issue
router.put(
  "/:id",
  upload.fields([{ name: "KapakFotografi" }, { name: "FullPdf" }]),
  async (req, res) => {
    try {
      const { id } = req.params;
      const {
        SayiAdi,
        CiltNumarasi,
        SayiNumarasi,
        Yil,
        BasEditorMesaj,
        EditorMesaj,
        GuncelMi,
      } = req.body;

      const issue = await Issue.findByPk(id);
      if (!issue) {
        return res.status(404).json({ message: "Sayı bulunamadı" });
      }

      issue.SayiAdi = SayiAdi;
      issue.CiltNumarasi = CiltNumarasi;
      issue.SayiNumarasi = SayiNumarasi;
      issue.Yil = Yil;
      issue.BasEditorMesaj = BasEditorMesaj;
      issue.EditorMesaj = EditorMesaj;
      issue.GuncelMi = GuncelMi === "true";

      if (req.files.KapakFotografi) {
        issue.KapakFotografi = req.files.KapakFotografi[0].path;
      }
      if (req.files.FullPdf) {
        issue.FullPdf = req.files.FullPdf[0].path;
      }

      await issue.save();
      res.json(issue);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Sunucu hatası" });
    }
  }
);

// Delete an issue
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findByPk(id);
    if (!issue) {
      return res.status(404).json({ message: "Sayı bulunamadı" });
    }

    await issue.destroy();
    res.json({ message: "Sayı başarıyla silindi" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

// Delete a specific article by ID
router.delete("/:issueId/articles/:articleId", async (req, res) => {
  try {
    const { issueId, articleId } = req.params;
    const article = await Article.findOne({
      where: { SayiID: issueId, MakaleID: articleId },
    });
    if (!article) {
      return res.status(404).json({ message: "Makale bulunamadı" });
    }

    await article.destroy();
    res.json({ message: "Makale başarıyla silindi" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

module.exports = router;
