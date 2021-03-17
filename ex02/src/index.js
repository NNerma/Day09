
// Only change code below thise line
var myParametar;

function myFunction(myParametar){
   

    if (myParametar){
    return "The parametar is true!";
     }
    
     return "The parametar is false!";
    
}



myFunction(true);
console.log(myFunction(true));


myFunction(false);
console.log(myFunction(false));
// Only change code above thise line
    
module.exports = myFunction;