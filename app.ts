import {Application, Context} from 'egg'
import RPCClient from '@alicloud/pop-core'

// const debug = require('debug')('egg-aliyun-openapi')
import assert = require('assert');

export default (app: Application) => {
    const config = app.config.aliyunOpenApi
    assert(config.key)
    assert(config.secret)
    assert(config.mount)

    Object.keys(config.mount).forEach(key => {
        app.get(config.mount[key], async (ctx: Context) => {
            const client = new RPCClient({
                accessKeyId: config.key,
                accessKeySecret: config.secret,
                endpoint: `https://vod.${config.regionId}.aliyuncs.com`,
                apiVersion: config.apiVersion,
            })

            ctx.body = await client.request(ctx.query.action, {
                VideoId: ctx.query.videoId,
            })
        })
    })
}
