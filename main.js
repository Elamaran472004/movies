import express from 'express';
import movieRoutes from './Route/movies_route.js';
import connectDb from './lib/DB.js';

const app=express();
const PORT=6969;

//data understanding middleware
app.use(express.json());

connectDb();

app.get('/', (req,res)=>{
    res.json({msg:"this is a movies Backend API"});
});

//CRUD functionalities for movies

app.use('/movies', movieRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port at http://localhost:${PORT}`);
})
//npx kill-port 6969