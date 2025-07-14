import Testiminoal from '../models/testiminoal.js'

export const allTestimonal=async(req,res)=>{
    try {
        const allTestiminoal=await Testiminoal.find()
        return res.status(200).json({data:allTestiminoal})    
    } catch (error) {
        res.status(500).json({error:error.message})
        console.log(error) 
    }
    
}  
 
export const newTestiminoal=async(req,res)=>{
    try {
        const {name,occupation,message}=req.body 
        if(!name||!occupation|!message){
            return res.status(400).json({error:'all fieleds are required'})
        }
        const newtestiminoal=await  Testiminoal.create({name,occupation,message}) 
        await newtestiminoal.save()
        res.status(201).json({message:'new testiminoal create',newtestiminoal})     
    } catch (error) {
        console.log(error);
        
    }
   
}

export const updateTestiminoal=async(req,res)=>{
    try {
        const{id}=req.params
        if(!id){
            res.status(400).json({error:'id not found'})
        }
        const updateTestiminoal=await Testiminoal.findByIdAndUpdate(id,req.body,{new:true})
        await updateTestiminoal.save()
        res.status(200).json({data:updateTestiminoal})
    } catch (error) {
        res.status(500).json({error})
        console.log(error)
    }
}

export const deleteTestiminoal=async(req,res)=>{
    try {
        const {id}=req.params 
        if(!id){
            res.status(400).json({error:'id not found'})
        }
        const deleteTestiminoal=await Testiminoal.findByIdAndDelete(id)
        res.status(200).json({message:'delete this data'},deleteTestiminoal)
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
        
        
    }
}

