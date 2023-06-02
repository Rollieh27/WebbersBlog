const { User } = require('../models');

const dummyUsers = [
    {
        id: 1,
        username: 'Partyboy',
        password: '4k6jh8d'

    },
    {
        id: 2,
        username: 'GHPerez',
        password: 'qwerty1234'
    },
    {
        id: 3,
        username: 'blazethunder247',
        password: 'letitrip420'
    },
    {
        id: 4,
        username: 'burnedout954',
        password: 'h31pm30uuut'
    },
    {
        id: 5,
        username: 'mcHammer',
        password: 'canttouchthis90'
    }
];

const user_seeds = () => User.bulkCreate(dummyUsers);

module.exports = user_seeds;