const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { Issue, Article, sequelize } = require("../models");

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

module.exports = router;
