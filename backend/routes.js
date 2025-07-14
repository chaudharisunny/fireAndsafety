import express from 'express'

import  { allService, deleteService, newService, updateService } from './controller/service.js'
import { allTestimonal, deleteTestiminoal, newTestiminoal, updateTestiminoal } from './controller/testiminoal.js'
import Service from './models/service.js'
import Review from './models/testiminoal.js'
import { AddArticle } from './controller/article.js'
import {   Signup,login } from './controller/user.js'

const routes = express.Router()
routes.get('/allservice',allService)
routes.post('/newservice',newService)
routes.put('/updateservice/:id',updateService)
routes.delete('/deleteservice/:id',deleteService)

routes.get('/alltestiminoal',allTestimonal)
routes.post('/newtestiminoal',newTestiminoal)
routes.put('/updatetestiminoal/:id',updateTestiminoal)
routes.delete('/deletetestiminoal/:id',deleteTestiminoal)

routes.post('/signup',Signup)
routes.post('/login',login)
routes.post('/newarticle',AddArticle)
routes.get('/stats',async(req,res)=>{
    try {
        const services = await Service.countDocuments();
        const reviews = await Review.countDocuments();
       
    
        res.status(200).json({
          services,
          reviews
          
        });
      } catch (error) {
        res.status(500).json({ error:error });
      }
})
export default routes
