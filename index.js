const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(express.json());


app.use('/product', productRoutes);

app.listen(3000, () => {
    console.log("App is listening at port 3000");
});
