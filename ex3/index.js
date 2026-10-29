process.env.TZ = "America/Los_Angeles";

const moment = require("moment");
const now = moment();
const referenceDate = moment("1976-11-26", "YYYY-MM-DD");

console.log(now.format("dddd, MMMM Do YYYY"));
console.log(referenceDate.from(now));
