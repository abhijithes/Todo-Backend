require('dotenv').config()
const express = require('express');
const connectDb = require('./utils/connnectionDb');
const app = express();

app.use(express.json())

app.use('/todos',require('./routes/routes.todos'))


connectDb().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('server running on port 3001');
    })
}).catch((e)=>{
     console.log('mongo connnection error')
    })