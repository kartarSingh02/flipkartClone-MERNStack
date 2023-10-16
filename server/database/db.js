import mongoose from "mongoose"


export const Connection = async (username,password) =>{
    // %40 is representation of @
const URL = `mongodb+srv://${username}:${password}@cluster.dylre0t.mongodb.net/FLIPKART_CLONE`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology : true , useNewUrlParser:true});
        console.log("Database connected successfully")
    }
    catch(error){
        console.log("Error while connecting to backend",error.message)
    }
}

export default Connection