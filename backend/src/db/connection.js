const mongoose = require('mongoose');

const dotenv= require('dotenv')
dotenv.config();
const uri = process.env.MONGODB_URI
// 'mongodb://localhost:27017/reactStore'
const connectionParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}
mongoose.connect(uri, connectionParams).
then(()=>{
    console.log("mongodb is connected")
}).
catch((err)=>{
    console.log(err)
})