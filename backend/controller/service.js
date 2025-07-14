import Service from '../models/service.js'

export const allService=async(req,res)=>{
    try {
        const allService=await Service.find()
        return res.status(200).json({data:allService})    
    } catch (error) {
        res.status(500).json({error:error.message})
        console.log(error) 
    }
    
}
export const newService=async(req,res)=>{
    try {
        const {title,description}=req.body 
        if(!title||!description){
            return res.status(400).json({error:'all fieleds are required'})
        }
        const createService=await  Service.create({title,description}) 
        await createService.save()
        res.status(201).json({message:'new service create',createService})     
    } catch (error) {
        console.log(error);
        
    }
   
}

export const updateService=async(req,res)=>{
    try {
        const{id}=req.params
        if(!id){
            res.status(400).json({error:'id not found'})
        }
        const updateService=await Service.findByIdAndUpdate(id,req.body,{new:true})

        res.status(200).json({data:updateService})
    } catch (error) {
        res.status(500).json({error:error.message})
        console.log(error)
    }
}

export const deleteService=async(req,res)=>{
    try {
        const {id}=req.params 
        if(!id){
            res.status(400).json({error:'id not found'})
        }
        const deleteService=await Service.findByIdAndDelete(id)
     
        res.status(200).json({data:deleteService})
    } catch (error) {
        res.status(500).json({error:error.message})
        console.log(error);
        
    }
}

