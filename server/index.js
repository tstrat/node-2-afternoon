const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./products_controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then(database => {
    app.set('db', database);
}).catch(error => console.log('error connecting to database', error));

app.get('/api/products', controller.getAll);
app.get('/api/products/:id', controller.getOne);
app.post('/api/products', controller.create);
app.put('/api/products/:id', controller.update);
app.delete('/api/products/:id', controller.delete);


const SERVER_PORT = process.env.PORT || 3000;
app.listen(SERVER_PORT, () => console.log("Listening on port ", SERVER_PORT));