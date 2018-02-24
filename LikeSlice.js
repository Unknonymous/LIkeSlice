function slicet(InString,start, end){
    
    // initialize empty variables to accept later values
    var newArr = [];
    var newString = "";
    
    if (typeof end != "number"){
        end = InString.length;
    }

    // split the string into an array of characters
    var stringArr = InString.split('');
    
    // loop through the array between the provided indices & add those characters to a new array
    for (var i = start; i < end; i++){
        newArr.push(stringArr[i]);
    }
    
    // loop through the new array & concat values into a new string
    for (var i = 0; i < newArr.length; i++){
        newString += newArr[i];
    }

    // output the new string
    //console.log(newString);
    return(newString);
}


var string1 = "There is a blue car.";
var string2 = "prestidigitation";


console.log ('Test: ' + string1.slice(6));

console.log ('Result: ' + slicet(string1, 6));