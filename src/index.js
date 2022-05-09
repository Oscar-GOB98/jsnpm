const messages = [
    "Oscar",
    "Geovany",
    "Karla",
    "Sofia",
    "Jeaneth",
    "Roberto",
    "Carlos",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };