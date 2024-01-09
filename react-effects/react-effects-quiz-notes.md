# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
When the component has been rendered and inserted into the DOM

- What is a React Effect?
It allows you to perform side effects in your component
- When should you use an Effect and when should you not use an Effect?
Use  it after rendering a component
You shouldn't use it if you need to make a lot of calculations of a render
- When do Effects run?
After the first render and after every update
- What function is used to declare an Effect?
The useEffect()
- What are Effect dependencies and how do you declare them?
Effect dependencies  are values that the effect relies on to determine when to re-run.

useEffect(() => {
  return () => {
  };
- Why would you want to clean up from an Effect?
Prevent buys and managing resources efficiently
- How do you clean up from an Effect?
You remove a function from within the useEffect hook for ex. removeEventListener()
- When does the cleanup function run?
Before the component unmounts and before re-running the effect

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
