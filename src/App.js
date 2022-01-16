import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'Die monster. You dont belong in this world!',
    content:
      'It was not by my hand that I am once again given flesh. I was called here by humans who wish to pay me tribute.',
  },
  {
    title: 'Tribute!?! You steal mens souls and make them your slaves!',
    content: 'Perhaps the same could be said of all religions...',
  },
  {
    title:
      'Your words are as empty as your soul! Mankind ill needs a savior such as you!',
    content: 'What is a Man? A miserable litle pile of secrets',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
