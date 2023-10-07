// DESCRIBE -> bloco de tests - tests suites
// IT or TEST -> declara único teste unitário -  tests cases
// EXPECT -> asserções do resultado - validar resultados

const request = require("supertest");
const ConsultationController = require("../controllers/ConsultationController");

describe("Consultation Controller Test", () => {
  const Consultation = new ConsultationController();
  const baseURL = "http://localhost:3000/consultations/";
  let consultation;

  it("POST Consultation", async () => {
    const req = {
      name: "Rafael Penido",
      specialty: "Ginecologista",
      health_status: "Teste1",
      symptoms: "Teste2",
      observation: "Teste3",
      doctor_id: "6521d243717710508dda2e36",
      patient_id: "6521d2da4c44ffa450e8a929",
      patient_name: "De Souza",
      hour: "09:30",
      day: "Monday",
      schedulle_date: "2023-09-28",
      open: "false",
    };

    await request(baseURL).post(`${req.patient_id}/consult`).send(req).expect(201);
  });

  it("GET Consultations", async () => {
    const consultations = await request(baseURL).get("/");

    if (consultations) {
      consultation = consultations.body.filter(
        (consult) => consult.name === "Rafael Penido"
      );
    }

    expect(consultations.statusCode).toBe(200);
  });
  
  it("GET Consultations ID", async () => {
    await request(baseURL).get(`/${consultation[0]._id}`).expect(200);
  });

  it("PATCH Consultation", async () => {
    const req = {
      patient_name: "Souza ",
      hour: "10:30",
      day: "Monday",
      schedulle_date: "2023-09-29",
    };

    await request(baseURL).patch(`/${consultation[0]._id}`).send(req).expect(200);
  });

  it("DELETE Consultation", async () => {
    await request(baseURL).delete(`${consultation[0]._id}`).expect(200);
  });
});
