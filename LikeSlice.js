function slicet(InString,start, end){
    
    // initialize empty variables to accept later values
    var newArr = [];
    var newString = "";
    
    // handle negative start value & missing end value
    if (typeof end != "number" && start < 0 ){
        start = InString.length + start;
        end = InString.length;
    }
    // handles missing end value 
    else if (typeof end != "number"){
        end = InString.length;
    }

    // split the string into an array of characters
    var stringArr = InString.split('');
    
    // loop through the array between the provided indices & add those characters to a new array
    for (var i = start; i < end; i++){
        newArr.push(stringArr[i]);
    }
    
    // loop through the new array & concat values into a new string
    for (var h = 0; h < newArr.length; h++){
        newString += newArr[h];
    }

    // output the new String
    //console.log(newString);
    return(newString);
}


var string1 = "There is a blue car.";
var string2 = "prestidigitation";


console.log ('Test: ' + string1.slice(-2));

console.log ('Result: ' + slicet(string1, -2));