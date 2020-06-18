import axios from 'axios';

class PostsController {
  constructor(url) {
    this.url = url;

    this.index = this.index.bind(this);
  }

  async index(req, res) {
    try {
      const posts = await axios({
        url: `${this.url}/posts/author`,
        headers: {
          Authorization: `Bearer ${req.cookies.token}`,
        },
      });

      res.json({ posts: [...posts.data.body] });
    } catch (error) {
      res.json({ error });
    }
  }
}

export default PostsController;
