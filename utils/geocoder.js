const nodeGeocoder = require("node-geocoder");

const options = {
  provider: "mapquest", //process.env.GEOCODER_PROVIDER,
  httpAdapter: "https",
  apiKey: "qd7HZkpFQj5rUaROzhClcDrBif0GGAkf", //process.env.GEOCODER_API_KEY,
  formatter: null,
};
//console.log(options);
//console.log(process.env.GEOCODER_PROVIDER);
const geocoder = nodeGeocoder(options);

module.exports = geocoder;
