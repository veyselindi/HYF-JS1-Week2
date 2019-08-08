/*10. Write a program to answer the following questions:
10.1 Can you store multiple types in an array? Numbers and strings? 
Make an example that illustrates your answer.*/

let question10 = [75, 'looks like I can', 'store numbers and strings in an array' ]
console.log(question10);


/*10.2 Can you compare infinities? 
(Not in Eyad's world) - does 6/0 === 10/0? How can you test this?*/
/* 10.3 Add console.log statements to the above program 
in which you show that you understand the concepts (just like you've done in the above assignments).*/

let firstCalculation = 6/0;
let secondCalculation = 10/0;

if  (firstCalculation===secondCalculation) {
    console.log("YES 6/0 === 10/0 is")
}
else {
    console.log("NO 6/0 === 10/0 is NOT")
};




