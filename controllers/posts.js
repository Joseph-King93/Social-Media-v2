const Post = require('../models/post');
const User = require('../models/user');


module.exports = {
  index,
  create,
  new: newPost,
  show
};

function index(req, res) {
  Post.find({}, function (err, posts) {
    if (err) return res.redirect('/posts');
    User.find({}, function (err, users) {
      if (err) return res.redirect('/posts');    
    res.render('posts/index', { posts, users });
  })});
}

function create(req, res) {
  req.body.user = req.user
  const post = new Post(req.body);
  post.save(function (err) {
    if (err) return res.render('posts/new');
    res.redirect('/posts');
  });
}

function newPost(req, res) {
  res.render('posts/new');
}

function show(req, res) {
  Post.findById(req.params.postId, function (err, post) {    
      if (err) return res.redirect('/posts');
      User.find({}, function (err, user) {
        if (err) return res.redirect('/posts');    
      res.render('posts/show', { post, user });
  })});
}