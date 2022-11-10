var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts.js');

// import private route middleware
const isLoggedIn = require("../config/auth");

router.get('/', isLoggedIn, postsCtrl.index);
router.get('/new', isLoggedIn, postsCtrl.new);
router.get('/:postId', isLoggedIn, postsCtrl.show);
router.post('/', isLoggedIn, postsCtrl.create);
router.delete('/:postId', isLoggedIn, postsCtrl.delete);
router.get('/:postId/edit', isLoggedIn, postsCtrl.edit);
router.put('/:postId', isLoggedIn, postsCtrl.update);

module.exports = router;
