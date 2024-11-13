const express = require('express');
const mongoose  = require('mongoose'); 
const connection = require ('./connection'); 
const cookieparser = require('cookie-parser');
const  cors = require('cors');



// mongoose
// .Connect('mongodb+srv://abinesh22052001:abinesh2024@cluster1.qzkcn.mongodb.net/')
// .then(()=>console.log("MongoDB connected"))
// .catch((Error)=>console.log("error"));
// connection();
const app = express();
const port = process.env.PORT  || 5000;

app.use(
    cors({
        origin: "http://localhost:5173/",
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders : [
            'Content-Type',
            'Authorization',
            'cache-control',
            'expires',
            'pragma'
        ],
        credentials : true
    })
);

app.use(cookieparser());
app.use(express.json());

connection()


app.listen(port,()=>console.log(`server is running on ${port}`)) 
