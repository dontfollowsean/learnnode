var fs = require('fs');
var path = require('path'); 
fs.readdir(process.argv[2], function (err, files) {
    files.forEach((file) => {
        if(path.extname(file).slice(1) === process.argv[3]){
            console.log(file);
        }
    });
    
});