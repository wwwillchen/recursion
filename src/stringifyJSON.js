// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(input) {
	var output;
	if (input === null) {
		output = "null";
	} else if (typeof input === "string") {
		output = '"' + input + '"';
	} else if (Array.isArray(input)) {
		output = "[";
		for (var i = 0, l = input.length; i < l; i++) {
			if (i > 0) {
				output += ",";
			}
			output += stringifyJSON(input[i]);
		}
		output += "]";
	} else if (typeof input === "object") {
		output = "{";
		var counter = 0;
		for (var property in input) {
			if (counter) {
				output += ",";
			}
			if (property === "undefined" || property === "functions") {
				break;
			}
			output += stringifyJSON(property) + ":" + stringifyJSON(input[property]);
			counter++;
		}
		output += "}";
	} else {
		output = input.toString();
	}
	return output;

};
