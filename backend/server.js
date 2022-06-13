const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const app = express();
const cors = require('cors');
const reg = require('./src/routers/Reg&ContactRouter')
const productRouter = require('./src/routers/productRouter')
const cookieParser = require('cookie-parser')
require("./src/db/connection")
require("dotenv").config()
const staticPath = path.join(__dirname, '../public')
const template_path = path.join(__dirname, '../templates/views')

const port = process.env.PORT || 3500;

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
console.log(template_path)

app.use(express.static(staticPath));
app.use(cookieParser());
app.set('view engine', "hbs");
app.set("views",template_path);
app.use(cors(  ))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(productRouter)
app.use(reg)


app.get('/', (req, res) => {
    res.status(200).send("hello world");
    console.log("hello world");
})

app.listen(port,()=>{
    console.log("backend is listening on this port "+ port);
});
