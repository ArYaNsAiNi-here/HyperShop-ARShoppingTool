import painting from "../assets/models/Painting.glb";
import iospainting from "../assets/models/Painting.usdz";

import OfficeChair from "../assets/models/OfficeChair.glb";
import OfficeChairUsdz from "../assets/models/OfficeChair.usdz";
import pot from "../assets/models/pot.glb";
import potUsdz from "../assets/models/pot.usdz";

// Import new models
import outdoorChairs from "../assets/models/Outdoor-Chairs.glb";
import outdoorChairsUsdz from "../assets/models/Outdoor-Chairs.usdz";
import BeigeDeckChair from "../assets/models/BeigeDeckChair.glb";
import BeigeDeckChairUsdz from "../assets/models/BeigeDeckChair.usdz";

import WoodenDisplayShelf from "../assets/models/WoodenDisplayShelf.glb";
import WoodenDisplayShelfUsdz from "../assets/models/WoodenDisplayShelf.usdz";

const productItems = [
  {
    id: 2,
    name: "Office Chair",
    modelSrc: OfficeChair,
    iOSSrc: OfficeChairUsdz,
    category: "Furniture",
    color: "black",
    price: 1200,
    annotations: [
      {
        title: "comfortable-back",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }, {
        title: "comfortable-seat",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  {
    id: 3,
    name: "Plant Pot",
    modelSrc: pot,
    iOSSrc: potUsdz,
    category: "Environment",
    color: "Red",
    price: 700,
    annotations: [
      {
        title: "pot-structure",
        slot: "hotspot-1",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  },
  {
    id: 4,
    name: "Painting",
    modelSrc: painting,
    iOSSrc: iospainting,
    category: "Art",
    color: "Brown",
    price: 850,
    annotations: [
      {
        title: "wooden-frame",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }, {
        title: "pure-canvas",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  // Add new model: Outdoor Chairs
  {
    id: 5,
    name: "Outdoor Chairs",
    modelSrc: outdoorChairs,
    iOSSrc: outdoorChairsUsdz,
    category: "Outdoor",
    color: "White",
    price: 5000,
    annotations: [
      {
        title: "weather-resistant",
        slot: "hotspot-1",
        position: "0.015m 0.4m -0.12m",
        normal: "0.03m 0.21m 0.97m",
        orbit: "15deg 110deg 0.04m",
        target: "-0.10m 0.02m 0.10m"
      }, 
      {
        title: "comfortable-cushion",
        slot: "hotspot-2",
        position: "0.01m 0.25m 0.15m",
        normal: "-0.31m 0.95m -0.005m",
        orbit: "12deg 115deg 0.035m",
        target: "-0.10m 0.02m 0.10m"
      },
    ]
  },
  {
    id: 6,
    name: "Beige Deck Chair",
    modelSrc: BeigeDeckChair,
    iOSSrc: BeigeDeckChairUsdz,
    category: "Outdoor",
    color: "Beige",
    price: 3450,
    annotations: [
      {
        title: "adjustable-backrest",
        slot: "hotspot-1",
        position: "0.02m 0.5m -0.1m",
        normal: "0.03m 0.2m 0.95m",
        orbit: "20deg 120deg 0.05m",
        target: "-0.12m 0.03m 0.08m"
      },
      {
        title: "sturdy-frame",
        slot: "hotspot-2",
        position: "0.01m 0.3m 0.2m",
        normal: "-0.3m 0.9m -0.01m",
        orbit: "18deg 100deg 0.04m",
        target: "-0.1m 0.02m 0.1m"
      },
    ]
  },
  {
    id: 7,
    name: "Wooden Display Shelf",
    modelSrc: WoodenDisplayShelf,
    iOSSrc: WoodenDisplayShelfUsdz,
    category: "Furniture",
    color: "Brown",
    price: 5500,
    annotations: [
      {
        title: "spacious-shelves",
        slot: "hotspot-1",
        position: "0.02m 0.8m -0.1m",
        normal: "0.03m 0.2m 0.95m",
        orbit: "25deg 130deg 0.06m",
        target: "-0.15m 0.04m 0.1m"
      },
      {
        title: "sturdy-wood",
        slot: "hotspot-2",
        position: "0.01m 0.5m 0.2m",
        normal: "-0.3m 0.9m -0.01m",
        orbit: "20deg 110deg 0.05m",
        target: "-0.12m 0.03m 0.08m"
      },
    ]
  }
];

export default productItems;
