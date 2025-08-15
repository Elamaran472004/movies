import express from 'express';

const app=express();
const PORT=6969;

app.get('/', (req,res)=>{
    res.json({msg:"this is a movies Backend API"});
});

//CRUD functionalities for movies

//R - for reading the movies 
app.get('/movies',()=>{

});

//C - for creating movies 
app.post('/movies',()=>{

});

//U- for updating the movie
app.put('/movies/:id',()=>{

});

//D- for deleting the movies 
app.delete('/movies/:id',()=>{

});

app.listen(PORT,()=>{
    console.log(`server is running on port at http://localhost:${PORT}`);
})
//npx kill-port 6969