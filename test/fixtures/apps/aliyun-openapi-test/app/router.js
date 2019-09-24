"use strict";

module.exports = app => {
  const { router } = app;

  router.get("/", ctx => {
    ctx.body = "hi, " + app.plugins.aliyunOpenApi.name;
  });
};
