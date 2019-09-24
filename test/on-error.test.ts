import mock from 'egg-mock'
import request from 'supertest'
import assert = require('assert')

describe('test/on-error.test.ts', () => {
    let app: any
    before(async () => {
        app = mock.app({
            baseDir: 'apps/on-error',
        })

        return app.ready()
    })

    after(() => app.close())

    afterEach(mock.restore)

    it('should get /', () => {
        return request(app.callback())
            .get('/')
            .expect('hi, onError')
            .expect(200)
    })

    it('should error with detail information', async () => {
        const res = await request(app.callback()).get('/error').expect(500)

        assert(res.text.startsWith('<!DOCTYPE html>'))
    })

})
