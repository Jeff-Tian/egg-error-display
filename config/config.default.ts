'use strict'

import {Application} from "egg"

exports.errorDisplay = {
    isProd: (app: Application) => app.env === 'prod' || app.env === 'production'
}
