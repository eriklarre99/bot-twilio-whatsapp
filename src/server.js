const express = require('express');
const morgan = require('morgan');
const path = require('path');

// inicializate
const app = express();

// Settings
app.set('port' , process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , '.ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// rourtes
app.use(require('./routes/index'));

// public
app.use(express.static(path.join(__dirname , 'public')));

// 404 handler
app.use( (req, res, next) => {
    // res.status(404).render('404');
    res.status(404).send('404 Not found');
});  

// starting the server
app.listen(app.get('port'), (req, res, next) =>{
    console.log(`server on port: ${app.get('port')}`);
})