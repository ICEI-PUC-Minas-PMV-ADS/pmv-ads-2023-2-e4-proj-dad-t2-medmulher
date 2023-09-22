const router = require("express").Router();
const UserController = require("../controllers/UserController");
const user = new UserController()

router.post("/", user.create)
router.get("/", user.get);
router.get("/:id", user.getID);
router.patch("/:id", user.update);
router.delete("/:id",  user.delete);

module.exports = router;
