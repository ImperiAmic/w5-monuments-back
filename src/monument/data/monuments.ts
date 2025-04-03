import Monument from "../Monument.js";

const gizaPyramids = new Monument(
  "Giza pyramid complex",
  "The Pyramids of Giza, built in Ancient Egypt, are impressive stone monuments created as tombs for pharaohs, with the Great Pyramid of Khufu being the largest and most famous.",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Pyramids_of_the_Giza_Necropolis.jpg",
  {
    city: "Giza",
    country: "Egypt",
  },
);

const chinaWall = new Monument(
  "Great Wall of China",
  "The Great Wall of China, built to protect the empire, stretches thousands of miles across mountains and deserts, showcasing ancient engineering and serving as a symbol of China's history.",
  "https://upload.wikimedia.org/wikipedia/commons/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
  {
    city: "Several locations",
    country: "China",
  },
);

const petra = new Monument(
  "Petra",
  "Petra, an ancient city in Jordan, was carved into rose-red cliffs by the Nabataeans, serving as a major trade hub and showcasing impressive rock-cut architecture, like Al-Khazneh.",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Treasury_petra_crop.jpeg",
  { city: "	Ma'an Governorate", country: "Jordan" },
);

const colosseum = new Monument(
  "Colosseum",
  "The Colosseum in Rome, built during the Roman Empire, is an ancient amphitheater known for its grand gladiatorial battles and impressive architecture, symbolizing Roman engineering mastery.",
  "https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg",
  {
    city: "Rome",
    country: "Italy",
  },
);

const chichenItza = new Monument(
  "Chichén Itzá",
  "Chichén Itzá, a Mayan city in Mexico, features the iconic El Castillo pyramid, showcasing advanced astronomical knowledge and serving as a major political and religious center.",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Chichen_Itza_3.jpg",
  {
    city: "Tinum",
    country: "Mexico",
  },
);

const machuPicchu = new Monument(
  "Machu Picchu",
  "Machu Picchu, an ancient Incan citadel in the Andes Mountains of Peru, is renowned for its breathtaking scenery, sophisticated dry-stone construction, and historical significance as a royal estate.",
  "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
  {
    city: "Cusco",
    country: "Peru",
  },
);

const tajMahal = new Monument(
  "Taj Mahal",
  "The Taj Mahal, a white marble mausoleum in India, was built by Emperor Shah Jahan in memory of his wife, symbolizing eternal love and showcasing Mughal architectural brilliance.",
  "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
  {
    city: "Agra",
    country: "India",
  },
);

const christRedeemer = new Monument(
  "Christ the Redeemer",
  "Christ the Redeemer, an iconic statue in Rio de Janeiro, Brazil, stands atop Mount Corcovado, symbolizing peace and Christianity, and offering breathtaking panoramic views of the city.",
  "https://upload.wikimedia.org/wikipedia/commons/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg",
  {
    city: "Rio de Janeiro",
    country: "Brazil",
  },
);

export const monuments = [
  gizaPyramids,
  chinaWall,
  petra,
  colosseum,
  chichenItza,
  machuPicchu,
  tajMahal,
  christRedeemer,
];
