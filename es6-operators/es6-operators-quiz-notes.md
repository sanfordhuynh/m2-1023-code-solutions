# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

&& is an operator for a set of boolean operands will be true if and only all operands are true
|| is an operator for a set of boolean operands will be true if atleast one or more operands is true

Can be used to check if objects are 'truthy' or 'false;

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  If operators && and || are used, short-circuit evaluation does not evaluate all operands, they stop when there is a result

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  For ??, it returns its right-hand side operand when its left-hand side operand is null or undefined

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  condition ? expressionIfTrue : expressionIfFalse;
  It is more suitable for simple conditions

- What is the `?.` (optional chaining) operator? When would you use it?
  It allows you to access nested properties and methods without causing error when function is null or undefined. It's useful for working with with data that might be missing or incomplete

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  It creates copies of the array or object and you can use it to merge array/objects into a new one

- What data types can be spread into an array? Into an object?
  Existing arrays or strings for Array
  Existing arrays/ object/ strings for an object

- How does spread syntax differ from rest syntax?
  Spread: used to expand elements or properties from an existing array, object
  Rest: collect remaining elements into an array or properties into an object,

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
