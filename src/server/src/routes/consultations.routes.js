const router = require("express").Router();
const ConsulationsController = require("../controllers/ConsultationController");
const consultation = new ConsulationsController();

router.post("/:id/consult", consultation.create);
router.get("/", consultation.get);
router.get("/:id", consultation.getID);
router.patch("/:id", consultation.update);
router.delete("/:id", consultation.delete);

module.exports = router;
