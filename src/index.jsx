import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from './cards';

const cards = [
  {
    number: 0,
    name: 'Markus Doan-Le',
    front: 'images/markus.png',
    back: 'images/logo.png',
    linked: 'https://www.linkedin.com/in/markusdoan-le/'
  },
  {
    number: 1,
    name: 'Jiheng Nie',
    front: 'images/jiheng.png',
    back: 'images/logo.png',
    linked: 'https://www.linkedin.com/in/jiheng-nie/'
  },
  {
    number: 2,
    name: 'Brandon Moy',
    front: 'images/brandon.png',
    back: 'images/logo.png',
    linked: 'https://www.linkedin.com/in/brandon-k-moy/'
  },
  {
    number: 3,
    name: 'Eugene Park',
    front: 'images/eugene.png',
    back: 'images/logo.png',
    linked: 'https://www.linkedin.com/in/eugenepark215/'
  },
  {
    number: 4,
    name: 'Anthony Urbina',
    front: 'images/anthony.png',
    back: 'images/logo.png',
    linked: 'https://www.linkedin.com/in/anthonyisaiahurbina/'
  },
  {
    number: 5,
    name: 'Daisy Yoo',
    front: 'images/daisy.png',
    back: 'images/logo.png',
    linked: 'https://www.linkedin.com/in/daisy-yoo/'
  },
  {
    number: 6,
    name: 'Derrick Fleming',
    front: 'images/derrick.png',
    back: 'images/logo.png',
    linked: 'https://www.linkedin.com/in/derrick-fleming/'
  },
  {
    number: 7,
    name: 'Jake Husband',
    front: 'images/jake.png',
    back: 'images/logo.png',
    linked: 'https://www.linkedin.com/in/jacob-husband/'
  },
  {
    number: 8,
    name: 'Jianni Cariaga',
    front: 'images/jianni.png',
    back: 'images/logo.png',
    linked: 'https://www.linkedin.com/in/jiannicariaga/'
  },
  {
    number: 9,
    name: 'Quan Pham',
    front: 'images/quan.png',
    back: 'images/logo.png',
    linked: 'https://www.linkedin.com/in/quannampham/'
  },
  {
    number: 10,
    name: 'Matthew Kweon',
    front: 'images/matt.png',
    back: 'images/logo.png',
    linked: 'https://www.linkedin.com/in/matthew-kweon/'
  },
  {
    number: 11,
    name: 'Ashley Ho',
    front: 'images/ashley.png',
    back: 'images/logo.png',
    linked: 'https://www.linkedin.com/in/ashleylho/'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Cards cards={cards} />);
