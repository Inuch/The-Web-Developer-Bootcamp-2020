function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Alternative Solution
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);


//Other solution

function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
