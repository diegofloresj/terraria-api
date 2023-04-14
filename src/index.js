const express = require('express')
const app = express();
const morgan = require('morgan');

//Settings
const routes = require('./routes/routes.js');
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use('/', routes);
