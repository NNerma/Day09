

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
    
module.exports = myFunction;