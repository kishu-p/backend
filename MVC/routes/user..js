const express = require("express");
const router = express.Router();

// REST API
router.get("/", (req, res) => {
	return res.send("Welcome to home Page");
});

router.get("/about", (req, res) => {
	return res.send(`Bonjour 🙏 ${req.query.name}, ${req.query.id}`);
});

app.get("/api/users", (req, res) => {
	res.setHeader("X-MyName", "Kishu Singh");
	// X added to make custom header
	return res.json(users);
});

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

app.post("/userName/setting", (req, res) => {
	const body = req.body;
	users.push({ ...body, id: users.length + 1 });
	fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
		return res.status(201).json({ status: "Success", id: users.length });
	});
});

module.exports = router;
