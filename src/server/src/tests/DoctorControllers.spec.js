// DESCRIBRE
// IT OR TEST
// EXPECT

const request = require("supertest");
const DoctorController = require("../controllers/DoctorController");

describe("Doctor Controller Test", () => {
  const Doctor = new DoctorController();
  const baseURL = "http://localhost:3000/doctors";
  let doctor;

  it("POST Doctor", async () => {
    const create_date = new Date();
    const updated_user_date = new Date();
    const req = {
      name: "Fulano Test",
      specialty: "Pediatra",
      crm: "CRM500",
      availability: [
        {
          day: "Monday",
          hours: [
            "07:30",
            "08:30",
            "09:30",
            "10:30",
            "11:30",
          ],
        },
        {
          day: "Tuesday",
          hours: [
            "08:00",
            "09:00",
            "10:00",
            "11:00",
          ],
        },
      ],
      create_date: create_date,
      updated_user_date: updated_user_date,
    };

    await request(baseURL).post("/").send(req).expect(201);
  });

  it("GET Doctors", async () => {
    const doctors = await request(baseURL).get("/");

    if (doctors) {
      doctor = doctors.body.filter((doc) => doc.name === "Fulano Test");
    }

    expect(doctors.statusCode).toBe(200);
  });

  it("DELETE Doctor ID", async () => {
    await request(baseURL).delete(`/${doctor[0]._id}`).expect(200);
  });
});

