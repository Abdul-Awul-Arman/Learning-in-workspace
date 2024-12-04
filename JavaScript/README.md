### 03/12/24

# let and const
Variables declared with let and const eliminate this specific issue of hoisting because they’re scoped to the block, not to the function. Previously, when you used var, variables were either scoped globally or locally to an entire function scope.

If a variable is declared using let or const inside a block of code (denoted by curly braces { }), then the variable is stuck in what is known as the temporal dead zone until the variable’s declaration is processed. This behavior prevents variables from being accessed only until after they’ve been declared.

let and const also have some other interesting properties.

Variables declared with let can be reassigned, but can’t be redeclared in the same scope.
Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.


# destructuring array

const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

In this example, the brackets [ ] represent the array being destructured and x, y, and z represent the variables where you want to store the values from the array. Notice how you don’t have to specify the indexes for where to extract the values from because the indexes are implied.

TIP: You can also ignore values when destructuring arrays. For example, const [x, , z] = point; ignores the y coordinate and discards it.


# destructuring object
after destructuring a value of object value of this is no longer belong to the object that pulled from.

#problem with for in loop - for in loop iterate every thing in the object (like nested function) but for of loop don't

# for of loop
 You don’t have to worry about adding new properties to objects. The for...of loop will only loop over the values in the object.

# spread vs rest
You can think of the rest parameter like the opposite of the spread operator; if the spread operator is like unboxing all of the contents of a package, then the rest parameter is like taking all the contents and putting them back into the package.

# Variadic function
Variadic functions are functions that take an indefinite number of arguments.

|# arrow function expression 
Regular functions can be either function declarations or function expressions, however arrow functions are always expressions. In fact, their full name is "arrow function expressions", so they can only be used where an expression is valid.

# array with object destructure

function createSundae([scoops = 1, toppings = ['Hot Fudge']] = []) { … }
With this function setup, if you want to use the default number of scoops but change the toppings, you'd have to call your function a little...oddly:
createSundae([undefined, ['Hot Fudge', 'Sprinkles', 'Caramel']]);
Since arrays are positionally based, we have to pass undefined to "skip" over the first argument (and accept the default) to get to the second argument.

### 03/12/24

# symbol

# A symbol is a unique and immutable data type that is often used to identify object properties.
# next() function

# set
 a set is a collection of distinct items. For example, {2, 4, 5, 6} is a set because each number is unique and appears only once. However, {1, 1, 2, 4} is not a set because it contains duplicate entries (the 1 is in there more than once!).


# DOM

# The DOM is an interface for HTML documents. Basically, the DOM is a representation of a document which we can use to manipulate the document's structure, styles, and content using JavaScript.

## getElementsByTagName
One of the methods made available by the DOM for gaining access to elements is  document.getElementsByTagName()  .  We pass the desired tag name to this method (e.g. "body," "h3," or "form") and it returns a collection of all of the elements within the DOM with that tag name.

## getElementsByClassName
 a collection of all elements with a certain class using the method  document.getElementsByClassName() , passing it the class name we would like to access.

## getElementById
One of the most useful DOM methods,  document.getElementById() , returns the element with a given id .  As you can see from the name of the method, it will only return one element — this makes sense, though, as in a correctly formatted HTML document, there will only ever be one element with a given id 

## queryselector()
The  document.querySelector()  method returns the first element in the DOM that matches the given selector(s).  You can use tag names, classes, id  attributes, or a mixture of the three:

document.querySelector('p')  — returns the first  <p>  element

document.querySelector('.text-white')  — returns the first element with class  text-white

document.querySelector('#art-001')  — returns the element with  id  attribute  art-001

document.queryselector('p.text-white')  — returns the first  <p>  element with class  text-white    

This method has a partner method, document.querySelectorAll() , which returns an  NodeList  containing all elements which match the given selector(s).

# DOM other selector
element.children  — an  HTMLCollection  containing all child elements of element

element.parentElement  — element's parent element (any given element can only have up to one parent)

element.nextElementSibling  +  element.previousElementSibling  — these allow us to iterate through a given level (between list items, for example)

# Modifying dom 
modifying an element's contents with  innerHTML  and  textContent

adding and removing CSS classes with  classList

modifying styles directly with the  style  property

setting attributes with  setAttribute()

creating new elements with  createElement()  and adding them to the DOM with  appendChild()

## JavaScript DOM Selectors and Their Return Types

| Selector Method                          | Description                                      | Return Type             | Notes                                      |
|------------------------------------------|--------------------------------------------------|-------------------------|--------------------------------------------|
| **`document.getElementById(id)`**        | Selects a single element by its `id`.            | `Element` or `null`     | Returns `null` if no match is found.       |
| **`document.getElementsByClassName(className)`** | Selects all elements with the specified class.   | `HTMLCollection`        | Live collection; updates when DOM changes. |
| **`document.getElementsByTagName(tagName)`** | Selects all elements with the specified tag name. | `HTMLCollection`        | Live collection; updates when DOM changes. |
| **`document.querySelector(selector)`**   | Selects the first element matching the CSS selector. | `Element` or `null`     | Returns `null` if no match is found.       |
| **`document.querySelectorAll(selector)`**| Selects all elements matching the CSS selector.  | `NodeList`              | Static; does not update when DOM changes.  |
| **`document.getElementsByName(name)`**   | Selects elements by the `name` attribute.        | `NodeList`              | Primarily used for form controls.          |
| **`parentNode.childNodes`**              | Retrieves all child nodes (including text nodes, comments). | `NodeList`              | Live collection; includes non-element nodes. |
| **`parentNode.children`**                | Retrieves all child elements (excludes text and comment nodes). | `HTMLCollection`        | Live collection.                           |
| **`document.forms`**                     | Selects all `<form>` elements in the document.   | `HTMLCollection`        | Live collection.                           |
| **`document.images`**                    | Selects all `<img>` elements in the document.    | `HTMLCollection`        | Live collection.                           |
| **`document.links`**                     | Selects all `<a>` elements with `href` attributes. | `HTMLCollection`        | Live collection.                           |
| **`document.anchors`**                   | Selects all `<a>` elements with a `name` attribute. | `HTMLCollection`        | Legacy; rarely used today.                 |

### Notes:
1. **`HTMLCollection`**: A live collection that automatically updates to reflect changes in the DOM.
   - Example: `document.getElementsByClassName('example')`
2. **`NodeList`**: May be live or static depending on the method used.
   - Example: `querySelectorAll` returns a **static** NodeList, while `childNodes` is **live**.
3. To use array methods (e.g., `map`, `filter`), convert collections (`NodeList` or `HTMLCollection`) to an array:
   ```javascript
   const elementsArray = Array.from(document.querySelectorAll('.example'));
   const filteredElements = elementsArray.filter(el => el.textContent.includes('example'));

   ## Element vs NodeList vs HTMLCollection

| Feature                     | **Element**                     | **NodeList**                   | **HTMLCollection**             |
|-----------------------------|----------------------------------|--------------------------------|--------------------------------|
| **Definition**              | Represents a single DOM element. | A collection of DOM nodes (elements, text, comments, etc.). | A collection of DOM elements. |
| **Returned By**             | Methods like `document.getElementById()` or `querySelector()`. | Methods like `querySelectorAll()` or `childNodes`. | Methods like `getElementsByClassName()` or `children`. |
| **Content**                 | A single DOM element.            | Can include elements, text nodes, or comments. | Only DOM elements (no text or comment nodes). |
| **Array-Like**              | No. It is a single object.        | Yes. Indexed like an array.    | Yes. Indexed like an array.    |
| **Iterable** (ES6+ `for...of`) | Not directly iterable.          | Yes, iterable directly.        | No, not directly iterable.     |
| **Live Updates**            | Not applicable.                  | Depends on the method (e.g., `querySelectorAll()` is static, `childNodes` is live). | Live; reflects changes in the DOM. |
| **Array Methods**           | Not applicable.                  | Limited (`forEach` in modern browsers). | None; must convert to an array. |
| **Performance**             | Fast, as it deals with a single node. | Slightly slower due to collection traversal. | Slightly slower due to collection traversal. |
| **Use Case**                | Accessing or modifying a single DOM element. | Working with multiple nodes, such as searching or manipulating groups of elements. | Specifically accessing or iterating over elements. |

---

### **Detailed Comparison**

#### **Element**
- Represents one specific DOM node (like `<div>` or `<span>`).
- Common methods: 
  ```javascript
  const element = document.getElementById('myId');
  element.style.color = 'red'; // Directly modify a single element




## Key Differences: NodeList vs Array-Like Object

| Feature                     | NodeList                          | Array-Like Object                  |
|-----------------------------|------------------------------------|------------------------------------|
| **Source**                 | Returned by DOM methods (e.g., `document.querySelectorAll`) | Found in JavaScript objects (e.g., `arguments`) |
| **Contains**               | DOM nodes (elements, text, comments) | Indexed items (any type)           |
| **Array Methods**          | Limited support (`forEach`, `entries` in modern browsers) | No array methods available         |
| **Iterable**               | Yes (ES6+ via `for...of` or `forEach`) | No, unless explicitly given an iterator |
| **Conversion to Array**    | Use `Array.from()` or spread (`[...NodeList]`) | Use `Array.from()` or spread (`[...arrayLike]`) |
| **Live Updates**           | Sometimes (e.g., `childNodes` is live) | Never                              |
| **Use Case**               | DOM manipulation                  | General-purpose                    |

### Example: Converting to an Array
If you need to use array methods like `map`, `filter`, or `reduce`, convert to an array first:

```javascript
// Convert NodeList to Array
const nodesArray = Array.from(document.querySelectorAll('.my-class'));
const filteredNodes = nodesArray.filter(node => node.textContent.includes('example'));

// Convert Array-Like Object to Array
function example() {
  const argsArray = Array.from(arguments);
  const doubled = argsArray.map(arg => arg * 2);
  console.log(doubled);
}
example(1, 2, 3);

### A live collection in JavaScript refers to a DOM collection that automatically updates itself to reflect changes made to the document. If the DOM changes (elements are added, removed, or modified), the live collection immediately reflects those changes without needing to re-query the DOM

