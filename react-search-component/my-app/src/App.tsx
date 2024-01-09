import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function SearchInput({ onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

function List({ items }) {
  if (items.length === 0) {
    return <div>No matches in your search</div>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function SearchableList({ strings }) {
  const [filter, setFilter] = useState('');

  const filteredStrings = strings.filter((str) =>
    str.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <SearchInput onSearchChange={setFilter} />
      <List items={filteredStrings} />
    </div>
  );
}

const quotes = [
  'Yer a wizard Harry.',
  "I hope you're pleased with yourselves.",
  'It does not do well to dwell on dreams and forget to live.',
  'To the well-organized mind, death is but the next great adventure.',
  "You're a little scary sometimes, you know that? Brilliant... but scary.",
  'There will be no foolish wand-waving or silly incantations in this class.',
  'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
  'If there is one thing Voldemort cannot understand, it is love.',
  'As much money and life as you could want!',
  'The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.',
  'There are some things you can’t share without ending up liking each other.',
  'Ah, music. A magic beyond all we do here!',
];

function App() {
  return <SearchableList strings={quotes} />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
