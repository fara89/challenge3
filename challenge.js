var boardingPasses = function (objectArray) {
    var result = [];
    var fromDestination = {};
    var toDestination = {};
    var objectArrayLength = objectArray.length;
    for (var i = 0; i < objectArrayLength; i++) {
        var destination = objectArray.pop();
        fromDestination[i] = destination.from;
        toDestination[i] = destination.to;
    }
    var firstCountry = Object.values(fromDestination)
        .filter(function (country) { return Object.values(toDestination).indexOf(country) === -1; });
    if (firstCountry) {
        var firstCountryKey = getKey(fromDestination, firstCountry);
        result.push(firstCountry.toString(), getValue(toDestination, firstCountryKey));
        var count = 0;
        var lastElementKey = '0';
        for (count = 0; count <= objectArrayLength + 1; count++) {
            lastElementKey = getKey(fromDestination, result[result.length - 1]);
            result.push(toDestination[lastElementKey]);
            count++;
        }
    }
    return result;
};
var getKey = function (object, value) {
    return Object.keys(object)
        .find(function (key) { return object[key] == value; });
};
var getValue = function (object, key) {
    return Object.values(object)
        .find(function (value) { return object[key] == value; });
};
console.log(boardingPasses([{ "from": "Aleppo", "to": "Montreal YUL" },
    { "from": "Turkey", "to": "Ibiza Airport" }, { "from": "Ibiza Airport", "to": "Aleppo" },
    { "from": "Beirut", "to": "Turkey" }]));
console.log(boardingPasses([{ "from": "Kuala Lumpur Airport", "to": "Kuantan" },
    { "from": "Dubai Terminal 1", "to": "Dubai Terminal 2" }, { "from": "Damascus Airport", "to": "Dubai Terminal 1" },
    { "from": "Dubai Terminal 2", "to": "Kuala Lumpur Airport" }, { "from": "Hama", "to": "Damascus Airport" }]));
