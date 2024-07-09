const express = require("express")
const app = express();
const port = 3001;

app.get("/", (req, res) =>{
	return res.send("Welcome to home Page")
});

app.get("/about", (req,res) => {
	return res.send(`Bonjour 🙏 ${req.query.name}, ${req.query.id}`)
})

app.listen(port, () => {
	console.log(`Server started on ${port}`);
})