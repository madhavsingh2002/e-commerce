import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(
            `connected to ${conn.connection.host}`.bgMagenta.white
        )
    }
    catch(e){
        console.log(`error in Mongo ${error}`.bgRed.white)
    }
}
export default connectDB;