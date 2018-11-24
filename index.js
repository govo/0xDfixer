const fs = require("fs");
const convert = require('./convert');

function convertFile(path, target) {
    let content = convert(fs.readFileSync(path));
    fs.writeFileSync(target || path, content);
}

if (!module.parent) {
    let file = process.argv.slice(2)[0];
    let target = process.argv.slice(2)[1] || void 0;

    if (file) {
        convertFile(file, target);
    }
}

module.exports = convertFile;