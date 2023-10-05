const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  crm: {
    type: String,
  },
  availability: { type: [""] },
  consultation_date: [
    {
      schedulle_date: { type: String, required: true, default: "" },
      schedulle_id: {type: String},
      day: { type: String, require: true },
      hours: [
        {
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
          open: {
            type: Boolean,
            required: true,
            default: true,
          },
        },
      ],
    },
  ],
  create_date: Date,
  updated_user_date: Date,
});

module.exports = mongoose.model("Doctors", doctorSchema);
