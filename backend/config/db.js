import mongoose from 'mongoose'

 const connectDB = async () => {
  mongoose.set('strictQuery',true)
   try {
     const conn = await mongoose.connect(
       process.env.MONGO_URI
        // ||
      //  "mongodb://127.0.0.1:27017/lfms"
     );

     console.log('SERVER CONNECTED TO MONGOBD')
   } catch (error) {
     console.error(`Error: ${error.message}`)
     process.exit(1)
   }
 }

 export default connectDB