const express = require("express");
const { generateNewShortID,   handleGetAnalytics,
} = require("../controllers/url");
const router = express.Router();

router.post("/", generateNewShortID);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
