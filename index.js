const fs = require('fs');

const path = require('path');

// fs.writeFileSync('apple.txt', 'Apple is from JK');

const dirPath = path.join(__dirname, 'files');
//console.log(dirPath);

/*
for(i=0; i <5 ; i++) {
    fs.writeFileSync(`${dirPath}/fruitsFile${i}.txt`, "Eat one Fruit daily");
}
    */

fs.readdir(dirPath, (error, files)=>{
    //console.log(files);
    files.forEach((iteam)=>{
        console.log('Files name is: '+iteam);
    })
});