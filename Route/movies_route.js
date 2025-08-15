import express from 'express';

const router=express.Router();

//R - for reading the movies 
router.get('/',(req,res)=>{
    res.send("Get All Movies");
});

//C - for creating movies 
router.post('/',(req,res)=>{
    res.send("Add new Movies");
});

//U- for updating the movie
router.put('/:id',(req,res)=>{
    res.send("update A Movie");
});

//D- for deleting the movies 
router.delete('/:id',(req,res)=>{
     res.send("delete A Movie");
});

export default router;