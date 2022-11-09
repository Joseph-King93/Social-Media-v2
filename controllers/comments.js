const Post = require('../models/post');

module.exports = {
    create
}

function create(req, res) {
    Post.findById(req.params.postId, function (err, post) {
        req.body.user = req.user
        post.comments.push(req.body);
        post.save(function (err) {
            res.redirect(`/posts/${post.id}`);
        });
    });
}