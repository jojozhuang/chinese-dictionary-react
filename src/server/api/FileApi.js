const mkdirp = require('mkdirp');
const fs = require('fs');
const getDirName = require('path').dirname;
const path = require('path');
const appRoot = require('app-root-path');

module.exports = {
  getFile(filename, callback) {
    const file = path.resolve(appRoot.path, 'data', filename.toLowerCase());

    console.log(`getfile:${file}`);
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      // console.log(data.toString());
      callback(JSON.parse(data));
    });
  },

  saveFile(file, code, callback) {
    // create parent directories if they doesn't exist.
    mkdirp(getDirName(file), (err) => {
      if (err) return callback(err);

      return fs.writeFile(file, code, (err2) => {
        if (err2) {
          throw err2;
        }

        callback();
      });
    });
  },
};
