const express = require('express');
const router = express.Router();

let posts = [
    {
        id : 1,
        title : 'First Post',
        content : 'Hello from the Blog! This is written in Posts'
    }
];


router.get('/', (req, res) => {
    res.status(200).json(posts);
});


router.post('/', (req, res) => {
    const { title, content } = req.body;
    if(!title || !content){
        return res.status(400).json({ message : 'Title and content are required' })
    }

    const newPost = {
        id : posts.length + 1,
        title,
        content
    }

    posts.push(newPost);
    res.status(201).json({message : 'Post Created', post : newPost })
})


module.exports = router;