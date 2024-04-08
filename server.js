
// Exponentiation endpoint
app.post('/exponent', (req, res) => {
    const { base, exponent } = req.body;
    if (typeof base === 'number' && typeof exponent === 'number') {
        res.json({ result: Math.pow(base, exponent) });
    } else {
        res.status(400).json({ error: 'Invalid input, numbers expected.' });
    }
});

// Square root endpoint
app.post('/sqrt', (req, res) => {
    const { number } = req.body;
    if (typeof number === 'number' && number >= 0) {
        res.json({ result: Math.sqrt(number) });
    } else {
        res.status(400).json({ error: 'Invalid input, non-negative number expected.' });
    }
});

// Modulo endpoint
app.post('/modulo', (req, res) => {
    const { dividend, divisor } = req.body;
    if (typeof dividend === 'number' && typeof divisor === 'number' && divisor !== 0) {
        res.json({ result: dividend % divisor });
    } else {
        res.status(400).json({ error: 'Invalid input, non-zero divisor expected.' });
    }
});

// Division endpoint
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 === 'number' && typeof num2 === 'number' && num2 !== 0) {
        res.json({ result: num1 / num2 });
    } else {
        res.status(400).json({ error: 'Invalid input, division by zero not allowed.' });
    }
});

// Sine endpoint
app.post('/sin', (req, res) => {
    const { angle } = req.body;
    if (typeof angle === 'number') {
        res.json({ result: Math.sin(angle) });
    } else {
        res.status(400).json({ error: 'Invalid input, number expected.' });
    }
});

// Cosine endpoint
app.post('/cos', (req, res) => {
    const { angle } = req.body;
    if (typeof angle === 'number') {
        res.json({ result: Math.cos(angle) });
    } else {
        res.status(400).json({ error: 'Invalid input, number expected.' });
    }
});

// Tangent endpoint
app.post('/tan', (req, res) => {
    const { angle } = req.body;
    if (typeof angle === 'number') {
        res.json({ result: Math.tan(angle) });
    } else {
        res.status(400).json({ error: 'Invalid input, number expected.' });
    }
});

// Logarithm endpoint
app.post('/log', (req, res) => {
    const { number } = req.body;
    if (typeof number === 'number' && number > 0) {
        res.json({ result: Math.log(number) });
    } else {
        res.status(400).json({ error: 'Invalid input, positive number expected.' });
    }
});

// Absolute value endpoint
app.post('/abs', (req, res) => {
    const { number } = req.body;
    if (typeof number === 'number') {
        res.json({ result: Math.abs(number) });
    } else {
        res.status(400).json({ error: 'Invalid input, number expected.' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000’);
});