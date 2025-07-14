import mongoose from 'mongoose'

const TestiminoalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

},{timestamps:true})


const Testiminoal = mongoose.model('Testiminoal', TestiminoalSchema)


export default Testiminoal