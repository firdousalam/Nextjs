var mongoose = require("mongoose");
require('dotenv').config()
mongoose.Promise = global.Promise;
const DBURL = process.env.DBCONFIG;
mongoose.set('strictQuery', false);
console.log("starting mongo connection");
mongoose.connect("mongodb://TechnophileFirdous:Technophile1234@ac-k5g9okb-shard-00-00.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-01.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-02.kzuwf7d.mongodb.net:27017/?ssl=true&replicaSet=atlas-xjy27e-shard-0&authSource=admin&retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true}).then((conn)=> {console.log("connected from Config File")})
.catch((err)=> {console.log("connection error",err)})

module.exports = mongoose;

