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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLWluZm9ybWF0aW9uLXdpdGhvdXQtYXBwSW5mby50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLWluZm9ybWF0aW9uLXdpdGhvdXQtYXBwSW5mby50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdFQUEyQjtBQUMzQixrRUFBK0I7QUFDL0IsaUNBQWlDO0FBRWpDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUU7SUFDbkMsSUFBSSxHQUFRLENBQUE7SUFDWixNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDZCxHQUFHLEdBQUcsa0JBQUksQ0FBQyxHQUFHLENBQUM7WUFDWCxPQUFPLEVBQUUsc0JBQXNCO1NBQ2xDLENBQUMsQ0FBQTtRQUVGLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBRUYsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBRXhCLFNBQVMsQ0FBQyxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRXZCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO1FBQ3BCLE9BQU8sbUJBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNSLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQzthQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDcEIsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsd0VBQXdFLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDcEYsTUFBTSxHQUFHLEdBQUcsTUFBTSxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFbkUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtRQUM5QyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0lBQzFDLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFDLENBQUEifQ==