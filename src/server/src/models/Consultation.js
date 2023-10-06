const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  health_status: {
    type: String,
  },
  symptoms: {
    type: String,
  },
  observation: {
    type: String,
  },
  doctor_id: {
    type: String,
    require: true,
  },
  schedulle_date: { type: String, required: true, default: "" },
  day: { type: String, require: true },
  patient_id: {
    type: String,
    require: true,
  },
  patient_name: {
    type: String,
    require: true,
  },
  hour: {
    type: String,
    required: true,
    default: "",
  },
  schedulle_id: {
    type: String
  },
  open: {
    type: Boolean,
    required: true,
    default: true,
  },
  create_date: Date,
  updated_user_date: Date,
});

module.exports = mongoose.model("consultations", consultationSchema);
