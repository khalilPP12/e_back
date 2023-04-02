module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/mailling',
      handler: 'mailling.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
  