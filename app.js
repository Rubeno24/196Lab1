const express = require('express');
const app = express();
app.use(express.json());

// GET method
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const sum = num1 + num2;
    res.send(`Sum is ${sum}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

// POST method
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;
    res.send(`Sum is ${sum}`);
});

// Use process.env.PORT for Elastic Beanstalk compatibility
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
