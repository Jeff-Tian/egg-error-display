"use strict";

module.exports = app => {
    const {router} = app;

    router.get("/", ctx => {
        ctx.body = "hi, " + app.plugins.errorDisplay.name;
    });

    router.get('/error', () => {
        throw new Error('test')
    })
};
