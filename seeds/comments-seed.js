const { Comments } = require('../models');

const commentsdata = [
  {
    comment_text: 'This is a comment',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'This is also a comment',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'And this.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Yup this too',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'Another comment',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'And another',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'A comment!',
    user_id: 6,
    post_id: 7
  },
  
];

const seedComments = () => Comments.bulkCreate(commentsdata);

module.exports = seedComments;
