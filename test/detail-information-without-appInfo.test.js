"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const egg_mock_1 = tslib_1.__importDefault(require("egg-mock"));
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const assert = require("assert");
describe('test/on-error.test.ts', () => {
    let app;
    before(async () => {
        app = egg_mock_1.default.app({
            baseDir: 'apps/without-appInfo',
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
    it('should error with detail information but without sensitive information', async () => {
        const res = await supertest_1.default(app.callback()).get('/error').expect(500);
        assert(res.text.startsWith('<!DOCTYPE html>'));
        assert(!res.text.includes('EGG_SESS'));
    });
    it('should error with detail information for json request', async () => {
        const res = await supertest_1.default(app.callback())
            .get('/error')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500);
        assert.ok(JSON.parse(res.text));
        assert.deepStrictEqual(res.body.message, 'test');
    });
    it('should show ctx.throw errors', async () => {
        const res = await supertest_1.default(app.callback())
            .get('/throw')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422);
        assert.ok(JSON.parse(res.text));
        assert.deepStrictEqual(res.body.message, 'test-throw');
    });
    it('should show errors for customized throw', async () => {
        const res = await supertest_1.default(app.callback())
            .get('/customized-throw')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500);
        assert.ok(JSON.parse(res.text));
        assert.deepStrictEqual(res.body.message, 'non-error thrown: {"errmessage":"hello"}');
    });
    it('should show errors for ctx.throw in middleware', async () => {
        const res = await supertest_1.default(app.callback())
            .get('/middleware-error')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422);
        assert(res.body.message === 'error!');
    });
    it('should show errors for ctx.throw raw error in middleware', async () => {
        const res = await supertest_1.default(app.callback())
            .get('/middleware-error-2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500);
        assert(res.body.message === 'raw message');
        assert(res.body.detail === 'detail');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLWluZm9ybWF0aW9uLXdpdGhvdXQtYXBwSW5mby50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLWluZm9ybWF0aW9uLXdpdGhvdXQtYXBwSW5mby50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdFQUEyQjtBQUMzQixrRUFBK0I7QUFDL0IsaUNBQWlDO0FBRWpDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUU7SUFDbkMsSUFBSSxHQUFRLENBQUE7SUFDWixNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDZCxHQUFHLEdBQUcsa0JBQUksQ0FBQyxHQUFHLENBQUM7WUFDWCxPQUFPLEVBQUUsc0JBQXNCO1NBQ2xDLENBQUMsQ0FBQTtRQUVGLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBRUYsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBRXhCLFNBQVMsQ0FBQyxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRXZCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO1FBQ3BCLE9BQU8sbUJBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNSLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQzthQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDcEIsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsd0VBQXdFLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDcEYsTUFBTSxHQUFHLEdBQUcsTUFBTSxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFbkUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJ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