'use strict'

import {Application} from "egg"

exports.onError = {
    isProd: (app: Application) => app.env === 'prod' || app.env === 'production'
}
