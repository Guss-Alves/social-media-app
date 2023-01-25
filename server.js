const express = require('express');
const app = express();
const port = 8000;

require('dotenv').config();


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) ); // need these 2 lines in order to use .post method

//connect to DB
require("./server/config/mongoose.config");

require('./server/routes/user.routes')(app);
require('./server/routes/post.routes')(app);


app.listen(port, () => console.log(`Listening on port: ${port}`) );