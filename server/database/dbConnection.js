import mongoose from "mongoose";

export const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName:"MERN_AUTHENTICATION"
    }).then(()=>{
        console.log("Connected to mongo database successfully...")
    }).catch((err)=>{
        console.log(`Error while connecting to mongodb database..`, err)
    })
}