const express = require("express");
const fs = require("node:fs");

const users = require("./MOCK_DATA.json");
const app = express();
const port = 3001;

// Middleware - Plugins

// app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
	console.log("Hello from middleware 1");
	next();
});
app.use((req, res, next) => {
	console.log("Hello from middleware 2");
	next();
});

app.listen(port, () => {
	console.log(`Server started on ${port}`);
});
