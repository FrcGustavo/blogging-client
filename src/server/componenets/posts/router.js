class PostsRouter {
  constructor(app, route, path, controller, middlewares) {
    this.app = app;
    this.router = route;
    this.path = path;
    this.controller = controller;
    this.middlewares = middlewares;
  }

  loadRoutes() {
    this.app.use(this.path, this.router);

    this.router.get('/', this.controller.index);
  }
}
