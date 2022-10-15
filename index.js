const express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path')
const app = express()
const port = 3000;

// var hbs = require('hbs')
// const app = express();
// var hbs = exphbs.

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
// handlebars code ends over here

app.use(express.static(path.join(__dirname,'static')))
app.use('/', require(path.join(__dirname,"routes/blog.js")));


app.listen(port, ()=>{
    console.log(`Blog App Listening at port no http://localhost:${port}/`)
})