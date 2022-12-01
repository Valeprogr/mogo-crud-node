import { get } from "mongoose";
import PostServices from "../../services/PostServices.js";

class PostControllers {
    async getAll(req,res){
        try{
            const posts = await PostServices.getAll();
            res.status(200).json(posts);
        }catch(error){
            res.status(500).json(error)
        }
    }

    async create(req,res){
        try{
            const post= await PostServices.create(req.body);
            res.status(201).json(post)
        }catch(error){
            res.status(500).json(error)
        }
    }
}

export default new PostControllers();