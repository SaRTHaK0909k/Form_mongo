// const mongoose = require("mongoose");

//  const connection = mongoose.connect('mongodb+srv://sarthak037:sarthak037@production.mm7muqs.mongodb.net/')
//  .then(() => console.log("MongoDB Connected..."))
//  .catch(err => console.log(err));

//  export default connection;
const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const { UserModel } = require('./db/model');
require('dotenv').config()

// Mongo DB Connections
mongoose.connect('mongodb+srv://sarthak037:sarthak037@production.mm7muqs.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(response=>{
    console.log('MongoDB Connection Succeeded.')
}).catch(error=>{
    console.log('Error in DB connection: ' + error)
});


// Middleware Connections
app.use(cors())
app.use(express.json())


// Routes


// Connection
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('App running in port: '+PORT)
})
app.get(`/savekar`,async(req,res)=>{
    const User =  UserModel({
        name: "Mudit",
        email: "sarthak@gmail.com"
    })
    if(!await UserModel.findOne({name:"Mudit"}))
    {await User.save()
    res.send("User ho gaya save")}
    else{
        res.send('user already hai ')
    }
    
})