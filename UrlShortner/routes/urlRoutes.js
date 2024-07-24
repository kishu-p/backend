const express = require("express");
const {
  generateNewShortID,
  handleGetAnalytics,
} = require("../controllers/url");
const URL = require("../models/urlSchema");

const router = express.Router();

router.post("/", generateNewShortID);
router.get("/analytics/:shortId", handleGetAnalytics);
router.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  console.log(entry);
  res.redirect(entry.redirectUrl);
});
module.exports = router;
