import mongoose from "mongoose";

//Cosi si crea uno schema 
const Post = new mongoose.Schema({
    author : {type : String, required: true},
    title : {type :String, required: true},
    content : {type : String, required: true}
});

//exporta il modello Post
export default mongoose.model("Post",Post);