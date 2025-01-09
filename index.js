const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello World2!',
        app_version: '4',
    });
});

app.get('/add/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const result = add(a, b);
    res.json({ sum: result });
});

function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Invalid Input';
    }

    const numA = parseInt(a, 10);
    const numB = parseInt(b, 10);
    return numA + numB;
}

module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
