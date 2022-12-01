import Post from "../src/models/Post.js";


class PostServices {

   async getAll(){
    const posts = await Post.find();
    return posts
   }

   async getOne(id){
      if(!id){
         throw new Error("Id Missing")
      }
      const post = await Post.findById(id);
      return post
   }

   async delete(id){
      if(!id){
         res.status(500).json({message:"id Missing!"})
      }
      const deletedPost = await Post.findByIdAndDelete(id);
      return deletedPost
   }

   async create(post){
      const createPost = await Post.create({...post});
      return createPost
   }

   async update(post){
      //qui mongoose controlla se il post ha 1 id che mongoose ha creato
      //creando il post
      if(!post._id){
         throw new Error("Id missing!")
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post,{new : true} );
      return updatedPost
   }
}

//Questo esporta l oggetto di questa classe 
export default new PostServices();