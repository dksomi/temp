const expo = require('./모듈.js');

expo.timer.on('runTime', function() {
  console.log(new Date());
});