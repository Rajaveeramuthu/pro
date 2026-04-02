export const getMovie = (req, res) => {
    res.json({ message: 'Hello, World!' });
}

export const createMovie = (req, res) => {
    res.send("Movie created successfully");
}

export const updateMovie = (req, res) => {
    res.send("Movie updated successfully");
}   

export const deleteMovie=(req,res)=>{
    res.send("Movie deleted successfully");
}