import { Request, Response } from "express";
import { MonumentStructure } from "../types.js";
import MonumentControllerStructure from "./types.js";

class MonumentController implements MonumentControllerStructure {
  constructor(private monuments: MonumentStructure[]) {}

  getMonuments = (_req: Request, res: Response): void => {
    res.status(200).json({ monuments: this.monuments });
  };
}

export default MonumentController;
