require('dotenv').config();

var mongoose = require('mongoose')

let uri = 'mongodb+srv://admin:qwerty123@cluster0.fvkbytv.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri);

const app = require('express')();

const http = require('http').Server(app);

const userRoute = require('./routes/userRoute')

app.use('/',userRoute)

http.listen(3000,function(){
    console.log('Server running');
});