// const express= require('express');
import express from 'express';
const app = express();

// app.get('/', (req, res) => {
//     res.send('server is ready');
// });


// jokes ----------
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Programming content",
            content: "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            id: 2,
            title: "JavaScript content",
            content: "Why did the developer go broke? Because he used up all his cache."
        },
        {
            id: 3,
            title: "Backend content",
            content: "I told my server a content… it didn’t respond. Probably too busy handling requests."
        },
        {
            id: 4,
            title: "Debugging content",
            content: "Debugging is like being the detective in a crime movie where you are also the criminal."
        },
        {
            id: 5,
            title: "Tech content",
            content: "Why do Java developers wear glasses? Because they don’t C#."
        }
    ];
    res.send(jokes)
});




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);

})