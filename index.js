const express = require("express");
const shortid = require('shortid');
const server =express();

let lessons = [];

server.use(express.json()); ///<<<<<<<<<<<<<<<<<< add this line

server.get('/hello', (req, res) => {
    res.status(200).json({ hello: "Web 27"})
});

server.post('/api/lessons', (req, res) => {
//axios.post(/api/hubs, data) <-- the data shows up as the req.body on the server
    const lessonInfo = req.body;

    lessonInfo.id =shortid.generate();

    lessons.push(lessonInfo)

    res.status(201).json(lessonInfo);

});
server.get('/api/lessons', (req, res)=> {
    res.status(201).json(lessons);

})

const PORT =5000;
server.listen(PORT, () => 
console.log(`\n ** API on http://localhost:${PORT} **\n`)
);

// to run the server use: node index.js
