var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts.js');

router.get('/', postsCtrl.index);
router.get('/new', postsCtrl.new);
router.get('/:postId', postsCtrl.show);
router.post('/', postsCtrl.create);

module.exports = router;
