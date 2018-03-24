var fs = require('fs');

fs.readdir('./', 'UTF-8', function(err, data) {
    console.log(data);
    fs.writeFile('./text.txt', data, function(err, data) {
        if (err) throw err;
    });
});