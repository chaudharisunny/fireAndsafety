import Article from '../models/article.js'

export const AddArticle =async(req,res)=>{
    try {
        const{title,content}=req.body
        if(!title||!content){
            return res.status(400).json({error:'all fields are required'})
        }
       
        const newArticle=await Article.create({title,content})
        res.status(201).json({message:'new article created',data:newArticle})
    } catch (error) {
        res.status.json(error)
    }
}
