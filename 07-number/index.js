//toExponential()
var myNumber = 123456;
myNumber.toExponential(); // returns 1.23456e+5
myNumber.toExponential(1); //returns 1.2e+5
myNumber.toExponential(2); //returns 1.23e+5
myNumber.toExponential(3); //returns 1.235e+5
//toFixed()
myNumber = 10.87886;
myNumber.toFixed(); // returns 11
myNumber.toFixed(1); //returns 10.9
myNumber.toFixed(2); //returns 10.88
myNumber.toFixed(3); //returns 10.879
myNumber.toFixed(4); //returns 10.8789
//toLocaleString()
myNumber = 10667.987;
myNumber.toLocaleString(); // returns 10,667.987 - US English
myNumber.toLocaleString('de-DE'); // returns 10.667,987 - German
myNumber.toLocaleString('ar-EG'); // returns 10667.987 in Arebic
//toPrecision()
myNumber = 10.5679;
myNumber.toPrecision(1); // returns 1e+1
myNumber.toPrecision(2); // returns 11
myNumber.toPrecision(3); // returns 10.6
myNumber.toPrecision(4); // returns 10.57
//toString
myNumber = 123;
myNumber.toString(); // returns '123'
myNumber.toString(2); // returns '1111011'
myNumber.toString(4); // returns '1323'
myNumber.toString(8); // returns '173'
myNumber.toString(16); // returns '7b'
myNumber.toString(36); // returns '3f'
//valueOf()
var myNumberObj = new Number(123);
console.log(myNumberObj); //Output: a number object with value 123
console.log(myNumberObj.valueOf()); //Output: 123
console.log(typeof myNumberObj); //Output: object
var num2 = myNumberObj.valueOf(); //123
console.log(num2); //Output: 123
console.log(typeof num2); //Output: number
