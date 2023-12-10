# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  A user action or system-generated occurrence that a web application can respond to.
  For ex. click a button, moving a mouse
- What is an "event handler"? Which component declares the handler?
  An event handler is a function that is called in response to a specific event, such as a mouse click
  The component that needs to react to an event is responsible for declaring the event handler
- How do you pass an event handler to a React component?
  Define the event handler function in the parent component and then pass it down to the child component through props
- What is the naming convention for event handlers?
  it is common to name event handlers as handle followed by the event name
- What is an "event handler prop"? Which component declares the prop?
  A type of prop that's'used to pass an event handling function from a parent component to a child component.
- What are some custom event handler props a component may wish to define?
  onsubmit
- What is the naming convention for custom event handler props?
  Use the 'on' prefix and a name that describes the event

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
