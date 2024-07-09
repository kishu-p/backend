const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 30001;

app.get("/", (req, res) =>{
	return res.send("Welcome to home Page")
});

app.get("/users", (req, res) => {
    return res.json(users);
});
app.listen(port, () => {
    console.log(`Server is rendering on ${port}`);
});

// const express = require("express")
// const app = express();
// const port = 3001;

// app.get("/", (req, res) =>{
// 	return res.send("Welcome to home Page")
// });

// app.get("/about", (req,res) => {
// 	return res.send(`Bonjour 🙏 ${req.query.name}, ${req.query.id}`)
// });

// app.get("/users", (req, res) => {
//     return res.json(users);
// });

// app.listen(port, () => {
// 	console.log(`Server started on ${port}`);
// })