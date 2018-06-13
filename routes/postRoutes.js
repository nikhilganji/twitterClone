
const express = require('express');
const postRoutes = express.Router();

// Require Item model in our routes module
const Post = require('../model/Post');

// Defined store route
postRoutes.route('/add').post((req, res) => {
  var post = new Post(req.body);
  post.save()
    .then(item => {
    res.status(200).json(item);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
postRoutes.route('/').get((req, res) => {
   Post.find((err, posts) =>{
    if(err){
      console.log(err);
    }
    else {
      res.json(posts);
    }
  });
});

module.exports = postRoutes;


