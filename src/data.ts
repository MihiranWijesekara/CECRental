export interface Car {
  id: string;
  name: string;
  category: "Construction" | "Transport" | "Machinery";
  year: number;
  fuel: string;
  capacity: string;
  pricePerDay: number;
  features: string[];
  description: string;
}

export const CARS: Car[] = [
  {
    id: "1",
    name: "JCB 3CX Backhoe Loader",
    category: "Machinery",
    year: 2021,
    fuel: "Diesel",
    capacity: "1 Operator",
    pricePerDay: 150,
    features: ["4WD", "High Performance", "Versatile"],
    description:
      "Powerful and versatile backhoe loader for all your construction and excavation needs.",
  },
  {
    id: "2",
    name: "Excavator",
    category: "Machinery",
    year: 2020,
    fuel: "Diesel",
    capacity: "1 Operator",
    pricePerDay: 250,
    features: ["Heavy Duty", "Deep Digging", "Hydraulic Power"],
    description:
      "High-performance excavator for major earthmoving and trenching projects.",
  },

  {
    id: "4",
    name: "Motor Grader",
    category: "Machinery",
    year: 2021,
    fuel: "Diesel",
    capacity: "1 Operator / 4 Tons & 10 Tons",
    pricePerDay: 300,
    features: ["Precision Leveling", "Adjustable Blade", "High Torque"],
    description:
      "Essential for road construction and maintenance, providing precise surface leveling.",
  },
  {
    id: "5",
    name: "Road Roller",
    category: "Machinery",
    year: 2019,
    fuel: "Diesel",
    capacity: "1 Operator",
    pricePerDay: 180,
    features: ["Vibratory System", "Smooth Finish", "Heavy Weight"],
    description:
      "Reliable road roller for compacting soil, gravel, concrete, or asphalt in road construction.",
  },
  {
    id: "6",
    name: "TATA Tipper",
    category: "Transport",
    year: 2020,
    fuel: "Diesel",
    capacity: "3.5 Cube",
    pricePerDay: 180,
    features: ["Large Capacity", "Heavy Load", "Industrial Grade"],
    description:
      "High-capacity tipper truck for large-scale material transport and industrial use.",
  },
  {
    id: "7",
    name: "Ranger Rover ",
    category: "Transport",
    year: 2020,
    fuel: "Diesel",
    capacity: "3.5 Cube",
    pricePerDay: 180,
    features: ["Large Capacity", "Heavy Load", "Industrial Grade"],
    description:
      "High-capacity tipper truck for large-scale material transport and industrial use.",
  },

  {
    id: "8",
    name: "Benz",
    category: "Transport",
    year: 2020,
    fuel: "Diesel",
    capacity: "3.5 Cube",
    pricePerDay: 180,
    features: ["Large Capacity", "Heavy Load", "Industrial Grade"],
    description:
      "High-capacity tipper truck for large-scale material transport and industrial use.",
  },
  // Benz , Ranger Rover , Lc 300
  //Double cab , Van , 
];
