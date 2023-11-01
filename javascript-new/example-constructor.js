function ExampleConstructor() {}
console.log('Protype of: ', ExampleConstructor.prototype);
console.log('Typeof of: ', typeof ExampleConstructor);

const exampleInstance = new ExampleConstructor();
console.log(exampleInstance);

const isInstance = exampleInstance instanceof ExampleConstructor;
console.log(isInstance);
