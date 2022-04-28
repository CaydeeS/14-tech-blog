const { Posts } = require('../models');

const postdata = [
  {
    title: 'First post',
    post_text: 'Placeholder text',
    user_id: 8
  },
  {
    title: 'Second post',
    post_text: 'Placeholder text',
    user_id: 1
  },
  {
    title: 'Third post',
    post_text: 'Placeholder text',
    user_id: 4
  },
  {
    title: 'Fourth post',
    post_text: 'Placeholder text',
    user_id: 10
  },
  {
    title: 'Fifth post',
    post_text: 'Placeholder text',
    user_id: 2
  },
  {
    title: 'Sixth post',
    post_text: 'Placeholder text',
    user_id: 4
  }
];

const seedPosts = () => Posts.bulkCreate(postdata);

module.exports = seedPosts;
