const express = require('express');

const app = express();
const PORT = 3000;

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Keyboard" }
];

app.get('/', (req, res) => {
  res.send('Welcome to Release 2.0');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Release 2.0 application running on port ${PORT}`);
});
