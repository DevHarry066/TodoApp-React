const express = require('express');
const { updateTodo } = require('./types');

const app = express();

app.use(express.json());


app.get('/todos', async (req, res) => {
    console.log("Hello, world!");
    const todos = await todo.find();
    console.log(todos);
    res.status(200).json(todos);
});


app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({ msg: 'You send the wrong payload' });
        return;
    }
    // Add it in MongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });
    res.status(200).json({ msg: "Todo added successfully" });
});

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({ msg: 'Invalid update payload' });
        return;
    }
    //update the task
    await todo.update({
        _id: req.body.id
    },
        {
            completed: true,
        });
    res.status(201).json({ msg: 'Task updated' });
});

app.listen(3000);