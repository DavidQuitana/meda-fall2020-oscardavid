//Datatypes
"strings";
1000;
false;

// Variables
var someVariable = -100;
var isItRainig = false;

//If Statements
if (someVariable > 10) {
    console.log("This number is higher than 10.");

    if (someVariable < 1000) {
        console.log("This number is lower than 1000");
    }

} else {
    console.log("This number is lower than 10.");
}

if (isItRainig == true) {
    console.log("Bring an umbrella!");
}

//functions 
function coolFunction() {
    console.log(100);
    console.log(10);
    console.log(1);
}

coolFunction();
coolFunction();
coolFunction();

// Arguments & Parameters 
// Arguments get store inside of Parameters 
// Arguments are the values given to the function, and parameters are the function variables that will hold these values.

function addExclamation(message) {
    console.log(message, "!!!");
}

addExclamation("Hello how are you");
addExclamation("It is raining");
addExclamation("Goodbye");