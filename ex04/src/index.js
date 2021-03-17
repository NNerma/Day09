// Only change code below thise line
var m, n;

function compareDifferentValues(m,n){

    if ((typeof m) === (typeof n)){
    
        return "Equal";
    }
    
    return "Not equal";
}


console.log(compareDifferentValues(8, "8"));


console.log(compareDifferentValues("8", 8));


console.log(compareDifferentValues('8', 8));


console.log(compareDifferentValues("8", "8"));


console.log(compareDifferentValues(8, 8));
// Only change code above thise line

module.exports = compareDifferentValues;