// DESCRIBE -> bloco de tests - tests suites
// IT or TEST -> declara único teste unitário -  tests cases
// EXPECT -> asserções do resultado - validar resultados

//1

const ConsulationController = require('../ConsultationController')

jest.mock('');

describe("Consultation Controller", () => {
    test("Sua consulta foi agendada com sucesso!", async () => {
        const request = {
            body: {
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
                open: "false"
            }
        }

        const response = {
            
        }

        await ConsulationController.create(req, res);
    })
})

// 2


const ConsultationsController = require('../ConsultationController');

const mockRequest = {};
const mockResponse = {
  status: jest.fn(() => mockResponse),
  json: jest.fn(),
};

const controller = new ConsultationsController();

describe('ConsultationsController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Teste create

  it('should create a new consultation', async () => {
    // Defina o corpo da solicitação mock
    mockRequest.params = { id: 'some_id' };
    mockRequest.body = {
      // Definir os campos necessários para criar uma consulta
    };

    await controller.create(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Agendamento criado com sucesso!' });
  });

  // Teste para o método update
  it('should update a consultation', async () => {
    // Aqui o corpo da solicitação mock
    mockRequest.params = { id: 'some_id' };
    mockRequest.body = {
      // Aqui os campos necessários para atualizar uma consulta
    };

    await controller.update(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Usuário alterado com sucesso!' });
  });

  // Os demais testes aqui

});
