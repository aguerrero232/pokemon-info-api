require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
const database_uri = process.env.DB_URI;
mongoose.set('useFindAndModify', false);
// create express app
const app = express();
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
// To parse the incoming requests with JSON payloads
app.use(express.json())
// Require routes
require('./app/routes/user.route.js')(app);
require('./app/routes/pokemon.route.js')(app);
require('./app/routes/gen.route.js')(app);
// Configuring the database
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(database_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...\n', err);
    process.exit();
});
// simple route
app.get('/', (req, res) => {
    res.json({
        "message": "Rowdyhacks 2022 Hackathon Project And Beyond - Retro Pokemon Game"
    });
});
// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});
