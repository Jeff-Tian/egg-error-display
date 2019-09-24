"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const egg_mock_1 = tslib_1.__importDefault(require("egg-mock"));
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const assert = require("assert");
describe('test/less-info.test.ts', () => {
    let app;
    before(async () => {
        app = egg_mock_1.default.app({
            baseDir: 'apps/less-info',
        });
        return app.ready();
    });
    after(() => app.close());
    afterEach(egg_mock_1.default.restore);
    it('should get /', () => {
        return supertest_1.default(app.callback())
            .get('/')
            .expect('hi, errorDisplay')
            .expect(200);
    });
    it('should error with less information', async () => {
        const res = await supertest_1.default(app.callback()).get('/error').expect(500);
        assert(res.text.startsWith('<h2>'));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVzcy1pbmZvLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsZXNzLWluZm8udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxnRUFBMkI7QUFDM0Isa0VBQStCO0FBQy9CLGlDQUFpQztBQUVqQyxRQUFRLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxFQUFFO0lBQ3BDLElBQUksR0FBUSxDQUFBO0lBQ1osTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2QsR0FBRyxHQUFHLGtCQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1gsT0FBTyxFQUFFLGdCQUFnQjtTQUM1QixDQUFDLENBQUE7UUFFRixPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN0QixDQUFDLENBQUMsQ0FBQTtJQUVGLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUV4QixTQUFTLENBQUMsa0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUV2QixFQUFFLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtRQUNwQixPQUFPLG1CQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3pCLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDUixNQUFNLENBQUMsa0JBQWtCLENBQUM7YUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2hELE1BQU0sR0FBRyxHQUFHLE1BQU0sbUJBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRW5FLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==