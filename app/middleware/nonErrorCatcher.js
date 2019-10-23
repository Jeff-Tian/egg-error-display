"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => async (_ctx, next) => {
    try {
        await next();
    }
    catch (err) {
        if (!(err instanceof Error) && typeof err === 'object') {
            const error = new Error('non-error thrown: ' + err);
            for (const key in err) {
                error[key] = err[key];
            }
            throw error;
        }
        throw err;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uRXJyb3JDYXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm9uRXJyb3JDYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0JBQWUsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQWEsRUFBRSxJQUF5QixFQUFFLEVBQUU7SUFDcEUsSUFBSTtRQUNBLE1BQU0sSUFBSSxFQUFFLENBQUM7S0FDaEI7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxLQUFLLENBQUMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDcEQsTUFBTSxLQUFLLEdBQVEsSUFBSSxLQUFLLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxDQUFDLENBQUE7WUFFeEQsS0FBSyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUU7Z0JBQ25CLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDeEI7WUFFRCxNQUFNLEtBQUssQ0FBQztTQUNmO1FBRUQsTUFBTSxHQUFHLENBQUM7S0FDYjtBQUNMLENBQUMsQ0FBQSJ9