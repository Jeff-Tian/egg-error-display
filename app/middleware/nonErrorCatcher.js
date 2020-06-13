"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => async (_ctx, next) => {
    try {
        await next();
    }
    catch (err) {
        if (!(err instanceof Error) && typeof err === 'object') {
            const error = new Error('non-error thrown: ' + err + ', ' + JSON.stringify(err));
            for (const key in err) {
                error[key] = err[key];
            }
            throw error;
        }
        throw err;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uRXJyb3JDYXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm9uRXJyb3JDYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0JBQWUsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQWEsRUFBRSxJQUF5QixFQUFFLEVBQUU7SUFDcEUsSUFBSTtRQUNBLE1BQU0sSUFBSSxFQUFFLENBQUE7S0FDZjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxZQUFZLEtBQUssQ0FBQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNwRCxNQUFNLEtBQUssR0FBUSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUVyRixLQUFLLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBRTtnQkFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUN4QjtZQUVELE1BQU0sS0FBSyxDQUFBO1NBQ2Q7UUFFRCxNQUFNLEdBQUcsQ0FBQTtLQUNaO0FBQ0wsQ0FBQyxDQUFBIn0=