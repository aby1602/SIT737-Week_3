const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a GET route for the root URL to test the server
app.get('/', (req, res) => {
  res.send('Arithmetic Service is running');
});

// Addition endpoint
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ result: num1 + num2 });
});

// Subtraction endpoint
app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ result: num1 - num2 });
});

// Multiplication endpoint
app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ result: num1 * num2 });
});

// Division endpoint
app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (num2 === 0) {
    res.status(400).json({ error: "Cannot divide by zero" });
  } else {
    res.json({ result: num1 / num2 });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3000`);
});