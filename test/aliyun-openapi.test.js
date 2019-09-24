"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const egg_mock_1 = tslib_1.__importDefault(require("egg-mock"));
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const assert = require("assert");
const nock_1 = tslib_1.__importDefault(require("nock"));
describe('test/aliyun-openapi.test.ts', () => {
    let app;
    before(async () => {
        app = egg_mock_1.default.app({
            baseDir: 'apps/aliyun-openapi-test',
        });
        return app.ready();
    });
    after(() => app.close());
    afterEach(egg_mock_1.default.restore);
    it('should get /', () => {
        return supertest_1.default(app.callback())
            .get('/')
            .expect('hi, aliyunOpenApi')
            .expect(200);
    });
    it('should GET /vod play auth', async () => {
        nock_1.default('https://vod.cn-shanghai.aliyuncs.com').get(() => true).reply(200, {
            RequestId: '25818875-5F78-4A13-BEF6-D7393642CA58',
            VideoMeta: {
                VideoId: '93ab850b4f6f44eab54b6e91d24d81d4',
                Title: '阿里云VOD',
                Duration: 135.6,
                CoverURL: 'https://image.example.com/sample.jpg',
                Status: 'Normal',
            },
            PlayAuth: 'sstyYuew678999ew90000000xtt7TYUh',
        });
        const res = await app
            .httpRequest()
            .get('/vod?action=GetVideoPlayAuth&videoId=1234')
            .expect(200);
        assert.deepStrictEqual(res.body.PlayAuth, 'sstyYuew678999ew90000000xtt7TYUh');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpeXVuLW9wZW5hcGkudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsaXl1bi1vcGVuYXBpLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0VBQTJCO0FBQzNCLGtFQUErQjtBQUMvQixpQ0FBaUM7QUFDakMsd0RBQXVCO0FBRXZCLFFBQVEsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLEVBQUU7SUFDekMsSUFBSSxHQUFRLENBQUE7SUFDWixNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDZCxHQUFHLEdBQUcsa0JBQUksQ0FBQyxHQUFHLENBQUM7WUFDWCxPQUFPLEVBQUUsMEJBQTBCO1NBQ3RDLENBQUMsQ0FBQTtRQUVGLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBRUYsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBRXhCLFNBQVMsQ0FBQyxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRXZCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO1FBQ3BCLE9BQU8sbUJBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNSLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQzthQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDcEIsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsMkJBQTJCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDdkMsY0FBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDcEUsU0FBUyxFQUFFLHNDQUFzQztZQUNqRCxTQUFTLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLGtDQUFrQztnQkFDM0MsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsTUFBTSxFQUFFLFFBQVE7YUFDbkI7WUFDRCxRQUFRLEVBQUUsa0NBQWtDO1NBQy9DLENBQUMsQ0FBQTtRQUVGLE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRzthQUNoQixXQUFXLEVBQUU7YUFDYixHQUFHLENBQUMsMkNBQTJDLENBQUM7YUFDaEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRWhCLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsa0NBQWtDLENBQUMsQ0FBQTtJQUNqRixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=