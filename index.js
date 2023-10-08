/* *
 * Title: Uptime Monitoring Application
 * Description: A REST_ful API to monitor up or down times of user defined links
 * Author: Tariqul Islam
 * Date: 2023-09-29
 * */

// Dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environments = require("./helpers/environments");


// App Object - Module Scaffolding
const app = {};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environments.port, () => {
    console.log(`Server is running in ${environments.port} port`);
  });
};

// Handle Request and Response
app.handleReqRes = handleReqRes;

// server is Start
app.createServer();
