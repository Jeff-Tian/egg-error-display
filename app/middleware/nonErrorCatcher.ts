import {Context} from 'egg'
import util from 'util'

export default () => async (_ctx: Context, next: () => Promise<void>) => {
    try {
        await next()
    } catch (err) {
        if (!(err instanceof Error) && typeof err === 'object') {
            const error: any = new Error('non-error thrown: ' + err + '\n' + util.inspect(err))

            for (const key in err) {
                error[key] = err[key]
            }

            throw error
        }

        throw err
    }
}

