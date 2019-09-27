"use strict";

module.exports = app => {
    const {router} = app;

    router.get("/", ctx => {
        ctx.body = "hi, " + app.plugins.errorDisplay.name;
    });

    router.get('/error', () => {
        throw new Error('test')
    })

    router.get('/throw', ctx => {
        ctx.throw(422, 'test-throw')
    })

    router.get('/customized-throw', ctx => {
        throw JSON.stringify({errmessage: 'hello'})
    })
};
