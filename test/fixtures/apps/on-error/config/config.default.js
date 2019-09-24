"use strict";

module.exports = appInfo => {
    const config = {};

    config.keys = "123456";

    config.errorDisplay = {
        isProd: () => false
    }

    return config;
};
