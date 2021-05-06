const messages = [
    'Oscar',
    'Diego',
    'Roy',
    'Leonel',
    'Kattya',
    'Jacqui',
    'Esteban',
    'Paulina',
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };