// [39.9917, 116.3284]; // 大致坐标
export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; // Set your mapbox token here
export const offices = [
  { lng: 116.32699, lat: 39.9915, name: "智造大街" },
  // { lng: 116.3184, lat: 40.0017, name: "东升" },
  // { lng: 116.3284, lat: 40.0117, name: "海升" },
  // {
  //   lng: 116.3084,
  //   lat: 40.0017,
  //   name: "清智资本",
  // },
];
export const officePositionArray: [number, number] = [
  offices[0].lng,
  offices[0].lat,
];

export const initialZoom = 10;

export const mapStyle =
  /**/
  // "mapbox://styles/mapbox/dark-v9";
  "mapbox://styles/markshawn/cj7o3rkog6vl32rmpyjk6jmed"; // whaam
// "mapbox://styles/markshawn/cm1ykqr5m00c001rd2m6ra2un"; // whaam copy
