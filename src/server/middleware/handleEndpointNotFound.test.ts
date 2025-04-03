import { Request, Response } from "express";
import handlerEndpointNotFound from "./handleEndpointNotFound.js";

describe("Given the handleEndpointNotFound middleware", () => {
  describe("When it receives a response", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the received response's method status with 404", () => {
      const expectedStatus = 404;

      handlerEndpointNotFound(req, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it shold call the received response's method json with 'Endpoint not found' error", () => {
      const expectedError = { error: "Endpoint not found" };

      handlerEndpointNotFound(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedError);
    });
  });
});
