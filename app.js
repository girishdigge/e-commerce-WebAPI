const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.json());

require('dotenv/config');
const api = process.env.API_URL;

app.get(`${api}/products`, (req, res) => {
  const products = [{ id: '1', name: 'car', price: '$212,200' }];
  res.send(products);
});
app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body;
  res.send(newProduct);
});
app.listen(3000, () => {
  console.log('server is running on port 3000...');
});
