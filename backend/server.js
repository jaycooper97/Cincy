require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cincy = require('./routes/cincy');

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
  });



//route handler for reaction to requests
//grabs all routes in router
app.use('/cincy', cincy);




//connect to database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //request listener
    app.listen(process.env.PORT, () => {
        console.log('connected to database and listening on port', process.env.PORT);
    })
}).catch((error) => {
    console.log(error);
});