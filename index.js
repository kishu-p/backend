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
// REST API
app.get("/", (req, res) => {
	return res.send("Welcome to home Page");
});

app.get("/api/users", (req,res) => {
	res.setHeader("X-MyName", "Kishu Singh")
	return res.json(users)
})

app.get("/users", (req, res) => {
	return res.json(users);
});

app
	.route("/api/users/:userId")
	.get((req, res) => {
		const userId = Number(req.params.userId);
		const user = users.find((user) => user.id === userId);
		return res.json(user);
	})
	.patch((req, res) => {
		// Edit User with Id
		return res.json({ status: "Pending" });
	})
	.delete((req, res) => {
		// Delete User with Id
		return res.json({ status: "Pending" });
	});

app.post("/user", (req, res) => {
	return res.json({ status: "Pending" });
});

app.listen(port, () => {
	console.log(`Server started on ${port}`);
});
