# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  Using either class components or functional components
- How do you use JSX in a React component?
  Embed any JavaScript expression in JSX by wrapping it in curly braces {}
- How do you declare the props a React component needs?
  Props are declared as parameters of the function
- How do you pass props to a React component?
  Pass props to child component

export default function Profile() {
return (
<Avatar
person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
size={100}
/>
);
}

- How do you include JavaScript expressions in JSX?
  Insert valid JS expressions inside curly braces within JSX
- What are React hooks and what are the three "Rules of Hooks"?

Only \*
Call hooks at the top level
call hooks from react function
call hoooks from custom hook

- How do you manage state in a React component?
  Import and call useState
- How do you handle events in React?
  Use event handlers
- How do you let a parent component know that an event happened?

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
