var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Prasses",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "David Becks",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express Mini Message Board",
    messages: messages,
  });
});

// GET /new page
router.get("/new", function (req, res, err) {
  res.render("form");
});
// In order to get and use the data from your form, you will need to access the
// contents of your form inside router.post()
// as an object called req.body.
// The individual fields inside the body object
// are named according to the name attribute on your inputs
// (the value of <input name="messageText"> will show up as req.body.messageText
// inside the router.post function).
router.post("/new", function (req, res) {
  // Destructuring as req.body is an object containing as follows
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});
module.exports = router;
