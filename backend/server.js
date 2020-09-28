const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

var db = mongoose.connect('mongodb://localhost/student-records',{ useNewUrlParser: true });

const recordsRouter = require('./routes/records');
const usersRouter = require('./routes/users');

app.get('/',function(req,res){
    res.send("Server is up and running");
});
app.use('/records',recordsRouter);
app.use('/users',usersRouter);

app.listen(port, ()=> {
    console.log('Server is running on port: 5000 ');
});