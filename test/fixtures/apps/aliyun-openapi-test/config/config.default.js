"use strict";

module.exports = appInfo => {
    const config = {};

    config.keys = "123456";

    config.aliyunOpenApi = {
        key: "xxx",
        secret: "yyy",
        mount: {
            vod: '/vod'
        }
    };

    return config;
};
