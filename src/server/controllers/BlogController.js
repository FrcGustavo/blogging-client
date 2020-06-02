import initialState from '../initialState';
import renderApp from '../utils/renderApp';
import PostService from '../services/PostService';

class BlogController {
  constructor(service = new PostService()) {
    this.service = service;
    this.msg = 'Hello World!';

    this.home = this.home.bind(this);
    this.blog = this.blog.bind(this);
  }

  async home(req, res, next) {
    try {
      const posts = await this.service.find({ limit: 1 });
      const state = { ...initialState, mainPost: posts[0] };
      const html = renderApp(state, req.url, req.hashManifest, {});
      res.send(html);
    } catch (error) {
      next(error);
    }
  }

  async blog(req, res, next) {
    try {
      const posts = await this.service.find();
      const state = { ...initialState, blog: posts.length > 0 ? posts : false };
      const html = renderApp(state, req.url, req.hashManifest, {});
      res.send(html);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BlogController;
