var ncp = require('ncp').ncp;
var path = require('path');
var fs = require('fs');

var PageCommand = function(name) {

  var capitalName = name[0].toUpperCase() + name.slice(1);

  var newComponent = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Please name your page");
      throw new Error('dad page Name');
    }

    console.log("Creating your page");

    var src = path.join(__dirname, '..', '..', 'project', 'component');
    var dest = path.join(workDir, 'app', 'pages', name);
    var file = path.join(workDir, 'app', 'pages', name, 'Component.jsx');
    var newFile = path.join(workDir, 'app', 'pages', name, capitalName + '.jsx');

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Creating React Page ...');

       fs.rename(file, newFile, function(e) {
         
       });

       // rename Main in Component.jsx
       fs.readFile(newFile, 'utf8', function (err,data) {

        var result = data.replace(/Main/g, capitalName);

        fs.writeFile(newFile, result, 'utf8', function (err) {
          // null
        });
      });

       console.log("Your page is ready to go!");
    });

  };
  return {
    handle: newComponent
  }
};

module.exports = PageCommand;