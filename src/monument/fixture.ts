import Monument from "./Monument.js";

export const ermitaCid = new Monument(
  "Ermita del Cid",
  "La mejor ermita del mejor pueblo",
  "https//www.iglesuela.te/iglesuela.webp",
  {
    city: "La Iglesuela del Cid",
    country: "Teruel",
  },
);

export const barAmadeo = new Monument(
  "Bar Amadeo",
  "Sus callos son patrimonio",
  "https://www.baramadeo.bar/callos.webp",
  {
    city: "La Iglesuela del Cid",
    country: "Teruel",
  },
);

export const iglesuelaMonuments = [ermitaCid, barAmadeo];
