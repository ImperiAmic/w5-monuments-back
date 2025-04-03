import { Request, Response } from "express";
import checkHealthStatus from "../checkHealthStatus.js";

describe("Given the checkHealthStatus middleware", () => {
  describe("When it receives a response", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the received response's method status with 200", () => {
      const expectedStatus = 200;

      checkHealthStatus(req, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it shold call the received response's method json with 'OK' error", () => {
      const expectedError = { message: "OK" };

      checkHealthStatus(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedError);
    });
  });
});
