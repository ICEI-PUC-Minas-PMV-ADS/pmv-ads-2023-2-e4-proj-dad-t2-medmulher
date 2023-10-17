const UserController = require('./UserController');

describe("User Controller", () => {
  let userController;

  beforeAll(() => {
    userController = new UserController();
  });

  test("Usuário cadastrado com sucesso!", async () => {
    
    const mockFindOne = jest.fn().mockResolvedValue(null);
    const mockCreate = jest.fn().mockResolvedValue({ _id: '12345' });
    const mockHash = jest.fn().mockResolvedValue('hashedPassword123');

    
    jest.mock('../models/', () => {
      return {
        Users: {
          findOne: mockFindOne,
          create: mockCreate,
        },
      };
    });

    
    jest.mock('bcryptjs', () => {
      return {
        hash: mockHash,
      };
    });

    const req = {
      body: {
        name: "Herbert Nordson 2",
        password: "$2a$08$BKAVX4HlAwqmE12MJ6Kqa.76TxfYYWTwE8sZdkwK1WNLQ7ws5GKl.",
        cpf: "022.123.412-80",
        address: {
          street: "Rua dos bobos",
          district: "Brasa",
          city: "Cicle",
          complement: "No lado de lá",
          number: "1",
          postal_code: "40410-520"
        },
        email: "herbert.nordson2@puc.com.br"
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await userController.create(req, res);

    expect(mockFindOne).toHaveBeenCalledWith({ email: req.body.email });
    expect(mockCreate).toHaveBeenCalledWith(expect.objectContaining({
      name: req.body.name,
      password: 'hashedPassword123',
      cpf: req.body.cpf,
      address: req.body.address,
      email: req.body.email,
    }));
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: 'Usuário cadastrado com sucesso!' });
  });
});