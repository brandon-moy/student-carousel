import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from './cards';

const cards = [
  {
    number: 0,
    name: 'Markus Doan-Le',
    front: 'images/markus.png',
    linkIcon: 'images/linkedin.png',
    city: 'Irvine, CA',
    projectName: 'Golos',
    projectLink: 'https://mdoanle.github.io/golos/',
    projectImage: 'images/golos.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/mdoanle',
    linked: 'https://www.linkedin.com/in/markusdoan-le/'
  },
  {
    number: 1,
    name: 'Jiheng Nie',
    front: 'images/jiheng.png',
    linkIcon: 'images/linkedin.png',
    city: 'Irvine, CA',
    projectName: 'Card Thief',
    projectLink: 'https://jihengnie.github.io/card-thief/',
    projectImage: 'images/cardthief.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/JihengNie',
    linked: 'https://www.linkedin.com/in/jiheng-nie/'
  },
  {
    number: 2,
    name: 'Brandon Moy',
    front: 'images/brandon.png',
    linkIcon: 'images/linkedin.png',
    city: 'Irvine, CA',
    projectName: 'Pokedex',
    projectLink: 'https://brandon-moy.github.io/pokedex/',
    projectImage: 'images/pokedex.png',
    githubIcon: 'images/github.svg',
    github: 'http://github.com/brandon-moy',
    linked: 'https://www.linkedin.com/in/brandon-k-moy/'
  },
  {
    number: 3,
    name: 'Eugene Park',
    front: 'images/eugene.png',
    linkIcon: 'images/linkedin.png',
    city: 'Fullerton, CA',
    projectName: 'Rick & Morty Character Viewer',
    projectLink: 'https://eugenepark215.github.io/rick-and-morty-character-viewer/',
    projectImage: 'images/rmcharacterview.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/Eugenepark215',
    linked: 'https://www.linkedin.com/in/eugenepark215/'
  },
  {
    number: 4,
    name: 'Anthony Urbina',
    front: 'images/anthony.png',
    linkIcon: 'images/linkedin.png',
    city: 'Los Angeles, CA',
    projectName: 'NFTinder',
    projectLink: 'https://anthonyurbina.github.io/ajax-project/',
    projectImage: 'images/nftinder.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/AnthonyUrbina',
    linked: 'https://www.linkedin.com/in/anthonyisaiahurbina/'
  },
  {
    number: 5,
    name: 'Daisy Yoo',
    front: 'images/daisy.png',
    linkIcon: 'images/linkedin.png',
    city: 'Orange County, CA',
    projectName: 'Feasting Eyes',
    projectLink: 'https://daisyyoo.github.io/feasting-eyes/',
    projectImage: 'images/feastingeyes.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/daisyyoo',
    linked: 'https://www.linkedin.com/in/daisy-yoo/'
  },
  {
    number: 6,
    name: 'Derrick Fleming',
    front: 'images/derrick.png',
    linkIcon: 'images/linkedin.png',
    city: 'Tustin, CA',
    projectName: 'My Villagers',
    projectLink: 'https://derrick-fleming.github.io/my-villagers/',
    projectImage: 'images/myvillagers.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/derrick-fleming',
    linked: 'https://www.linkedin.com/in/derrick-fleming/'
  },
  {
    number: 7,
    name: 'Jake Husband',
    front: 'images/jake.png',
    linkIcon: 'images/linkedin.png',
    city: 'Fullerton, CA',
    projectName: 'Fitness Loggers',
    projectLink: 'https://jacobhusband.github.io/fitness-logger/',
    projectImage: 'images/fitnesslogger.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/jacobhusband',
    linked: 'https://www.linkedin.com/in/jacob-husband/'
  },
  {
    number: 8,
    name: 'Jianni Cariaga',
    front: 'images/jianni.png',
    linkIcon: 'images/linkedin.png',
    city: 'Los Angeles Metropolitan Area',
    projectName: 'Game Finder',
    projectLink: 'https://jiannicariaga.github.io/game-finder/',
    projectImage: 'images/gamefinder.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/jiannicariaga',
    linked: 'https://www.linkedin.com/in/jiannicariaga/'
  },
  {
    number: 9,
    name: 'Quan Pham',
    front: 'images/quan.png',
    linkIcon: 'images/linkedin.png',
    city: 'Westminster, CA',
    projectName: 'MyMovieList',
    projectLink: 'https://quannampham.github.io/mymovielist/',
    projectImage: 'images/mymovielist.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/quannampham',
    linked: 'https://www.linkedin.com/in/quannampham/'
  },
  {
    number: 10,
    name: 'Matthew Kweon',
    front: 'images/matt.png',
    linkIcon: 'images/linkedin.png',
    city: 'Chino Hills, CA',
    projectName: 'MoBev!',
    projectLink: 'https://mattkweon.github.io/cocktail-card-deck/',
    projectImage: 'images/mobev.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/MattKweon',
    linked: 'https://www.linkedin.com/in/matthew-kweon/'
  },
  {
    number: 11,
    name: 'Ashley Ho',
    front: 'images/ashley.png',
    linkIcon: 'images/linkedin.png',
    city: 'Greater Los Angeles, CA',
    projectName: "Se'Fauxra",
    projectLink: 'https://ashleylho.github.io/Se-Fauxra/',
    projectImage: 'images/sefauxra.png',
    githubIcon: 'images/github.svg',
    github: 'https://github.com/ashleylho',
    linked: 'https://www.linkedin.com/in/ashleylho/'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Cards cards={cards} />);
