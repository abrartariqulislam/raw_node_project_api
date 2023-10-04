/* *
 * Title: Data control
 * Description: files  system data write
 * Author: Tariqul Islam
 * Date: 2023-10-03
 * */

// Dependencies
const { dir, error } = require("console");
const fs = require("fs");
const path = require("path");

// App Object - Module Scaffolding
const lib = {};

// base directory save data
lib.baseDir = path.join(__dirname, "/../.data");

// crate file and right data
lib.create = (dir, file, data, callBack) => {
  // open file to write data
  fs.open(
    `${lib.baseDir}/${dir}/${file}.json`,
    "wx",
    (error, fileDescriptor) => {
      if (!error && fileDescriptor) {
        // convert data json to string
        const stringData = JSON.stringify(data);

        // write data
        fs.writeFile(fileDescriptor, stringData, (error2) => {
          if (!error2) {
            fs.close(fileDescriptor, (error3) => {
              if (!error3) {
                callBack(false);
              } else {
                callBack("cannot file close");
              }
            });
          } else {
            callBack("cannot write file");
          }
        });
      } else {
        callBack("could not found file descriptor");
      }
    }
  );
};

// read file
lib.read = (dir, file, callBack) => {
  fs.readFile(`${lib.baseDir}/${dir}/${file}.json`, "utf8", (error, data) => {
    callBack(error, data);
  });
};

// update file
lib.update = (dir, file, data, callBack) => {
  // open file
  fs.open(
    `${lib.baseDir}/${dir}/${file}.json`,
    "r+",
    (error, fileDescriptor) => {
      const stringData = JSON.stringify(data);
      if (!error && fileDescriptor) {
        // truncate file  means empty file
        fs.ftruncate(fileDescriptor, (error2) => {
          if (!error2) {
            // write file
            fs.writeFile(fileDescriptor, stringData, (error3) => {
              if (!error3) {
                // close write file
                fs.close(fileDescriptor, (error4) => {
                  if (!error4) {
                    callBack(false);
                  } else callBack("cannot write file close it");
                });
              } else {
                callBack("cannot write file");
              }
            });
          } else {
            callBack("cannot truncate file");
          }
        });
      } else {
        callBack("cannot open file");
      }
    }
  );
};

// delete file
lib.delete = (dir, file, callBack) => {
  fs.unlink(`${lib.baseDir}/${dir}/${file}.json` ,(error) => {
    if (!error) {
      callBack(false);
    } else {
      callBack("cannot delete file");
    }
  });
};

module.exports = lib;
