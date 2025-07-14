import {mongoose} from 'mongoose'

const ArticleSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    service: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    },
    

},{timestamps:true})


export default mongoose.model('Article', ArticleSchema)