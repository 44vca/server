const Router = require("../framework/Router");
const bodyParser = require("../framework/bodyParser");

const router = new Router();

const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Tima" },
];

router.get("/users", (req, res) => {
  res.send(users);
});

router.post("/users", (req, res) => {
  res.send(users);
});

module.exports = router;
