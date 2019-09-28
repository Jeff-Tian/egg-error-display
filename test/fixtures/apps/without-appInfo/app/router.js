"use strict";

const ctxThrow = require('./middleware/ctx-throw.js')
const rawThrow = require('./middleware/throw-raw.js')

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

    router.get('/middleware-error', ctxThrow, ctx=>{
        ctx.body = 'ok'
    })

    router.get('/middleware-error-2', rawThrow, ctx=>{
        ctx.body = 'ok'
    })
};
