const express = require("express");
const { connectToMongoDb } = require("./connect");
const app = express();
const port = 8000;

connectToMongoDb("mongodb://localhost:27017/short-url").then(() => {
	console.log("Connected Successfully");
});
app.listen(port, () => {
	console.log(`server is rendering on ${port}`);
});
