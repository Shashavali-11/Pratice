const Post = require('../models/Post');

// GET all posts
exports.getPosts = async(req, res, next) => {
    try{
        const posts = await Post.find();
        res.status(200).json({ posts });
    } catch(err) {
        next(err);
    }
}

// GET post by ID
exports.getPostById = async (req, res, next) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post) return res.status(404).json({message : 'POST NOT FOUND..!'})
        res.status(200).json(post)
    } catch (err) {
        next(err);
    }
};

// POST created post
exports.createPost = async(req, res, next) => {
    try{
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch(err) {
        next(err)
    }
}

// PUT Update Post
exports.updatePost = async(req, res, next) => {
    try{
        const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true} );
        res.status(200).json(updated)
    } catch(err) {
        next(err);
    }
};


// DELETE Post
exports.deletePost = async (req, res, next) => {
    try{
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({message : 'POST is Deleted Successfully.'});
    } catch(err) {
        next(err)
    }
};