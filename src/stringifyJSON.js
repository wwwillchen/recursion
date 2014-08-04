// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(input, arr) {
	console.log("first input:");
	console.log(input);
	var stringInput, arrayInput;
	if (Array.isArray(input)==false) {
		if (input === null) {
			input = "null";
		} else if (typeof input === "string") {
			input = '"' + input + '"';
		}
		stringInput = input.toString();
		
	} else {
		stringInput = "[" + input.toString() + "]";
	}
	arrayInput = stringInput.split("");
	
	console.log("Input: " + arrayInput);
	console.log(Array.isArray(arrayInput));
	var arrayOutput = arr || [];
	console.log(arrayOutput);
	
	for (var i = 0, l = arrayInput.length; i < l; i++) {
		arrayOutput.push(arrayInput.shift());
		console.log(typeof arrayOutput);
	}
	
	/*

	if(arrayInput.length > 0) {
		console.log("Input length: " + arrayInput.length);
		console.log("Input for recursion: " + arrayInput);
		stringifyJSON(arrayInput,arrayOutput);
	}
	*/

		console.log("break");
		var finalOutput = arrayOutput.join("");
		console.log("Final: " + finalOutput);
		return finalOutput;		
};
