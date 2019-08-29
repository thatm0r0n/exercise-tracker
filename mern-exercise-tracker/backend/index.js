//importing modules
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
mongoose.connect('mongodb://localhost:27017/')
mongoose.connection.on('connected',()=>{
	console.log('connectedto database mongodb @ 27017');
}); 
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const exercesRouter= require('./routes/exercises');
const usersRouter= require('./routes/users');

app.use('/exercises',exercesRouter);
app.use('/users',usersRouter);

app.listen(port, ()=>{
    console.log('server is running on:',port);
});
 app.get('/',(req, res)=>{
 	res.send('foobar');
 });