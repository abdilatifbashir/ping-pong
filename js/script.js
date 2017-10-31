//business logic 
/*function that recieve input from user evaluate using "if else statement"
 and convert it arrays*/
var pingGeneratedArrays= function(userInput) {
	var resultOfArray = [];
	//for loop
	for(var i = 1; i <= userInput; i += 1) {
		if(((i % 3) === 0) && ((i % 5) === 0)) {
			resultOfArray.push("pingpong");
		} else if ((i % 3) === 0) {
			resultOfArray.push("ping");
		} else if ((i % 5) === 0) {
			resultOfArray.push("pong");
		} else {
			resultOfArray.push(i);
		}
	}
	return resultOfArray;
}