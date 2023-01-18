const mongoose = require("mongoose");
const { PostSchema } = require("../models/postModel.js")



const Post = mongoose.model('Post', PostSchema)

const createPost = async (req, res) => {

 const {postImage, author, location, description} = req.body;

 let date =new Date().toLocaleDateString()
 let likes = Math.floor(Math.random() * 100)

 try {

    const post = await Post.create({ postImage,author , location, description, date, likes })
    console.log(post);
    res.status(201).json({ success: true, post, message: "Post Created Successfuly" })

} catch (error) {
    res.status(500).json({ success: false, error: error.message })
}
}


const getPost = async (req, res) => {
   
    try {
        const post = await Post.find()
        res.status(201).json({ success: true, post, message: "Posts are Successfuly Fetched" })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }


}


module.exports = { createPost, getPost }