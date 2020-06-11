class PostsRouter {
  constructor(app, router, route, controller, middlewares) {
    this.app = app;
    this.router = router;
    this.route = route;
    this.controller = controller;
    this.middlewares = middlewares;

    this.loadRoutes = this.loadRoutes.bind(this);
  }

  loadRoutes() {
    this.app.use(this.route, this.router);

    this.router.get('/', this.controller.index);
  }
}

export default PostsRouter;
