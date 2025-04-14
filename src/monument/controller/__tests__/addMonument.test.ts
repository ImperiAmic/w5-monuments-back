import { Request, Response } from "express";
import MonumentController from "../MonumentController.js";
import { iglesuelaMonuments } from "../../fixture.js";
import Monument from "../../Monument.js";

describe("Given the addMonument method from MonumentController class", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  let copyOfIglesuelaMonuments: Monument[];
  let monumentController: MonumentController;

  beforeEach(() => {
    copyOfIglesuelaMonuments = [...iglesuelaMonuments];
    monumentController = new MonumentController(copyOfIglesuelaMonuments);

    jest.clearAllMocks();
  });

  describe("When it receives a request with Peña del Morrón monument", () => {
    const req = {
      body: {
        name: "Peña del Morrón",
        description: "Mu bonica la peña",
        imageUrl: "image.png",
        city: "Iglesuela del Cid",
        country: "Teruel",
      },
    } as Pick<Request, "body">;

    test("Then it should call the received response's method status with 201", () => {
      const expectedStatusCode = 201;

      const monumentController = new MonumentController(
        copyOfIglesuelaMonuments,
      );

      monumentController.addMonuments(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the received response's method json with Peña del Morrón monument", () => {
      const expectedMessage = {
        name: "Peña del Morrón",
        description: "Mu bonica la peña",
        imageUrl: "image.png",
        city: "Iglesuela del Cid",
        country: "Teruel",
      };

      monumentController.addMonuments(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          name: expectedMessage.name,
          description: expectedMessage.description,
          imageUrl: expectedMessage.imageUrl,
          city: expectedMessage.city,
          country: expectedMessage.country,
        }),
      );
    });
  });

  describe("When it receives a request with Bar Amadeo monument", () => {
    const req = {
      body: {
        name: "Bar Amadeo",
        description: "Sus callos son patrimonio",
        imageUrl: "https://www.baramadeo.bar/callos.webp",
        city: "La Iglesuela del Cid",
        country: "Teruel",
      },
    } as Pick<Request, "body">;

    test("Then it should call the received response's method status with 409", () => {
      const expectedStatusCode = 409;

      monumentController.addMonuments(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the received response's method json with 'A monument with same name is already created' message error", () => {
      const expectedMessage = {
        error: "A monument with same name is already created",
      };

      monumentController.addMonuments(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
