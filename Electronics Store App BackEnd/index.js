// Create an Express JS instance
const express = require('express');
// using cors to stop the error
const cors = require('cors');
const productRouter = require('./routes/product.route');

const app = new express();

app.use(express.json());
app.use(cors());
app.use('/api', productRouter);

var port = process.env.PORT || 4300;

app.listen(port, () => {
    console.log("Express JS started successfully.");
});