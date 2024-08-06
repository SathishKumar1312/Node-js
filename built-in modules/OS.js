const os = require('os');
console.log(os.type());
console.log(os.release());
console.log(os.userInfo());
let a = os.uptime();
console.log(os.uptime(),"sec");

console.log(os.uptime()/3600,"hr");
console.log(os.uptime()-a);
