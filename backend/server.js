const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();
var {transports,format} = require('winston'),
    expressWinston = require('express-winston');
require('winston-mongodb');
const logger = require("./logger/config")
const app = express()
const port = 5000
const myLoggerFormat = format.printf(({level,meta,timestamp})=>{
  return `${level} ${timestamp} ${meta.message}`
})

app.use(expressWinston.logger({
  winstonInstance :logger,
  statusLevels:true

}));

/*
app.use(expressWinston.logger({
  transports: [
    new transports.Console(),
    new transports.File({
      level:'warn',
      filename:'warningLogger.log'
    }),
    new transports.File({
      level:'error',
      filename:'errorLogger.log'
    }),
    new transports.MongoDB({
      db:process.env.DBCONFIG, // database URL MongoDB Atlas URI
      "collection" : "TutorialLogs"

    })
    
  ],
  format: format.combine(
    format.json(),
    format.timestamp(),
    format.prettyPrint(),
    format.metadata()
  ),
  statusLevels:true
}));
*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/getUser', (req, res) => {
  let ran = Math.random()*1000
  logger.info("getUser started"+ran)
  let i=3000;
  let j = 30000;  
  let response = "Not Match";
  if(i === j){
    response = "value match";
    logger.info("value match"+ran)
  }
  else{
    logger.warn("getUser value don't match"+ran)
  }
    logger.info("response sent"+ran)
  res.status(200).send(response);
})
app.get('/warning', (req, res) => {

  res.status(400).send('Sorry, cant find that');
})
app.get('/error', (req, res) => {
  
  res.status(500).send('Error, cant find that');
})
const userRoute = require('./router/router');
app.use('/users',userRoute);

app.get('/throughError',function(req,res){

  throw new Error("this is my Custome error");

})

app.use(expressWinston.errorLogger({
  transports: [
    new transports.File({
      filename:'logger/customeErrorLogger.log'
    })
  ],
  format: format.combine(
    format.json(),
    format.timestamp(),
    myLoggerFormat
  )
}));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})