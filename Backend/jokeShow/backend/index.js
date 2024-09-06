import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if the environment variable is not set

const jokes = [
    {
        "id": 1,
        "title": "Programmers and Light Bulbs",
        "content": "How many programmers does it take to screw in a light bulb? None. It's a hardware problem."
    },
    {
        "id": 2,
        "title": "Bedside Table Logic",
        "content": "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn't."
    },
    {
        "id": 3,
        "title": "UDP Joke",
        "content": "I've got a really good UDP joke to tell you but I don’t know if you'll get it."
    },
    {
        "id": 4,
        "title": "Root Beer Float",
        "content": "A guy walks into a bar and asks for 1.4 root beers. The bartender says \"I'll have to charge you extra, that's a root beer float.\" The guy says \"In that case, better make it a double.\""
    },
    {
        "id": 5,
        "title": "SQL Joins",
        "content": "A SQL statement walks into a bar and sees two tables. It approaches, and asks \"may I join you?\""
    }
];

app.get('/api/jokes', (req, res) => {
    res.send(jokes);
});

app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`); // Updated to use the actual port
});
