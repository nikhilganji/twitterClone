
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/db');
const postRoutes = require('./routes/postRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useMongoClient: true}).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 8080;

app.use('/posts', postRoutes);
app.use(express.static(path.join(__dirname,'public'))); 

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});



const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});

