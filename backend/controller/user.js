
import { newToken } from '../middleware/createToken.js'
import User from '../models/user.js'

export const Signup=async(req,res)=>{
    try {
        const{username,email,password}=req.body 
        if(!username||!email||!password){
            return res.status(400).json({error:'all fields are required'})
        }
        const newUser=await User.create({username,email,password}) 
        await newUser.save()
        res.status(201).json({message:'new user create'})     
    } catch (error) {
        res.status(500).json(error)
    }
    
}

export const login=async(req,res)=>{
    try {
        const{email,password}=req.body 
        if(!email||!password){
            return res.status(404).json({message:'all fields re require'})
        }
        const user=await User.findOne({email})
        if(!user){
            return res.status(404).json({message:'invalid credential'})
        }
        const isPassword=await user.comparePassword(password)
        if(!isPassword){
            return res.status(404).json({message:'invalid credential'})
        }
        const token=newToken(user)
        res.status(201).json({message:'login successfully',token})
    } catch (error) {
        console.log(error);
        
        res.status(500).json(error)
    }
}
