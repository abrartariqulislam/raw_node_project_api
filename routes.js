/* *
 * Title: Routes
 * Description: Application routes
 * Author: Tariqul Islam
 * Date: 2023-09-29
 * */

// Dependencies
const { sampleHandler } = require("./handlers/routesHandlers/sampleHndler");

// routes Object - Module Scaffolding
const routes = {
  sample: sampleHandler,
};

module.exports = routes;
