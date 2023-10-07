// DESCRIBE -> bloco de tests - tests suites
// IT or TEST -> declara único teste unitário -  tests cases
// EXPECT -> asserções do resultado - validar resultados

const request = require("supertest");
const ConsultationController = require("../controllers/ConsultationController");

describe("Consultation Controller Test", () => {
    const Consultation = new ConsultationController();
    const baseURL = "http://localhost:3000/consultations";
    let consultation;

    it("POST Consultation", async () => {
        const create_date = new Date();
        const updated_user_date = new Date();
        const req = {
            name: "Rafael Penido",
            specialty: "Ginecologista",
            health_status: "Teste1",
            symptoms: "Teste2",
            observation: "Teste3",
            doctor_id: "651745e286e4bd304973e91f",
            patient_id: "65164ca0ec85218d6ad68423",
            patient_name: "De Souza",
            hour: "08:30",
            day: "Monday",
            schedulle_date: "2023-09-28",
            open: "false",
        };

        await request(baseURL).post("/").send(req).expect(201);
    });
});

/* 
it("GET Consultations", async () => {
    const consultations = await request(baseURL).get("/");

    if (consultations) {
      
    }

    expect(consultations.statusCode).toBe(200);
  });
*/

it("DELETE Consultation", async () => {
    await request(baseURL).delete(`/${consultation[0]._id}`).expect(200);
});