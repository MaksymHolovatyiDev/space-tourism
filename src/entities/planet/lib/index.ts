import planet from 'entities/planet/assets/image-moon.webp';
import mars from 'entities/planet/assets/image-mars.webp';
import europa from 'entities/planet/assets/image-europa.webp';
import titan from 'entities/planet/assets/image-titan.webp';

export const planets = [
  {
    name: 'Moon',
    desc: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    dist: '384,400 km',
    time: '3 days',
    img: planet,
  },
  {
    name: 'Mars',
    desc: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    dist: '225 MIL. km',
    time: '9 months',
    img: mars,
  },
  {
    name: 'EUROPA',
    desc: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    dist: '628 MIL. km',
    time: '3 years',
    img: europa,
  },
  {
    name: 'TITAN',
    desc: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    dist: '1.6 BIL. km',
    time: '7 years',
    img: titan,
  },
];
