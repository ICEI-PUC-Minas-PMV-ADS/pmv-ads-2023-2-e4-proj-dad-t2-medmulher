const { Consultations, Doctors } = require("../models/");
const { Users } = require("../models/");
const DATE = require("../utils/schedullingDate");
const fetch = require("node-fetch");

class ConsulationsController {
  // CREATE
  async create(req, res) {
    const id = req.params.id;
    const {
      name,
      specialty,
      health_status,
      symptoms,
      observation,
      doctor_id,
      patient_id,
      patient_name,
      hour,
      day,
      schedulle_date,
      open,
    } = req.body;
    const schedulle_id = Math.random();
    const create_date = new Date();
    const updated_user_date = new Date();

    if (!specialty) {
      return res
        .status(400)
        .json({ message: "O campo ESPECIALIDADE é obrigatório!" });
    }

    if (!hour) {
      return res
        .status(400)
        .json({ message: "O campo HORÁRIO DE AGENDAMENTO é obrigatório!" });
    }

    const data = {
      schedulle_date: `${schedulle_date}`,
      schedulle_id: schedulle_id,
      day: `${day}`,
      hours: {
        patient_id: `${id}`,
        patient_name: `${name}`,
        hour: `${hour}`,
        open: false,
      },
    };

    const response = await fetch(
      `http://localhost:3000/doctors/${doctor_id}/schedulling`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => response.json());

    if (response.status === 403) {
      res.status(403).json({ message: response.message });
      return;
    }

    const consult = {
      name,
      specialty,
      health_status,
      symptoms,
      observation,
      doctor_id,
      schedulle_date,
      day,
      patient_id: id,
      patient_name: name,
      hour: hour,
      schedulle_id,
      open: false,
      create_date,
      updated_user_date,
    };

    try {
      await Consultations.create(consult);

      res.status(201).json({ message: `Agendamento criado com sucesso!` });
      return;
    } catch (err) {
      res.status(403).json({ message: data.message });
    }
  }

  // UPDATE
  async update(req, res) {
    const id = req.params.id;

    const {
      name,
      specialty,
      health_status,
      symptoms,
      observation,
      schedulle_date,
      day,
      patient_name,
      hour,
    } = req.body;
    const updated_user_date = new Date();
    const cons = await Consultations.findOne({ _id: id });

    if (!schedulle_date) {
      return res
        .status(400)
        .json({ message: "É necessário preencher data e o horário!" });
    }

    const doctor = await Doctors.findOne({ _id: cons.doctor_id });

    if (!doctor) {
      res.status(404).json({ message: "Agendamento não encontrado!" });
      return;
    }

    if (doctor.consultation_date.length === 0) {
      res.status(404).json({ message: "Agendamento não encontrado!" });
      return;
    }

    const newArr = doctor.consultation_date.filter(
      (cs) => cs.schedulle_id !== cons.schedulle_id
    );

    const consult = {
      name,
      specialty,
      health_status,
      symptoms,
      observation,
      schedulle_date,
      day,
      patient_name,
      hour,
      updated_user_date,
    };

    const doc = {
      name: doctor.name,
      specialty: doctor.specialty,
      crm: doctor.crm,
      availability: doctor.availability,
      consultation_date: newArr,
      updated_user_date,
    };

    try {
      const updatedConsult = await Consultations.updateOne(
        { _id: id },
        consult
      );

      if (updatedConsult.matchedCount === 0) {
        res.status(422).json({ message: "Usuário não cadastrado!" });
        return;
      }

      await Doctors.updateOne({ _id: cons.doctor_id }, doc);

      const data = {
        schedulle_date: `${schedulle_date}`,
        schedulle_id: cons.schedulle_id,
        day: `${day}`,
        hours: {
          patient_id: `${cons.patient_id}`,
          patient_name: `${patient_name}`,
          hour: `${hour}`,
          open: false,
        },
      };

      const response = await fetch(
        `http://localhost:3000/doctors/${cons.doctor_id}/schedulling`,
        {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      ).then((response) => response.json());

      if (response.status === 403) {
        res.status(403).json({ message: response.message });
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
      const consult = await Consultations.find();

      return res.status(200).json(consult);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async getID(req, res) {
    const id = req.params.id;

    try {
      const consult = await Consultations.findOne({ _id: id });

      if (!consult) {
        res.status(422).json({ message: "Agendamento não encontrado!" });
        return;
      }

      return res.status(200).json(consult);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  // DELETE
  async delete(req, res) {
    const id = req.params.id;
    const consult = await Consultations.findOne({ _id: id });
    const updated_user_date = new Date();

    if (!consult) {
      res.status(404).json({ message: "Agendamento não encontrado!" });
      return;
    }

    const doctor = await Doctors.findOne({ _id: consult.doctor_id });

    if (!doctor) {
      res.status(404).json({ message: "Agendamento não encontrado!" });
      return;
    }

    if (doctor.consultation_date.length === 0) {
      res.status(404).json({ message: "Agendamento não encontrado!" });
      return;
    }

    const newArr = doctor.consultation_date.filter(
      (cons) => cons.schedulle_id !== consult.schedulle_id
    );

    const doc = {
      name: doctor.name,
      specialty: doctor.specialty,
      crm: doctor.crm,
      availability: doctor.availability,
      consultation_date: newArr,
      updated_user_date,
    };

    try {
      await Consultations.deleteOne({ _id: id });
      await Doctors.updateOne({ _id: consult.doctor_id }, doc);

      return res
        .status(200)
        .json({ message: "Agendamento deletado com sucesso! " });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = ConsulationsController;
