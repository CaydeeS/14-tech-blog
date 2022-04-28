const router = require('express').Router();

const userRoute = require('./users-route.js');
const postRoute = require('./posts-route');
const commentRoute = require('./comment-route');

router.use('/users', userRoute);
router.use('/posts', postRoute);
router.use('/comments', commentRoute);

module.exports = router;