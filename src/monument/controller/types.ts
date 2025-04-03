import { Request, Response } from "express";

interface MonumentControllerStructure {
  getMonuments: (req: Request, res: Response) => void;
}

export default MonumentControllerStructure;
