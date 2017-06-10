var actionJson = require('../../package.json');

var PrintDoc = function() {
  var printMe = function() {
    console.log('______ _____ _   _  _____');
    console.log('| ___ \\  ___| \\ | |/  ___|');
    console.log('| |_/ / |__ |  \\| |\\ `--. ');
    console.log('|    /|  __|| . ` | `--. \\');
    console.log('| |\\ \\| |___| |\\  |/\\__/ /');
    console.log('\\_| \\_\\____/\\_| \\_/\\____/');
    console.log("\n");
    console.log("RENS-Stack-Cli - Version" + actionJson.version);
    console.log('├── create             ─ Create a new project');
    console.log('├── make               ─ Create a new component');
    console.log('├── page               ─ Create a new page');
    console.log('└── runs                ─ Verify that your stack works');
  };
  return {
    handle : printMe
  }
};

module.exports = PrintDoc;
