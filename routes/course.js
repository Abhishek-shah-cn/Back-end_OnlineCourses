const express = require('express')
const router = express.Router()
const Course = require('../models/course')

router.get('/', async(req,res) => {
    try{
           const course = await Course.find()
           res.json(course)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const courses = await Course.findById(req.params.id)
           res.json(courses)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const courses = new Course({
        course_id: req.body.course_id,
        title: req.body.title,
        description: req.body.description,
        duration:req.body.duration,
    })

    try{
        const a1 =  await courses.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})


router.patch('/:id',async(req,res)=> {
    try{
        const course = await Course.findById(req.params.id) 
        course.sub = req.body.sub
        const a1 = await course.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router