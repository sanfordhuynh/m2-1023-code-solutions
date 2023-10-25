# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  const function = (param) => { };

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  It results the result of the expression, implicit return

- When using _concise body syntax_, how do you return an object literal?
  You need to wrap the key/value pairs in {}

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    () => 42

  - How many arguments does the arrow function take?
    0, it has no params

  - What value does it return?
    42

  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    function

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    (y) => { }
  - How many arguments does the arrow function take?
    1
  - What value does it return?
    A console log of 4y
  - How many arguments are passed to the function `bar`?
    1
  - What type of argument is passed to the function `bar`?
    function
  - When does the arrow function's code get executed?
    When it receives a parameter in Y

- How does the value of `this` differ between standard functions and arrow functions?
  In standard function, the value of 'this' is dynamically scoped
  For arrow functions, 'this' refers to the value of the suround scope of the function

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
