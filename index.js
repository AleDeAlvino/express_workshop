//Dependencies
const express = require('express');
const morgan = require('morgan');
const app = express();
//Routes
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
//Middelware
const auth = require('./middelware/auth');
const notFound = require('./middelware/notFound');
const index = require('./middelware/index');


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.get("/", index);

app.use("/user", user);
app.use(auth);
app.use("/pokemon", pokemon);


app.use(notFound);

app.listen(process.env.PORT || 3000, ()=> {
    console.log("Server is running...");
});