const fs = require('fs');

//console.log(process.argv);

const input = process.argv;
console.log(input[2], input[3]);
fs.writeFileSync(input[2], input[3]);