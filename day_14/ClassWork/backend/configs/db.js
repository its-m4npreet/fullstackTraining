const moongoose = require('mongoose');

const url ="mongodb+srv://manpreetji234567890:manpreet@cluster0.j7teldo.mongodb.net/myFirstDB?retryWrites=true&w=majority&appName=Cluster0";

const coonnection=moongoose.connect(url);

module.exports=coonnection;