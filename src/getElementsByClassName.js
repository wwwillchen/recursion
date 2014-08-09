// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var x = document.getElementsByClassName(className);
  console.log(x);
  console.log(className);
  console.log(document.body.childNodes);
  console.log(document.body.classList);

  // Actual code begins
  var output = [];
  var bodyClassList = document.body.classList;
  for (var i = 0, l = bodyClassList.length; i < l; i++) {
    if(bodyClassList[i]===className) {
      output.push(document.body);
    }
  }

  var childLookup = function(inputClass,starting) {
    console.log("starting:");
    console.log(starting);
    var starting;
    for (var i = 0, l = starting.length; i < l; i++) {
      console.log("Count of I: " + i);
      console.log("The length of BCN: " + l);
      if (starting[i].hasOwnProperty("classList")) {
        console.log("Mid class List:");
        console.log(starting[i]["classList"]);
        for (var j = 0, m = starting[i]["classList"].length; j < m; j++) {
          if(starting[i]["classList"][j] === inputClass) {
            console.log("pushed in");
            output.push(starting[i]);
          }
        }
      }
    }

    for (i = 0, l = starting.length; i < l; i++) {
      if(starting[i].childNodes.length !== 0) {
        childLookup(inputClass,starting[i].childNodes);
      }
    }
  }

  childLookup(className,document.body.childNodes);

  console.log("final output: ");
  console.log(output);
  return output;
};
