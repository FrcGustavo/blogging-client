class BlogController {
  constructor(service = {}) {
    this.service = service;
    this.msg = 'Hello World!';
    this.home = this.home.bind(this);
  }

  async home(req, res, next) {
    try {
      res.send(this.msg);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BlogController;
