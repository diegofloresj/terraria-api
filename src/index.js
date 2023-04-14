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

app.get('/', (req, res) => {
    const rutas = app._router.stack.filter(ruta => ruta.routes !== undefined).map(ruta => {
        return {
            path: ruta.route.path,
            method: Object.keys(ruta.route.methods)[0]
        }
    });
    res.json(rutas);
});