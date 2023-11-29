require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
  })



//route handlers
app.use('', );




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



app.get('/', (req, res) => {
    res.json({ message: 'welcome to Cincy Finds!' });
})