const express = require("express");
const path = require("node:path");
const { connectToMongoDb } = require("./connect");

const URL = require("./models/urlSchema");

const urlRoute = require("./routes/urlRoutes");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user")

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
app.use("/user", userRoute)

app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", { urls: allUrls });
});


app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
