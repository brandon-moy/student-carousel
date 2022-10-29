import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from './cards';

const cards = [
  {
    number: 0,
    name: 'Markus Doan-Le',
    front: 'images/markus.png',
    linkIcon: 'images/linkedin.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/mdoanle',
    linked: 'https://www.linkedin.com/in/markusdoan-le/'
  },
  {
    number: 1,
    name: 'Jiheng Nie',
    front: 'images/jiheng.png',
    linkIcon: 'images/linkedin.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/JihengNie',
    linked: 'https://www.linkedin.com/in/jiheng-nie/'
  },
  {
    number: 2,
    name: 'Brandon Moy',
    front: 'images/brandon.png',
    linkIcon: 'images/linkedin.png',
    githubIcon: 'images/github.svg',
    github: 'http://github.com/brandon-moy',
    linked: 'https://www.linkedin.com/in/brandon-k-moy/'
  },
  {
    number: 3,
    name: 'Eugene Park',
    front: 'images/eugene.png',
    linkIcon: 'images/linkedin.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/Eugenepark215',
    linked: 'https://www.linkedin.com/in/eugenepark215/'
  },
  {
    number: 4,
    name: 'Anthony Urbina',
    front: 'images/anthony.png',
    linkIcon: 'images/linkedin.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/AnthonyUrbina',
    linked: 'https://www.linkedin.com/in/anthonyisaiahurbina/'
  },
  {
    number: 5,
    name: 'Daisy Yoo',
    front: 'images/daisy.png',
    linkIcon: 'images/linkedin.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/daisyyoo',
    linked: 'https://www.linkedin.com/in/daisy-yoo/'
  },
  {
    number: 6,
    name: 'Derrick Fleming',
    front: 'images/derrick.png',
    linkIcon: 'images/linkedin.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/derrick-fleming',
    linked: 'https://www.linkedin.com/in/derrick-fleming/'
  },
  {
    number: 7,
    name: 'Jake Husband',
    front: 'images/jake.png',
    linkIcon: 'images/linkedin.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/jacobhusband',
    linked: 'https://www.linkedin.com/in/jacob-husband/'
  },
  {
    number: 8,
    name: 'Jianni Cariaga',
    front: 'images/jianni.png',
    linkIcon: 'images/linkedin.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/jiannicariaga',
    linked: 'https://www.linkedin.com/in/jiannicariaga/'
  },
  {
    number: 9,
    name: 'Quan Pham',
    front: 'images/quan.png',
    linkIcon: 'images/linkedin.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/quannampham',
    linked: 'https://www.linkedin.com/in/quannampham/'
  },
  {
    number: 10,
    name: 'Matthew Kweon',
    front: 'images/matt.png',
    linkIcon: 'images/linkedin.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/MattKweon',
    linked: 'https://www.linkedin.com/in/matthew-kweon/'
  },
  {
    number: 11,
    name: 'Ashley Ho',
    front: 'images/ashley.png',
    linkIcon: 'images/linkedin.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/ashleylho',
    linked: 'https://www.linkedin.com/in/ashleylho/'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Cards cards={cards} />);
