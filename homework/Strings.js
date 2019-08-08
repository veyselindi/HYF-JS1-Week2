const myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
const myNewString = myString.replace(/,/g, " ");
console.log(myNewString);

let str = "dlroW olleH"; // const gave an error so I used let. Not sure if that was allowed :)
str = str.split(""); //convert to array
str = str.reverse(); //reverse order
str = str.join(""); //then join the reverse order values together
console.log(str);

/*Consider the following string:

const myString = "hello,this,is,a,difficult,to,read,sentence";
Add the string to your file and log it.
Log the length of myString.
The commas make that the sentence is quite hard to read. 
Find a way to remove the commas from the string and replace them with spaces.

const str = 'dlroW olleH';
The string doesn't make any sense. Find a way to reverse this string so that it becomes readable.

*/
