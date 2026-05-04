const JCB = new URL("../img/JCB.jpg", import.meta.url).href;
const Excavator = new URL("../img/machine1.jpeg", import.meta.url).href;
const MotorGrader = new URL("../img/MotorGrader.jpg", import.meta.url).href;
const RoadRoller = new URL("../img/RoadRoller.jpg", import.meta.url).href;
const TATATipper = new URL("../img/Tipper.jpg", import.meta.url).href;

export interface Car {
  id: string;
  name: string;
  category: "Construction" | "Transport" | "Machinery";
  description: string;
  image?: string;
}

export const CARS: Car[] = [
  {
    id: "1",
    name: "JCB",
    category: "Machinery",
    description:
      "Powerful and versatile backhoe loader for all your construction and excavation needs.",
    image: JCB,
  },
  {
    id: "2",
    name: "Excavator",
    category: "Machinery",
    description:
      "High-performance excavator for major earthmoving and trenching projects.",
    image: Excavator,
  },

  {
    id: "4",
    name: "Motor Grader",
    category: "Machinery",
    description:
      "Essential for road construction and maintenance, providing precise surface leveling.",
    image: MotorGrader,
  },
  {
    id: "5",
    name: "Road Roller",
    category: "Machinery",
    description:
      "Reliable road roller for compacting soil, gravel, concrete, or asphalt in road construction.",
    image: RoadRoller,
  },
  {
    id: "6",
    name: " Tipper",
    category: "Transport",
    description:
      "High-capacity tipper truck for large-scale material transport and industrial use.",
    image: TATATipper,
  },
];
