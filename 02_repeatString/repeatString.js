const repeatString = function(x, y) {
if (y >= 0) {
    for (let i = 0; i < y; i++ ); {
    return x.repeat(y);
}
}
return 'ERROR';
};

repeatString('hey', 3);

module.exports = repeatString;
