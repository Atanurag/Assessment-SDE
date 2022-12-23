
//1: for loop
/* The loops are used to iterate the piece of code .It makes the code compact
. It is mostly used in array.*/

/*In JavaScript the for loop iterates the elements for the fixed number 
of times or specific number of times.  */

   /*
   The syntax of for loop is 
   for (initialization; condition; increment)  
    {  
        code to be executed  
    }  */
 
for (let i=1; i<=5; i++)  
{  
console.log(i); //1 2 3 4 5  
} 

//2 while loop

/*The while loop iterates the elements for the infinite number of times or until any 
specific condtion get fulfilled. It should be used if number of iteration is not
 known. The syntax of while loop is given below.
*/

/*   The syntax of while loop is 
while (condition)  
    {  
        code to be executed  
    } 
 */
 
let i=1;  
while (i<=5)  
{  
console.log(i);//1 2 3 4 5  
i++;  
}  

// 3 continue statement
/*The continue statement is used to jumps over an iteration of the loop.
 When we apply the continue statement, the program's flow immediately 
 moves to the conditional expression, and if the condition is true, 
 then the next iteration will be started; otherwise, the control exits the loop.*/

for (let i=1; i<=5; i++)  
{  
    if(i==3){
       continue; 
    }
console.log(i); //1 2  4 5  
} 

//4 if-else statement 
/*The  if-else statement is used to execute the code depending 
upon whether given condition is true or false. There are three 
types of if statement in JavaScript.*/

    
    //If else statement
    
     /*  If Statement 
     if(expression){  
    //content to be evaluated  
    }  */
    if(1<5){  
console.log("1  is smaller than 5");  //1  is smaller than 5
}  
 /*    else Statement   
 if(expression){  
    //content to be evaluated if condition is true  
    }  
    else{  
    //content to be evaluated if condition is false  
    }   
    }*/
    
if(1>5){  
console.log("1 is greater than 5");
}  
else{  
console.log("1 is not greater than 5");//1 is not greater than 5
}  

//5 switch statement

/*The  switch statement is used to execute one code from 
multiple expressions. It is just like else if statement
 But it is convenient than if..else..if because it can
  be used with numbers, characters
and other datatypes.
*/

let grade='B';  
switch(grade){  
case 'A':  
console.log("A grade");   
break;  
case 'B':  
console.log("B grade");  //B grade
break;  
case 'C':  
console.log("C grade");
break;  
default:  
console.log("No grade");
}  


// 6 Recursion

/*A function that calls itself is called a recursive function.*/

/*function Recursion() {
    // function code
    Recursion();
    // function code
}
Recursion();*/







// 8 javascript closure

/*A closure can be defined as a JavaScript feature in which the inner function
 has access to the outer function variable. In JavaScript,
  every time a closure is created with the creation of a function*/

function f1() {
 // variable defined outside the inner function
    let name = 'John';
// inner function
 function f2() {
// accessing name variable
 return 'Hi' + ' ' + name;
    
    } return f2;
}
const g1 = f1();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value