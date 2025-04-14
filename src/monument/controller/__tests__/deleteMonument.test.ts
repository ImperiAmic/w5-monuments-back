import { Request, Response } from "express";
import { barAmadeo, iglesuelaMonuments } from "../../fixture.js";
import MonumentController from "../MonumentController.js";
import Monument from "../../Monument.js";

describe("Given the deleteMonument method from the MonumentController class", () => {
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

  describe("When it receives a resquest with Bar Amadeo monument", () => {
    const req = {
      params: { monumentId: barAmadeo.id },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 200", () => {
      const expectedStatusCode = 200;

      monumentController.deleteMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the received response's method json with Bar Amadeo monument", () => {
      const expectedMessage = barAmadeo;

      monumentController.deleteMonument(req as Request, res as Response);

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

    test("Then Bar Amadeo monument should not be in monuments list", () => {
      const expectedDeletedMonument = barAmadeo;

      monumentController.deleteMonument(req as Request, res as Response);

      expect(copyOfIglesuelaMonuments).not.toContain(expectedDeletedMonument);
    });
  });

  describe("When it receives a request with the non-created Peña del Morrón monument", () => {
    const req = {
      params: { monumentId: "123abc" },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 404", () => {
      const expectedStatusCode = 404;

      monumentController.deleteMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the received response's method json with 'Monument to delete has not been found' message error", () => {
      const expectedMessage = {
        error: "Monument to delete has not been found",
      };

      monumentController.deleteMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
