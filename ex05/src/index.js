// Only change code below thise line
var m;

function compareStrictValues(m){

    if (m != 55){
        return "Not equal";
    }
    return "Equal";
}


console.log(compareStrictValues(55));


console.log(compareStrictValues("55"));


console.log(compareStrictValues("21"));


console.log(compareStrictValues(12));


console.log(compareStrictValues("Doe"));

// Only change code above thise line

module.exports = compareStrictValues;