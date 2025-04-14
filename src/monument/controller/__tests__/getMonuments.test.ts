import { Request, Response } from "express";
import MonumentController from "../MonumentController.js";
import { barAmadeo, ermitaCid, iglesuelaMonuments } from "../../fixture.js";

describe("Given the getMonuments method from MonumentController class", () => {
  describe("When it receives a request and a response", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    let monumentController: MonumentController;

    beforeEach(() => {
      monumentController = new MonumentController(iglesuelaMonuments);

      jest.clearAllMocks();
    });

    test("Then it should it call the received response's method status with 200", () => {
      const expectedStatusCode = 200;

      monumentController.getMonuments(req, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should it call the received response's method json with Ermita del Cid and Bar Amadeo monuments", () => {
      const expectedMessage = {
        monuments: [ermitaCid, barAmadeo],
      };

      monumentController.getMonuments(req, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
