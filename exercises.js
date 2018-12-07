//1
let colors = ["red", "orange", "yellow", "green", "blue"];
//2
console.log(colors[0]);
//3
console.log(colors[2]);
//4
colors[4] = "ultraviolet";
//5
var fourthColor = colors[4];
//6
colors[5] = "purple";
//7
colors.unshift("black");
//8
console.log(colors.length);
//9
colors.pop();
console.log(colors.length);
//10
var text = "";
var i;
for (i = 0; i < colors.length; i++) { 
  text += console.log(colors[i]);
}
//11
for (i = 0; i < colors.length; i++) {
	text += console.log(colors[i] + " " +  i);
}
//12
var lastColor = colors[colors.length - 1];
console.log(lastColor);