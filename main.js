import express from 'express';

const app=express();
const PORT=6969;

app.get('/', (req,res)=>{
    res.json({msg:"this is a movies Backend API"});
});

app.listen(PORT,()=>{
    console.log(`server is running on port at http://localhost:${PORT}`);
})
//npx kill-port 6969