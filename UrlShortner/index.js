const express = require("express");
const path = require("node:path");
const { connectToMongoDb } = require("./connect");
const urlRoute = require("./routes/urlRoutes");
const staticRoute = require("./routes/staticRouter");
const URL = require("./models/urlSchema");

const app = express();
const PORT = 8000;

connectToMongoDb("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", { urls: allUrls });
});
app.get("/:shortId", async (req, res) => {
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
  // res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
