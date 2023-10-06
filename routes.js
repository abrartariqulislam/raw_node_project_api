/* *
 * Title: Routes
 * Description: Application routes
 * Author: Tariqul Islam
 * Date: 2023-09-29
 * */

// Dependencies
const { sampleHandler } = require("./handlers/routesHandlers/sampleHndler");
const { userHandler } = require("./handlers/routesHandlers/userHandler");
const { tokenHandler } = require("./handlers/routesHandlers/tokenHandler");

// routes Object - Module Scaffolding
const routes = {
  sample: sampleHandler,
  user: userHandler,
  token: tokenHandler,
};

// exports
module.exports = routes;
