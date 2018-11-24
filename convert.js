function convert(buffer) {
    let arr = [];
    let match = 0;
    for (let i of buffer) {
        if (i == 0xD) { //fix 0xD to 0xA
            match = 1;
            arr.push(0xA);
            continue;
        } else if (i == 0x20 && match == 1) { //fix 0xD0x20
            match = 0;
            continue;
        } else if (i == 0xA && match == 1) { //fix 0xD0xA
            match = 0;
            continue;
        } else {
            arr.push(i);
        }
    }
    return Buffer.from(arr).toString("utf8");
}
module.exports = convert;