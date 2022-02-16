const express=require('express');
const app=express();

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/graduationProjectITI',{useNewUrlParser:true,useUnifiedTopology:true});

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const index_routes=require('./routes/index-routes');
const driver_routes=require('./routes/driver-routes');
index_routes(app);
driver_routes(app);

app.use((err,req,res,next)=>{
    res.status(422).send({'error_message':err.message});
})

module.exports=app;