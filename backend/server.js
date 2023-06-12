const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();
var {transports,format} = require('winston'),
    expressWinston = require('express-winston');
require('winston-mongodb');
const logger = require("./logger/config")
const app = express()
const port = 5000





const fs = require('fs');


// import library and files
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');
// let express to use this
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

// place holder for the data
const tasks = [
  {
    id: 1,
    task: 'task1',
    assignee: 'assignee1000',
    status: 'completed'
  },
  {
    id: 2,
    task: 'task2',
    assignee: 'assignee1001',
    status: 'completed'
  },
  {
    id: 3,
    task: 'task3',
    assignee: 'assignee1002',
    status: 'completed'
  },
  {
    id: 4,
    task: 'task4',
    assignee: 'assignee1000',
    status: 'completed'
  },
  
];


app.get('/api/todos', (req, res) => {
  console.log('api/todos called!!!!!')
  res.json(tasks);
});

app.post('/api/todo', (req, res) => {
   const task = req.body.task;
   task.id =  Math.floor(Math.random()*100000)
   tasks.push(task);
   res.json(tasks);
})

app.delete('/api/todo/:id', (req, res) => {
  console.log("Id to delete:::::", req.params.id)
  tasks = tasks.filter(task => task.id != req.params.id);
  res.json(tasks);
})

app.put('/api/todos/:id', (req, res) => {
  console.log("Id to update:::::", req.params.id)
  const taskToUpdate = req.body.task;
  tasks = tasks.map(task => {
    if (task.id == req.params.id) {
      task = taskToUpdate;
      task.id = parseInt(req.params.id);
    }
    return task;
});
  res.json(tasks);
});

app.get('/', (req,res) => {
  res.send(`<h1>API Running on port ${port}</h1>`);
});


app.get('/api/MyNewRoute',(req,res)=>{
  res.send("hello Swagger");
})


















const myLoggerFormat = format.printf(({level,meta,timestamp})=>{
  return `${level} ${timestamp} ${meta.message}`
})

app.use(expressWinston.logger({
  winstonInstance :logger,
  statusLevels:true

}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/getUser', (req, res) => {
  let ran = Math.floor(Math.random()*100000)
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