const { Users } = require("../models/");

class UserController {
  // CREATE
  async create(req, res) {
    const { name, password, cpf, address, email, } = req.body;
    const create_date = new Date()
    const updated_user_date = new Date()

    const user = {
      name,
      password,
      cpf,
      address: {
        street: address.street,
        district: address.district,
        city: address.city,
        complement: address.complement,
        number: address.number,
        postal_code: address.postal_code
      },
      email,
      create_date,
      updated_user_date
    };

    try {
      await Users.create(user);

      res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  // UPDATE
  async update(req, res) {
    const id = req.params.id;

    const { name, password, cpf, address, email } = req.body;
    const updated_user_date = new Date()

    const user = {
      name,
      password,
      cpf,
      address,
      email,
      updated_user_date
    };

    try {
      const updatedUser = await Users.updateOne({ _id: id }, user);

      if (updatedUser.matchedCount === 0) {
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
      const users = await Users.find();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async getID(req, res) {
    const id = req.params.id;

    try {
      const user = await Users.findOne({ _id: id });

      if (!user) {
        res.status(422).json({ message: "Usuário não cadastrado!" });
        return;
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  // DELETE
  async delete(req, res) {
    const id = req.params.id;
    const user = await Users.findOne({ _id: id });

    if (!user) {
      res.status(422).json({ message: "Usuário não cadastrado!" });
      return;
    }

    try {
      await Users.deleteOne({ _id: id });

      res.status(200).json({ message: "Usuário deletado com sucesso! " });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

module.exports = UserController;
