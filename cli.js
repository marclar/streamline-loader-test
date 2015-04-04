
var test = require('./test._coffee');

module.exports = (function(){

  console.log('in cli.js, exiting in 3s');
  setTimeout(function(){
    process.exit(0);
  }, 3000);

})();
