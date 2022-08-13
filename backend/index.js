import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import User from './models/user.js';
import bodyParser from 'body-parser';
mongoose.connect("mongodb://127.0.0.1:27017/test",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log(err);
});

const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.status(200).json({message:"hello"});
})

app.post("/api/register",async (req,res)=>{
    console.log(req.body);
try {
    const user = await User.create({
        name:req.body.name,
        username:req.body.email,
        password:req.body.password
    })
    res.json({status:"ok",user:user});
} catch (error) {
    console.log(error)
   res.json({status:error});
}
})

app.post("/api/login",async (req,res)=>{
    try {
        const user = await User.findOne({
            username:req.body.username,
            password:req.body.password
        })
        if(user){
            return res.json({status:"logged in",user:true});
        }else{
            return res.json({status:"error",user:false})
        }
        
    } catch (error) {
        res.json({status:"error"});
    }
    })

app.listen(2000,()=>{
    console.log("server started");
})