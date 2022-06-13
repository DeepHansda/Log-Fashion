const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const RegSchema = mongoose.Schema({
    name:{
        type: String,
        minLength:3,
        // required: true
    },

    email:{
        type: String,
        // required: true,
        unique: true
    },

    phone:{
        type: Number,
        unique: true,
        // required: true,
        maxLength:10
    },

    password:{
        type: String,
        // required: true,
        minLength:8
    },

    tokens:{
        token:{
            type: String,
            required: true
        }
    }
})
RegSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({regDetails : this }, process.env.PrivateKey);
        this.tokens = Object.assign(this.tokens, {token:token})
        await this.save();
        return token;

        
    } catch (error) {
        console.error(error)
    }

}
RegSchema.pre("save",async function(next){
    if(this.isModified("password")){
        const hash_password = await bcrypt.hash(this.password,10);
        this.password = hash_password;
        
    }

    next()
})

const regModel = mongoose.model('RegisteredUser',RegSchema);

module.exports = regModel;