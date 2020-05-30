import initialState from '../initialState';
import renderApp from '../utils/renderApp';

class BlogController {
  constructor(service = {}) {
    this.service = service;
    this.msg = 'Hello World!';
    this.home = this.home.bind(this);
  }

  async home(req, res, next) {
    try {
      const state = { ...initialState };
      const html = renderApp(state, req.url, req.hashManifest, {});
      res.send(html);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BlogController;
