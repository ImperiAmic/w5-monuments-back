import { Request, Response } from "express";
import MonumentController from "../MonumentController.js";
import { iglesuelaMonuments } from "../../fixture.js";
import Monument from "../../Monument.js";

describe("Given the addMonument method of the class MonumentController", () => {
  describe("When it receives a request and a response", () => {
    let req = {
      body: {
        name: "Peña del Morrón",
        description: "Mu bonica la peña",
        imageUrl: "image.png",
        city: "Iglesuela del Cid",
        country: "Teruel",
      },
    } as Pick<Request, "body">;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    let copyOfIglesuelaMonuments: Monument[];

    beforeEach(() => {
      jest.clearAllMocks();
      copyOfIglesuelaMonuments = [...iglesuelaMonuments];
    });

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

      const monumentController = new MonumentController(
        copyOfIglesuelaMonuments,
      );

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

    test("Then it should call the received response's method status with 409 if the monument is already added", () => {
      const expectedStatusCode = 409;

      req = {
        body: {
          name: "Bar Amadeo",
          description: "Sus callos son patrimonio",
          imageUrl: "https://www.baramadeo.bar/callos.webp",
          city: "La Iglesuela del Cid",
          country: "Teruel",
        },
      } as Pick<Request, "body">;

      const monumentController = new MonumentController(
        copyOfIglesuelaMonuments,
      );

      monumentController.addMonuments(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
