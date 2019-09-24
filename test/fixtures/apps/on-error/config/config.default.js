"use strict";

module.exports = appInfo => {
    const config = {};

    config.keys = "123456";

    config.onError = {
        isProd: () => false
    }

    return config;
};
