import React from 'react';
import Accordion from './components/Accordion';

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

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
