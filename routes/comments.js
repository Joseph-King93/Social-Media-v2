var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');

router.post('/posts/:postId/comments', commentsCtrl.create);

module.exports = router;