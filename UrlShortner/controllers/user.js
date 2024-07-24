const User = require("../models/user");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/login");
}
async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });
  console.log("User", user);
  if (!user)
    return res.render("login", {
      error: "Invalid username or password",
    });
  return res.redirect("/");
}

module.exports = { handleUserSignup, handleUserLogin };
