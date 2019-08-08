/* I DO NOT FEEL COMFORTABLE DOING THIS ASSIGNMENT AS I NEED TO STUDY MORE. SUBMITTING IT AS IT IS 
BECAUSE I AM ALREADY LATE*/

/* Consider the following snippet:

0 == '0'; // true
0 == [];  // true
"0" == [];  // false
Mathematically, if a == b and b == c, then a == c. 
Can you explain in your words why this is not true for the above snippet? */

var a = "0";
var b = 0;
var c = [];

console.log(a == b ? "true" : "false");
console.log(b == c ? "true" : "false");
console.log(a == c ? "true" : "false");
// 1. '"a" is a string while "c" is an Array';

/*Consider the following snippet:

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;
What do you think will happen with x == y, x === y and z === y and z == x? 
Try to think of answer first before running it on browser. 
Also, explain in your words why this happens? */

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

console.log(x == y ? "true" : "false");
console.log(x === y ? "true" : "false");
console.log(z === y ? "true" : "false");
console.log(z == x ? "true" : "false");

/*Consider the following snippet:

const o1 = { foo: "bar" };
const o2 = { foo: "bar" };
const o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
Does the order that you assign (o3 = o2 or o2 = o3) matter? 
*/
