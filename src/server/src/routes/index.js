const { Router } = require("express");

const usersRoutes = require("./users.routes");
const doctorsRoutes = require("./doctors.routes");
const consultationsRoutes = require("./consultations.routes");

const routes = Router();
routes.use("/users", usersRoutes);
routes.use("/doctors", doctorsRoutes);
routes.use("/consultations", consultationsRoutes);

module.exports = routes;