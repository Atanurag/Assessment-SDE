
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

/* The function name fact takes one argument and return
 specific value or values after some operations.
/* At bottom fact() is called with number
 5 as an argument from the same function
  recursive call. In each recursive call, the value of argument n is decreased by 1.

When the value of n is equals to 0 there 
is no recursive call and the factorial of
 given number  is returned  from the fact function*/
function fact(n){
    if(n==0){
        return 1;
    }
    console.log(n)
    return n*fact(n-1);
}
console.log(fact(5))
//1 2 3 4 5 120





// 7 javascript BST
/*A binary search tree
 (BST) is a type of
  data structure that 
  allows for fast 
  insertion and search
   operations. It is called
    a "binary search tree"
     because each node has 
     at most two children 
     and the left child of 
     a node has
      a value 
      less than 
      the node's 
      value, 
      while the
       right 
       child has
        a value 
        greater than the node's value.

simple structure of bst  

        5
       /\
      3  10
     /    \
     1    14

*/

class Node { constructor(value) { this.value = value; this.left = null; this.right = null; } }

 class BinarySearchTree { constructor() { this.root = null; } 
 insert(value) { const newNode = new Node(value);

  if (this.root === null) { this.root = newNode; return this; }

   let current = this.root;
    while (true) { if (value === current.value) return undefined;

     if (value < current.value) { if (current.left === null) { current.left = newNode; return this; }

     current = current.left; } else { if (current.right === null) { current.right = newNode; return this; }

      current = current.right; } } } 
      find(value) 
      { if (this.root === null) return false;

       let current = this.root, found = false;

        while (current && !found) 
            { if (value < current.value) 
                { current = current.left; } 
                else if (value > current.value)
                 { current = current.right; } 
             else { found = true; } } 

             if (!found) return undefined; return current; } 

             contains(value) { if (this.root === null) return false;

              let current = this.root, found = false; while (current && !found) 
              { if (value < current.value) { current = current.left; }
               else if (value > current.value) { current = current.right; }

  else { return true; } } return false; } }






//The breakdown of code



class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*The Node class represents 
a single node in the tree. It has
 a value property for storing the
  node's value, and left and 
  right properties for storing
   references to its left and 
   right child nodes (which are 
    also Node objects).
*/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
/*
The BinarySearchTree 
class represents the
 tree itself. It has
  a root property that 
  points to the root
   node of the tree 
   (which is a Node object).

The insert method adds
 a new node to the tree
  with the given value.
   If the tree is empty,
    the new node becomes
     the root of the 
     tree. Otherwise,
      the method traverses
       the tree starting 
       from the root and 
       finds the correct
        position for the
  new node based on its
   value. If the
    value is less than 
    the current node's
     value, it goes to
      the left child; 
      if the value is 
        greater than
         the current
          node's value,
           it goes to the
            right child. 
            This continues
             until it finds
              an empty spot 
              where it can insert the new node.

*/

  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}/*
The find method 
searches for a 
node with the
 given value and returns
  it if it exists. It 
  starts at the root of 
  the tree and traverses
   the tree in a similar 
   way to the insert method, 
looking at the values of 
the nodes as it goes. If
 it finds a node with the
  given value, it returns it.
   If it reaches a leaf 
   node without finding
    the value, it returns
     undefined.

*/





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
