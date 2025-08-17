// import Movie from "../Models/schema.js";
import  Movie  from "../Models/schema.js";
export const MovieIndex=(req,res)=>{
    res.send("Get All Movies");
};

export const MovieCreate= async (req,res)=>{
    //create the movie info
    //Validate the data 

    const newMovie=new Movie(req.body);
    try {
        const movie=await newMovie.save();
        return res.status(201).json(movie);
    } catch (error) {
        return res.status(400).json({msg : error.message});
    }
};

export const MovieUpdate=(req,res)=>{
    res.send("update A Movie");
};

export const MovieDelete=(req,res)=>{
     res.send("delete A Movie");
};