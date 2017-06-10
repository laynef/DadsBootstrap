var ncp = require('ncp').ncp;
var path = require('path');
var jsonfile = require('jsonfile');


var CreateCommand = function(name) {
  var ProjectName = name;

  var newProject = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Please name your project");
      throw new Error('dad create Name');
    }

    console.log("Starting your project: " + name);

    var src = path.join(__dirname, '..', '..', 'project', 'temp');
    var dest = path.join(workDir, name);

    var file = './' + name + '/package.json';

    var obj = {
      "name": ProjectName,
      "version": "1.0.0",
      "description": "",
      "scripts": {
        "start": "concurrently \"webpack -w\" \"nodemon ./server/server.js\"",
        "build:pro": "webpack -p",
        "postinstall": "webpack"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "babel-core": "^6.18.2",
        "babel-loader": "^7.0.0",
        "babel-plugin-transform-runtime": "^6.15.0",
        "babel-preset-es2015": "^6.18.0",
        "babel-preset-react": "^6.16.0",
        "babel-preset-stage-0": "^6.16.0",
        "concurrently": "^3.4.0",
        "css-loader": "^0.28.4",
        "extract-text-webpack-plugin": "^2.1.2",
        "mysql": "^2.12.0",
        "node-sass": "^4.5.3",
        "nodemon": "^1.11.0",
        "sass-loader": "^6.0.5",
        "style-loader": "^0.18.2",
        "webpack": "^2.6.1",
        "webpack-dev-server": "^2.4.5"
      },
      "dependencies": {
        "axios": "^0.16.2",
        "babel-polyfill": "^6.20.0",
        "babel-runtime": "^6.20.0",
        "body-parser": "^1.15.2",
        "cookie-parser": "^1.4.3",
        "cors": "^2.8.1",
        "express": "^4.14.0",
        "express-favicon": "^2.0.0",
        "express-flash": "0.0.2",
        "express-session": "^1.14.2",
        "morgan": "^1.7.0",
        "pg": "^6.1.0",
        "pg-hstore": "^2.3.2",
        "react": "^15.4.1",
        "react-bootstrap": "^0.31.0",
        "react-dom": "^15.4.1",
        "react-redux": "^5.0.5",
        "react-router": "^3.0.0",
        "react-router-bootstrap": "^0.24.2",
        "redux": "^3.6.0",
        "redux-form": "^6.3.2",
        "redux-logger": "^3.0.6",
        "redux-promise": "^0.5.3",
        "redux-thunk": "^2.1.0",
        "rxjs": "^5.1.0",
        "sequelize": "^4.0.0",
        "socket.io": "^2.0.2",
        "sqlite3": "^3.1.8",
        "tedious": "^2.0.0",
        "url-loader": "^0.5.8"
      }
    };

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Your project is building ...');

       // create package.json
       jsonfile.writeFile(file, obj, {spaces: 2}, function (er) {
         // should be null
       });
    });

  };
  return {
    handle: newProject
  }
};

module.exports = CreateCommand;
