import express from 'express';
import { MovieIndex,MovieCreate,MovieUpdate,MovieDelete} from '../controllers/movies_controller.js';

const router=express.Router();

//R - for reading the movies 
router.get('/', MovieIndex);

//C - for creating movies 
router.post('/', MovieCreate);

//U- for updating the movie
router.put('/:id',MovieUpdate);

//D- for deleting the movies 
router.delete('/:id',MovieDelete);

export default router;