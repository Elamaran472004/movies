export const MovieIndex=(req,res)=>{
    res.send("Get All Movies");
};

export const MovieCreate=(req,res)=>{
    //create the movie info

    console.log(req.body);
    return res.json(req.body);
};

export const MovieUpdate=(req,res)=>{
    res.send("update A Movie");
};

export const MovieDelete=(req,res)=>{
     res.send("delete A Movie");
};