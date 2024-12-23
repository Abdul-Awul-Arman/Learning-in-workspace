# Framework vs. Library

## 1. Framework
- **Definition**: A framework is a pre-defined structure or platform for building applications. It provides the foundation and dictates how your application should be organized and interact with the provided tools.
- **Control Inversion**: In a framework, the framework calls your code. This is known as Inversion of Control (IoC).
- **Opinionated**: Frameworks are often more opinionated, meaning they enforce a specific way of building applications.
- **Examples**:
  - Web Development: React, Next.js, Angular, Django, Rails
  - Mobile Development: Flutter, React Native
  - Backend: Spring Boot, ASP.NET
- **Characteristics**:
  - Provides a skeleton or structure.
  - Guides development by enforcing patterns (e.g., MVC).
  - Integrated tools for routing, data handling, and more.
- **Example**:
  Using Django (a framework):
  ```python
  # Django sets up the project structure and calls your code through views.
  def my_view(request):
      return HttpResponse("Hello, Framework!")



Here’s the text you provided formatted as README.md:

markdown
Copy code
# Framework vs. Library
## Libraries
- Collection of reusable code.
- Reduces need to write repetitive/complex things from scratch.
- You control how/when it's used.
no/few boundaries
## Framework
- Predetermined architecture - you follow a specified pattern of development.
-You work  within the boundaries set by the framework 
- "Right" and "wrong" ways to use it.

# Why React?
### It's Composable!
Can create easily reusable and interchangeable "pieces of the web" that can be combined in various ways to create complex systems

### Declarative vs imperative
- Declarative: "What should be done"?
"Just tell me what needs to happen, and I'll worry abut how to done"
- Imperative: "How should it be done"?
"Describe to me every step on how to do something,and i wll do it."


# JSX= JavaScript xml

# First Project React facts

![React.js facts](./src/assets/image.png)
![React.js facts(new)](./React.js_facts/src/assets/image.png)

# Props are like function parameter  

### What do props help us accomplish?
Make a component more reusable.

# State

## When to Use State
- To handle user input (e.g., forms, clicks).
- To track data that changes dynamically (e.g., toggles, counters).
- To manage asynchronous operations (e.g., API responses).

 # if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.

### Directly modifying state variables  is not allowed in React. State updates should always use the setter function (setIsGoingOut).

# Visual Summary: `event.target` vs `event.currentTarget`

| Property            | Refers To                                      | Example Use Case                                                                 |
|---------------------|-----------------------------------------------|---------------------------------------------------------------------------------|
| `event.target`      | Element where the event **originated**        | Check which child element inside a parent was clicked.                          |
| `event.currentTarget` | Element where the listener is **attached**   | Ensure your logic runs on the parent (or the form, in form submission handlers). |

# Conditional rendering
- 1. What is "conditional rendering"?  
When we want to only sometimes display something on the page based on some kind of condition.

- 2. When would you use `&&`?  
When you want to either display something or NOT display something.

- 3. When would you use a ternary?  
When you need to decide which of 2 things to display.

- 4. What if you need to decide between > 2 options on what to display?  
`if...else if...else` conditional or maybe a `switch` statement.

# Pure Function

A **pure function** is a fundamental concept in functional programming. It refers to a function that adheres to the following principles:

## Characteristics of a Pure Function

1. **Deterministic**:
   - For the same input, a pure function always returns the same output.
   - Example:
     ```javascript
     function add(a, b) {
         return a + b;
     }
     ```
     - `add(2, 3)` will always return `5`.

2. **No Side Effects**:
   - A pure function does not modify any external state (variables, objects, files, etc.).
   - It depends only on its input arguments and does not alter the state of the program or rely on mutable data.
   - Example (pure function):
     ```javascript
     function multiply(a, b) {
         return a * b;
     }
     ```
     - This function does not modify external variables or state.
   - Example (impure function):
     ```javascript
     let total = 0;
     function addToTotal(amount) {
         total += amount; // Modifies external state (side effect)
         return total;
     }
     ```

## Advantages of Pure Functions

1. **Predictable Behavior**:
   - Pure functions make it easier to reason about the code since their output is predictable.

2. **Easier Testing**:
   - Testing is straightforward because pure functions don’t depend on or alter external states.

3. **Immutability**:
   - Promotes immutability, which helps avoid bugs caused by shared mutable state.

4. **Parallelization**:
   - Pure functions are thread-safe and can be parallelized because they don’t modify shared state.

## Examples

### Pure Function Example
```javascript
function square(x) {
    return x * x;
}
console.log(square(4)); // Always 16
```

### Impure Function Example
```javascript
let factor = 2;
function multiplyByFactor(num) {
    return num * factor; // Depends on external variable
}
console.log(multiplyByFactor(5)); // Result depends on `factor`
```

## Key Takeaway

- **Pure Function**: No side effects, same output for the same input.
- **Impure Function**: Might have side effects or depend on external variables.








