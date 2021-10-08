import SmartHubImg from "../img/shop-items/smart-hub2.png";
import CameraImg from "../img/shop-items/camera.png";
import MotionImg from "../img/shop-items/motion.png";
import SmokeImg from "../img/shop-items/smoke.png";
import WaterImg from "../img/shop-items/water.png";

import camera1 from "../img/shop-items/camera1.png";
import camera2 from "../img/shop-items/camera2.png";
import camera3 from "../img/shop-items/camera3.png";

const storeMock = [
  {
    name: "Smart Hub",
    value: 49.99,
    image: SmartHubImg,
    id: 1,
    gallery: [
      { name: "image1", id: 1, image: camera1 },
      { name: "image2", id: 2, image: camera2 },
      { name: "image3", id: 3, image: camera3 },
    ],
  },
  {
    name: "Motion Sensor",
    value: 24.99,
    image: MotionImg,
    id: 2,
    gallery: [
      { name: "image1", id: 1, image: camera1 },
      { name: "image2", id: 2, image: camera2 },
      { name: "image3", id: 3, image: camera3 },
    ],
  },
  {
    name: "Wireless Camera",
    value: 99.99,
    image: CameraImg,
    id: 3,
    gallery: [
      { name: "image1", id: 1, image: camera1 },
      { name: "image2", id: 2, image: camera2 },
      { name: "image3", id: 3, image: camera3 },
    ],
  },
  {
    name: "Smoke Sensor",
    value: 19.99,
    image: SmokeImg,
    id: 4,
    gallery: [
      { name: "image1", id: 1, image: camera1 },
      { name: "image2", id: 2, image: camera2 },
      { name: "image3", id: 3, image: camera3 },
    ],
  },
  {
    name: "Water Leak Sensor",
    value: 14.99,
    image: WaterImg,
    id: 5,
    gallery: [
      { name: "image1", id: 1, image: camera1 },
      { name: "image2", id: 2, image: camera2 },
      { name: "image3", id: 3, image: camera3 },
    ],
  },
];

export default storeMock;
