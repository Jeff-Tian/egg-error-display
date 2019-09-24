import mock from 'egg-mock'
import request from 'supertest'
import assert = require('assert')
import nock from 'nock'

describe('test/aliyun-openapi.test.ts', () => {
    let app: any
    before(async () => {
        app = mock.app({
            baseDir: 'apps/aliyun-openapi-test',
        })

        return app.ready()
    })

    after(() => app.close())

    afterEach(mock.restore)

    it('should get /', () => {
        return request(app.callback())
            .get('/')
            .expect('hi, aliyunOpenApi')
            .expect(200)
    })

    it('should GET /vod play auth', async () => {
        nock('https://vod.cn-shanghai.aliyuncs.com').get(() => true).reply(200, {
            RequestId: '25818875-5F78-4A13-BEF6-D7393642CA58',
            VideoMeta: {
                VideoId: '93ab850b4f6f44eab54b6e91d24d81d4',
                Title: '阿里云VOD',
                Duration: 135.6,
                CoverURL: 'https://image.example.com/sample.jpg',
                Status: 'Normal',
            },
            PlayAuth: 'sstyYuew678999ew90000000xtt7TYUh',
        })

        const res = await app
            .httpRequest()
            .get('/vod?action=GetVideoPlayAuth&videoId=1234')
            .expect(200)

        assert.deepStrictEqual(res.body.PlayAuth, 'sstyYuew678999ew90000000xtt7TYUh')
    })
})
