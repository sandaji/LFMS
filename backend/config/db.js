import mongoose from 'mongoose'

 const connectDB = async () => {
  mongoose.set('strictQuery', false);
   try {
     const conn = await mongoose.connect( 'mongodb://127.0.0.1:27017/lfms');

     console.log('MONGODB CONNECTED TO SERVER')
   } catch (error) {
     console.error('MONGODB DISCONNECTED')
     process.exit(1)
   }
 }

 export default connectDB