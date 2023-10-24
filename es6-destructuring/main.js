/* eslint-disable no-unused-vars */
const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353,
};

const bookResult = ({ title, author, libraryID }) =>
  console.log(
    `The title of the book is ${title}, the author is ${author}, and the library id is ${libraryID}`
  );

bookResult(book1);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345,
};

const { title: title2, author: author2, libraryID: libraryID2 } = book2;

const book2Result = ({
  title: title2,
  author: author2,
  libraryID: libraryID2,
}) =>
  console.log(
    `The title of the book is ${title2}, the author is ${author2}, and the library id is ${libraryID2}`
  );

book2Result(book2);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233,
  },
];

const [book3, book4, book5] = library;

console.log(`Book3:`, book3);
console.log(`Book4:`, book4);
console.log(`Book5:`, book5);

const [, book6] = library;
console.log(`Book6: `, book6);
