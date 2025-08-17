// import Movie from "../Models/schema.js";
import  Movie  from "../Models/schema.js";
export const MovieIndex= async (req,res)=>{
    // res.send("Get All Movies");
    try{
    const movies=await Movie.find();
     res.status(200).json(movies);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
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

export const MovieDetail= async (req,res)=>{
    try{
        const movieId=await Movie.findOne({ movieId: req.params.id });
        if(!movieId){
            return res.status(404).json({msg: "Movie not found"});
        }
        return res.status(200).json(movieId);
    }catch(error){
        return res.status(500).json({msg: error.message});
    }
};

export const MovieUpdate= async (req,res)=>{
    // res.send("update A Movie");
    try {
    const movie = await Movie.findOne({ movieId: req.params.id });

    if (!movie) {
      return res.status(404).json({ msg: "Movie not found" });
    }

    // Update only if fields are provided in body
    if (req.body.movieName != null) {
      movie.movieName = req.body.movieName;
    }
    if (req.body.description != null) {
      movie.description = req.body.description;
    }
    if (req.body.genre != null) {
      movie.genre = req.body.genre;
    }
    if (req.body.director != null) {
      movie.director = req.body.director;
    }
    if (req.body.hero != null) {
      movie.hero = req.body.hero;
    }
    if (req.body.heroine != null) {
      movie.heroine = req.body.heroine;
    }
    if (req.body.coActors != null) {
      movie.coActors = req.body.coActors;
    }
    if (req.body.releaseYear != null) {
      movie.releaseYear = req.body.releaseYear;
    }

    const updatedMovie = await movie.save();
    return res.status(200).json(updatedMovie);

  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const MovieDelete = async (req, res) => {
  try {
    const deletedMovie = await Movie.findOneAndDelete({ movieId: req.params.id });
    if (!deletedMovie) {
      return res.status(404).json({ msg: "Movie is not available to delete" });
    }
    return res.status(200).json({
      msg: "Movie deleted successfully",
      deletedMovie: deletedMovie, 
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
