import { Request, Response } from "express";
import { MonumentStructure } from "../types.js";
import MonumentControllerStructure from "./types.js";
import Monument from "../Monument.js";
class MonumentController implements MonumentControllerStructure {
  constructor(private monuments: MonumentStructure[]) {}

  getMonuments = (_req: Request, res: Response): void => {
    res.status(200).json({ monuments: this.monuments });
  };

  addMonuments = (req: Request, res: Response): void => {
    const monument = req.body as MonumentStructure;

    const newMonument = new Monument(
      monument.name,
      monument.description,
      monument.imageUrl,
      {
        city: monument.city,
        country: monument.country,
      },
    );

    const isNewMonumentAdded = this.monuments.some(
      (monument) => monument.name === newMonument.name,
    );

    if (isNewMonumentAdded) {
      res
        .status(409)
        .json({ error: "A monument with same name is already created" });
      return;
    }

    this.monuments.push(newMonument);

    res.status(201).json(newMonument);
  };
}

export default MonumentController;
