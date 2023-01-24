const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect(process.env.cloud_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));