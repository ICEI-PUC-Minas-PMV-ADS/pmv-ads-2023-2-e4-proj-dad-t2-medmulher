const router = require("express").Router();
const DoctorController = require("../controllers/DoctorController");
const doctor = new DoctorController();

router.post("/", doctor.create);
router.get("/", doctor.get);
router.patch("/:id", doctor.update);
router.delete("/:id", doctor.delete);
router.get("/:id", doctor.getID);
router.patch("/:id/schedulling", doctor.updateScheduling);

module.exports = router;
