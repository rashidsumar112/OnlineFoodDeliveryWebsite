import mongoose from 'mongoose'

export const connectDB=async()=>{
    await mongoose.connect(process.env.MONGODB_URL_ATLAS)
    .then(()=>console.log("Db Connected"))
    .catch((err)=>console.log(err))
    
}

