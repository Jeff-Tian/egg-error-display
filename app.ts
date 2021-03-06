import {Application} from 'egg'
import http from 'http';
import fs from 'fs'

export default class AppBootHook {
    app: Application;

    constructor(app: Application) {
        this.app = app
    }

    configWillLoad() {
        const {app} = this;

        const {detectStatus, detectErrorMessage} = require('egg-onerror/lib/utils')
        const ErrorView = require('./helpers/error-view')
        const onError = require('egg-onerror/config/config.default')

        const onErrorConfig = app.config.onerror
        const isProd = app.config.errorDisplay.isProd
        const serializer = app.config.errorDisplay.serializer
        onErrorConfig.html = function (err: any) {
            const status = detectStatus(err)
            const errorPageUrl =
                typeof onErrorConfig.errorPageUrl === 'function'
                    ? onErrorConfig.errorPageUrl(err, this)
                    : onErrorConfig.errorPageUrl

            // keep the real response status
            this.realStatus = status
            // don't respond any error message in production env
            if (isProd(app)) {
                // 5xx
                if (status >= 500) {
                    if (errorPageUrl) {
                        const statusQuery =
                            (errorPageUrl.indexOf('?') > 0 ? '&' : '?') +
                            `real_status=${status}`
                        return this.redirect(errorPageUrl + statusQuery)
                    }
                    this.status = 500
                    this.body = `<h2>Internal Server Error, real status: ${status}</h2>`
                    return
                }
                // 4xx
                this.status = status
                this.body = `<h2>${status} ${http.STATUS_CODES[status]}</h2>`
                return
            }

            const viewTemplate = fs.readFileSync(onError.onerror.templatePath, 'utf8')
            const errorView = new ErrorView(this, err, viewTemplate)
            this.body = errorView.toHTML(serializer)
        }
        onErrorConfig.json = function (err: any) {
            const status = detectStatus(err)
            let errorJson: any = {}

            this.status = status
            const code = err.code || err.type
            const message = detectErrorMessage(this, err)

            if (isProd(app)) {
                // 5xx server side error
                if (status >= 500) {
                    errorJson = {
                        code,
                        // don't respond any error message in production env
                        message: http.STATUS_CODES[status],
                    }
                } else {
                    // 4xx client side error
                    // addition `errors`
                    errorJson = {
                        code,
                        message,
                        errors: err.errors,
                    }
                }
            } else {
                errorJson = {
                    code,
                    message,
                    errors: err.errors,
                }

                if (status >= 500) {
                    // provide detail error stack in local env
                    errorJson.stack = err.stack
                    errorJson.name = err.name
                    for (const key in err) {
                        if (!errorJson[key]) {
                            errorJson[key] = err[key]
                        }
                    }
                }
            }

            this.body = errorJson
        }
        onErrorConfig.js = function (err: any) {
            app.config.onerror.json.call(this, err, this)

            if (this.createJsonpBody) {
                this.createJsonpBody(this.body)
            }
        }

        if (app.config.coreMiddleware.indexOf('nonErrorCatcher') < 0) {
            app.config.coreMiddleware.push('nonErrorCatcher')
        }
    }
}
