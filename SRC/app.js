const path = require('path');
const express = require('express');
const morgan = require ('morgan');
const mongoose = require('mongoose');

const app  = express();

//connecting to db
//mongoose.connect('mongodb://localhost/crud-mongo')
mongoose.connect('mongodb://Nicolas:Nicolas1@ds263638.mlab.com:63638/task')
	.then(db => console.log('Db connected'))
	.catch(err => console.log(err));

//importing routes
const indexRoutes =require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

//midddlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//va false porque solomandamos texto

//routes
app.use('/', indexRoutes);
//starting the server

app.listen(app.get('port'),() =>{
	console.log(`server on port ${app.get('port')}`);
	});

