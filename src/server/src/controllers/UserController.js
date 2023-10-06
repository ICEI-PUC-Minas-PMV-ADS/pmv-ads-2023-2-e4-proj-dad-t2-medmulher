const { Users } = require("../models/");
const { hash, compare } = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UserController {
  // CREATE
  async create(req, res) {
    const { name, password, cpf, address, email } = req.body;
    const create_date = new Date();
    const updated_user_date = new Date();

    const checkEmail = await Users.findOne({ email });
    if (checkEmail) {
      return res
        .status(400)
        .json({ message: "O e-mail inserido já está sendo utilizado!" });
    }

    const checkCPF = await Users.findOne({ cpf });
    if (checkCPF) {
      return res
        .status(400)
        .json({ message: "O CPF inserido já está sendo utilizado!" });
    }

    const hashedPassword = await hash(password, 8);

    const user = {
      name,
      password: hashedPassword,
      cpf,
      address: {
        street: address.street,
        district: address.district,
        city: address.city,
        complement: address.complement,
        number: address.number,
        postal_code: address.postal_code,
      },
      email,
      create_date,
      updated_user_date,
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
    const updated_user_date = new Date();
    const hashedPassword = await hash(password, 8);
    const user = {
      name,
      password: hashedPassword,
      cpf,
      address,
      email,
      updated_user_date,
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

  // Forgot Password
  async regainAccess(req, res) {
    const email = req.params.email;
    const user = await Users.findOne({ email });

    if (!user) {
      res.status(422).json({ message: "Usuário não cadastrado!" });
      return;
    }

    if (user) {
      return res.status(200).json({
        message: "Usuário encontrado com sucesso! ",
        userID: user._id,
      });
    }

    return res
      .status(500)
      .json({ error: "Problemas para se conectar ao servidor!" });
  }

  async updatePassword(req, res) {
    const id = req.params.id;
    const { password } = req.body;
    const { name, cpf, address, email } = await Users.findOne({ _id: id });
    const updated_user_date = new Date();
    const hashedPassword = await hash(password, 8);

    const user = {
      name,
      password: hashedPassword,
      cpf,
      address,
      email,
      updated_user_date,
    };

    try {
      await Users.updateOne({ _id: id }, user);

      res.status(200).json({ message: `Senha alterada com sucesso!` });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  // Authenticator / Login

  async auth(req, res) {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });

    if (!user) {
      res.status(422).json({ message: "Usuário não cadastrado!" });
      return;
    }

    const checkPassword = await compare(password, user.password);
    if (checkPassword) {
      const id = user._id;
      const token = jwt.sign({ id }, process.env.SECRET);
      return res
        .status(200)
        .json({ message: `Login efetuado com sucesso!`, auth: true, token });
    }

    return res.status(403).json({
      message: `Usuário não encontrado, verificar e-mail e senha informada.`,
      email: true,
      password: checkPassword,
    });
  }
}

module.exports = UserController;
