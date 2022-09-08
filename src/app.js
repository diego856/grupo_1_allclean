const express = require('express');
const methodOverride =  require('method-override');
const app = express();
const cors = require('cors')
const port = 4000;
const session=require("express-session");
const cookie=require('cookie-parser');
const path = require('path');
const ticketApiRoutes = require('../routes/tickets');

app.use(cors())

//app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));


//view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

//Routes
app.use(ticketApiRoutes);


//Port Listening
app.listen(process.env.PORT || port, () => {
    console.log(`listening at http://localhost:${port}`)
});