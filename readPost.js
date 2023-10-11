const fs = require('fs');
const path = require('path');
const { buffer } = require('stream/consumers');

fs.readFile(
    path.join(__dirname, 'posts', 'blogPost.txt'),
    'utf-8', (err, data) => {
        if (err) {
            console.log("file read error")
        }
        console.log(data);
        const content = Buffer.from(data);
        //console.log(content.toString());
        console.log(data);
    }
);