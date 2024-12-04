###03/12/24
#let and const
Variables declared with let and const eliminate this specific issue of hoisting because they’re scoped to the block, not to the function. Previously, when you used var, variables were either scoped globally or locally to an entire function scope.

If a variable is declared using let or const inside a block of code (denoted by curly braces { }), then the variable is stuck in what is known as the temporal dead zone until the variable’s declaration is processed. This behavior prevents variables from being accessed only until after they’ve been declared.

let and const also have some other interesting properties.

Variables declared with let can be reassigned, but can’t be redeclared in the same scope.
Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.


#destructuring array

const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

In this example, the brackets [ ] represent the array being destructured and x, y, and z represent the variables where you want to store the values from the array. Notice how you don’t have to specify the indexes for where to extract the values from because the indexes are implied.

TIP: You can also ignore values when destructuring arrays. For example, const [x, , z] = point; ignores the y coordinate and discards it.


#destructuring object
after destructuring a value of object value of this is no longer belong to the object that pulled from.

#problem with for in loop - for in loop iterate every thing in the object (like nested function) but for of loop don't

#for of loop
 You don’t have to worry about adding new properties to objects. The for...of loop will only loop over the values in the object.

#spread vs rest
You can think of the rest parameter like the opposite of the spread operator; if the spread operator is like unboxing all of the contents of a package, then the rest parameter is like taking all the contents and putting them back into the package.

#Variadic function
Variadic functions are functions that take an indefinite number of arguments.

|#arrow function expression 
Regular functions can be either function declarations or function expressions, however arrow functions are always expressions. In fact, their full name is "arrow function expressions", so they can only be used where an expression is valid.

#array with object destructure

function createSundae([scoops = 1, toppings = ['Hot Fudge']] = []) { … }
With this function setup, if you want to use the default number of scoops but change the toppings, you'd have to call your function a little...oddly:
createSundae([undefined, ['Hot Fudge', 'Sprinkles', 'Caramel']]);
Since arrays are positionally based, we have to pass undefined to "skip" over the first argument (and accept the default) to get to the second argument.

##03/12/24
##symbol
#A symbol is a unique and immutable data type that is often used to identify object properties.
#next() function

##set
 a set is a collection of distinct items. For example, {2, 4, 5, 6} is a set because each number is unique and appears only once. However, {1, 1, 2, 4} is not a set because it contains duplicate entries (the 1 is in there more than once!).


###DOM
