const boardingPasses = (objectArray: { from: string, to: string }[]): string[] => {
    let result = [];
    let fromDestination: { [key: number]: string } = {};
    let toDestination: { [key: number]: string } = {};
    let objectArrayLength: number = objectArray.length;

    for (let i = 0; i < objectArrayLength; i++) {
        let destination = objectArray.pop();
        fromDestination[i] = destination.from;
        toDestination[i] = destination.to;
    }

    let firstCountry = Object.values(fromDestination)
        .filter(country => Object.values(toDestination).indexOf(country) === -1);

    if (firstCountry) {
        let firstCountryKey = getKey(fromDestination, firstCountry);
        result.push(firstCountry.toString(), getValue(toDestination, firstCountryKey));

        let count = 0;
        let lastElementKey = '0';

        for (count = 0; count <= objectArrayLength + 1; count++) {
            lastElementKey = getKey(fromDestination, result[result.length - 1]);
            result.push(toDestination[lastElementKey]);
            count++;
        }
    }
    return result;
}

const getKey = (object: { [key: number]: string }, value: string[]) => {
    return Object.keys(object)
        .find(key => object[key] == value);
}

const getValue = (object: { [key: number]: string }, key: string) => {
    return Object.values(object)
        .find(value => object[key] == value);
}




console.log(boardingPasses([{ "from": "Aleppo", "to": "Montreal YUL" },
{ "from": "Turkey", "to": "Ibiza Airport" }, { "from": "Ibiza Airport", "to": "Aleppo" },
{ "from": "Beirut", "to": "Turkey" }]));

console.log(boardingPasses([{ "from": "Kuala Lumpur Airport", "to": "Kuantan" },
{ "from": "Dubai Terminal 1", "to": "Dubai Terminal 2" }, { "from": "Damascus Airport", "to": "Dubai Terminal 1" },
{ "from": "Dubai Terminal 2", "to": "Kuala Lumpur Airport" }, { "from": "Hama", "to": "Damascus Airport" }]));