const request = require("supertest");
const UserController = require("../controllers/UserController");

describe("User Controller Test", () => {
  const User = new UserController();
  const baseURL = "http://localhost:3000/users";
  let user;

  it("POST User", async () => {
    const create_date = new Date();
    const updated_user_date = new Date();
    const req = {
      name: "Fulano de Tal",
      password: "Fulano@123!",
      cpf: "033.444.555-66",
      address: {
        street: "Rua A",
        district: "Alfa",
        city: "Beto",
        complement: "XYZ",
        number: "28",
        postal_code: "04452-520",
      },
      email: "test@medmul.com.br",
      create_date: create_date,
      updated_user_date: updated_user_date,
    };

    await request(baseURL).post("/").send(req).expect(201);
  });

  it("GET Users", async () => {
    const users = await request(baseURL).get("/");

    if (users) {
      user = users.body.filter((usr) => usr.email === "test@medmul.com.br");
    }

    expect(users.statusCode).toBe(200);
  });

  it("GET User ID", async () => {
    await request(baseURL).get(`/${user[0]._id}`).expect(200);
  });

  it("DELETE User ID", async () => {
    await request(baseURL).delete(`/${user[0]._id}`).expect(200);
  });
});
