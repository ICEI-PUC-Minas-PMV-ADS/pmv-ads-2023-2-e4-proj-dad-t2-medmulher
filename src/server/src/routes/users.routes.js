const router = require("express").Router();
const UserController = require("../controllers/UserController");
const user = new UserController()

router.post("/", user.create)
router.get("/", user.get);
router.patch("/:id", user.update);
router.delete("/:id",  user.delete);
router.get("/:id", user.getID);
router.get("/email/:email", user.regainAccess);
router.patch("/:id/new-password", user.updatePassword);

module.exports = router;
