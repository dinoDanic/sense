const couponsMock = [
  { name: "20%OFF", value: 20, type: "percent", combine: false },
  { name: "5%OFF", value: 5, type: "percent", combine: false },
  { name: "20EUROFF", value: 20, type: "number", combine: true },
  { name: "2", value: 20, type: "percent", combine: false },
  { name: "2e", value: 20, type: "number", combine: true },
];

export default couponsMock;
