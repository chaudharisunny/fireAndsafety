import mongoose from 'mongoose'

const connectDB=async()=>{
    mongoose.connect("mongodb+srv://chaudharisunny6:NC3RKxL4XZNTuZxB@cluster0.gfoav5g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log('database connected');
        
    }).catch((error)=>{
        console.log(error);
        
    })
}

export default connectDB