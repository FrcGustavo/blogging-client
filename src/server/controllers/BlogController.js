class BlogController {
  constructor(service = {}) {
    this.service = service;

    this.home = this.home.bind(this);
  }

  async home(req, res, next) {
    try {
      res.send('hello world!');
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BlogController;
