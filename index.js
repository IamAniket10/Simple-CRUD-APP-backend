const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js")
const app = express()


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use('/api/products', productRoute);




app.get('/', (req, res) => {
    res.send("Hello from Node API server");
});





mongoose.connect("mongodb+srv://aniketkadam10:SupercoolAK@mynodeapi.63dsvfj.mongodb.net/?retryWrites=true&w=majority&appName=MyNodeAPI")

    .then(() => {
        console.log("Connected to database");
        app.listen(3030, () => {
            console.log('Server is running on port 3030');
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });