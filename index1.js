const express = require("express")
const app = express();
const port = 3001;

app.get("/", (req, res) =>{
	return res.send("Welcome To Home Page")
});

app.get("/about", (req,res) => {
	return res.send(`NAMASTE 🙏 ${req.query.name}, ${req.query.id}`)
})

app.listen(port, () => {
	console.log(`Server started on ${port}`);
})