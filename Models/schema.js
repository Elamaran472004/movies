import mongoose,{ Schema , model} from "mongoose";


const schema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true,
    unique: true,
  },
  movieName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  genre: {
    type: [String],
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  hero: {
    type: String,
    required: true,
    enum: ["Ajith", "Vijay", "Rajini", "Kamal", "Surya", "Other"],
  },
  heroine: {
    type: String,
    required: true,
  },
  coActors: {
    type: [String],
    default: [],
  },
  releaseYear: {
    type: Number,
  },
});

const Movie=mongoose.model("Movie", schema);

export default Movie;
