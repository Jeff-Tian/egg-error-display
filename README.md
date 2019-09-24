# egg-aliyun-openai

> eggjs plugin for invoke aliyun openapi, wrapper of [OpenAPI POP core SDK for Node.js](https://github.com/aliyun/openapi-core-nodejs-sdk)

[![NPM version][npm-image]][npm-url]
[![Build Status](https://travis-ci.com/Jeff-Tian/egg-aliyun-openapi.svg?branch=master)](https://travis-ci.com/Jeff-Tian/egg-aliyun-openapi)
[![codecov](https://codecov.io/gh/Jeff-Tian/egg-aliyun-openapi/branch/master/graph/badge.svg)](https://codecov.io/gh/Jeff-Tian/egg-aliyun-openapi)
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-aliyun-openapi.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-aliyun-openapi
[david-image]: https://img.shields.io/david/jeff-tian/egg-aliyun-openapi.svg?style=flat-square
[david-url]: https://david-dm.org/jeff-tian/egg-aliyun-openapi
[snyk-image]: https://snyk.io/test/npm/egg-aliyun-openapi/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-aliyun-openapi
[download-image]: https://img.shields.io/npm/dm/egg-aliyun-openapi.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-aliyun-openapi

<!--
Description here.
-->

## Functionality
- vod

## Install

```bash
$ npm i egg-aliyun-openapi --save
```

## Usage

1. Enable it on plugin configuration:
```js
// {app_root}/config/plugin.[t|j]s
exports.aliyunOpenApi = {
  enable: true,
  package: "egg-aliyun-openapi"
};
```

2. Configure the `access key`, `access secret`, and the `mount paths`:
```js
// {app_root}/config/config.default.[t|j]s
exports.aliyunOpenApi = {
  key: "your access key id",
  secret: "your secret access key",
  regionId: 'cn-shanghai',
  apiVersion: '2017-03-21',
  mount: {
    vod: '/aliyun-openapi/vod'
  }
};
```

see [config/config.default.ts](config/config.default.ts) for more detail.

3. You can call it from client side now:
```typescript
const res = await app
            .httpRequest()
            .get('/aliyun-openapi/vod?action=GetVideoPlayAuth&videoId=1234')
            .expect(200)

assert.deepStrictEqual(res.body.PlayAuth, 'sstyYuew678999ew90000000xtt7TYUh')
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

## Test

```shell
npm run test-local
```

## Release Notes:

- 1.0.0: proxy aliyun vod product 
