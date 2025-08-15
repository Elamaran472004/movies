import express from 'express';
import movieRoutes from './Route/movies_route.js';

const app=express();
const PORT=6969;

app.get('/', (req,res)=>{
    res.json({msg:"this is a movies Backend API"});
});

//CRUD functionalities for movies

app.use('/movies', movieRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port at http://localhost:${PORT}`);
})
//npx kill-port 6969