# webpack-and-babel-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Webpack?
  It examins your code, starting at its entry point, and recursively scanning the import statements to find all the modules your code uses
- What is the advantage of using Webpack (or a similar bundler)?
  It builds a dependency graph and analyzes it to find and remove code that is not in use (using a process known as tree shaking). It renames functions, variables, classes, etc., to ensure there are no name conflicts and to minimize and obfuscate the resulting JavaScript code
- What is Babel?
  aAtoolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments
- What is the advantage of using Babel (or a similar transpiler)?
  Transform syntax
  Source code transformations

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
