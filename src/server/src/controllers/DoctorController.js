const { Doctors } = require("../models/");
const DATE = require("../utils/schedullingDate");

class DoctorController {
  // CREATE
  async create(req, res) {
    const { name, specialty, crm, availability } = req.body;
    const create_date = new Date();
    const updated_user_date = new Date();

    const checkCRM = await Doctors.findOne({ crm });
    if (checkCRM) {
      return res.status(400).json({ message: "Este CRM já está sendo usado!" });
    }

    const doctor = {
      name,
      specialty,
      crm,
      availability,
      create_date,
      updated_user_date,
    };

    try {
      await Doctors.create(doctor);

      res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  // UPDATE
  async update(req, res) {
    const id = req.params.id;

    const { name, specialty, crm, availability } = req.body;
    const updated_user_date = new Date();

    if (!crm) {
      return res.status(400).json({ message: "Este campo CRM é obrigatório!" });
    }

    const doctor = {
      name,
      specialty,
      crm,
      availability,
      updated_user_date,
    };

    try {
      const updatedDoctor = await Doctors.updateOne({ _id: id }, doctor);

      if (updatedDoctor.matchedCount === 0) {
        res.status(422).json({ message: "Usuário não cadastrado!" });
        return;
      }

      res.status(200).json({ message: `Usuário alterado com sucesso!` });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  // READ  / READ FROM ID
  async get(req, res) {
    try {
      const doctor = await Doctors.find();

      return res.status(200).json(doctor);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async getID(req, res) {
    const id = req.params.id;

    try {
      const doctor = await Doctors.findOne({ _id: id });

      if (!doctor) {
        res.status(422).json({ message: "Usuário não cadastrado!" });
        return;
      }

      return res.status(200).json(doctor);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  // DELETE
  async delete(req, res) {
    const id = req.params.id;
    const doctor = await Doctors.findOne({ _id: id });

    if (!doctor) {
      res.status(422).json({ message: "Usuário não cadastrado!" });
      return;
    }

    try {
      await Doctors.deleteOne({ _id: id });

      return res
        .status(200)
        .json({ message: "Usuário deletado com sucesso! " });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  // UPDATE SCHEDULLING
  async updateScheduling(req, res) {
    const id = req.params.id;
    const { name, specialty, crm, availability, consultation_date } =
      await Doctors.findOne({
        _id: id,
      });
    const { schedulle_date, schedulle_id, day, hours } = req.body;
    const updated_user_date = new Date();


    if (!crm) {
      res.status(403).json({ message: "Usuário não cadastrado!" });
      return;
    }

    if (!availability.find((dt) => dt.day === day)) {
      res.status(403).json({
        message: "O médico não atende no dia escolhido!",
        status: 403,
      });
      return;
    }

    if (availability.find((dt) => dt.day === day)) {
      const day_available = availability.filter((dt) => dt.day === day);
      if (!day_available.find((hr) => hr.hours.includes(hours.hour))) {
        res.status(403).json({
          message: "Não é possível atendimento neste horário!",
          status: 403,
        });
        return;
      }
    }

    if (
      consultation_date.find(
        (element) => element.schedulle_date === schedulle_date
      )
    ) {
      const schedulle = consultation_date.filter(
        (element) => element.schedulle_date === schedulle_date
      );

      if (schedulle.find((hr) => hr.hours[0].hour === hours.hour)) {
        res
          .status(403)
          .json({ message: "Este horário não está disponível!", status: 403 });
        return;
      }
    }

    consultation_date.push({ schedulle_date, schedulle_id, day, hours });

    const doctor = {
      name,
      specialty,
      crm,
      availability,
      consultation_date,
      updated_user_date,
    };

    try {
      const updatedDoctor = await Doctors.updateOne({ _id: id }, doctor);

      if (updatedDoctor.matchedCount === 0) {
        res
          .status(422)
          .json({ message: "Usuário não cadastrado!", status: 403 });
        return;
      }

      res
        .status(200)
        .json({ message: `Usuário alterado com sucesso!`, status: 201 });
    } catch (error) {
      res.status(500).json({ error, status: 403 });
      return;
    }
  }
}

module.exports = DoctorController;
