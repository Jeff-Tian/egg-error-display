import mock from 'egg-mock'
import request from 'supertest'
import assert = require('assert')

describe('test/less-info.test.ts', () => {
    let app: any
    before(async () => {
        app = mock.app({
            baseDir: 'apps/less-info',
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

    it('should error with less information', async () => {
        const res = await request(app.callback()).get('/error').expect(500)

        assert(res.text.startsWith('<h2>'))
    })
})
