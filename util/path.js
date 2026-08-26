const path = require("path");

module.exports = path.dirname(process.mainModule.filename); // will refer to the main module in which we started our application, app.js in our case
// process.mainModule.filename -> gives us path to the file that is responsible to the fact that our app is running
// and we are putting this filename into the dirname() -> to get the path to that directory
