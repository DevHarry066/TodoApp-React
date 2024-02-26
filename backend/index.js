const express = require('express');
const { updateTodo } = require('./types');

const app = express();

app.use(express.json());


app.get('/todos', (req, res) => {
    console.log("Hello, world!");
});


app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({ msg: 'You send the wrong payload' });
        return;
    }
    //Add it in MongoDB
});

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({ msg: 'Invalid update payload' });
        return;
    }
    //update the task
});

app.listen(3000);