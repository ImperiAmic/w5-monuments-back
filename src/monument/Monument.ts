import { v4 as uuidv4 } from "uuid";
import { Location, MonumentStructure } from "./types.js";

class Monument implements MonumentStructure {
  public id: string;
  public city: string;
  public country: string;

  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    public location: Location,
  ) {
    this.id = uuidv4();
    this.city = location.city;
    this.country = location.country;
  }
}

export default Monument;
