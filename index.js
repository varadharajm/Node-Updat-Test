const express = require("express");
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const db = require('./models/index')

db.mongoose
.connect(process.env.DB_URl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
console.log("Successfully connect to MongoDB");
})
.catch(err => {
    console.log("Connection Error",err);
    process.exit();
});

const Router = require('./routes/index.routing');

app.use('/', Router);

const listenr = app.listen(process.env.PORT || 3000, ()=>{
    console.log(listenr.address().port);
})