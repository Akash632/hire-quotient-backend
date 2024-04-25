const express = require('express');
const connectdb = require('./config/db');
const userRoute = require('./routes/route');
const app = express();

app.use('/api/v1/users', userRoute )
app.listen(3000,()=>{
    console.log("server connected");
    connectdb();
})
