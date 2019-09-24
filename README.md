# egg-on-error

> Allow customize the default egg-onerror's definition of isProd (线上 !== 生产)

[![NPM version][npm-image]][npm-url]
[![Build Status](https://travis-ci.com/Jeff-Tian/egg-on-error.svg?branch=master)](https://travis-ci.com/Jeff-Tian/egg-on-error)
[![codecov](https://codecov.io/gh/Jeff-Tian/egg-on-error/branch/master/graph/badge.svg)](https://codecov.io/gh/Jeff-Tian/egg-on-error)
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-on-error.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-on-error
[david-image]: https://img.shields.io/david/jeff-tian/egg-on-error.svg?style=flat-square
[david-url]: https://david-dm.org/jeff-tian/egg-on-error
[snyk-image]: https://snyk.io/test/npm/egg-on-error/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-on-error
[download-image]: https://img.shields.io/npm/dm/egg-on-error.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-on-error

## Why
egg 项目本地跑起来后，如果有报错，会展示非常详细的错误堆栈。但是一旦发布到线上，就只会显示一个出错了，但是具体信息被隐藏了。

原因是 `egg` 默认的错误处理插件 `egg-onerror` 只对 `app.env` 为 `local` 或者 `unittest` 的情况展示详细信息，其他环境都被认为是生产环境，所以隐藏了错误堆栈。（[了解更多](https://github.com/eggjs/egg-onerror/pull/30)）

我认为，生产环境的确应该隐藏详细错误信息，要查问题应该看日志。但是并不是所有线上环境都为生产环境，应当允许开发者打开"展示详细错误"选项。所以开发这个插件来完成这件事情。

## Functionality
- 允许自定义 isProd 函数，用来确定当前 app 是否是生产环境。

## Install

```bash
$ npm i egg-on-error --save
```

## Usage

1. Enable it on plugin configuration:
```js
// {app_root}/config/plugin.[t|j]s
exports.onError = {
  enable: true,
  package: "egg-on-error"
};
```

2. Configure the `isProd` function:
```js
// {app_root}/config/config.default.[t|j]s
exports.onError = {
    isProd: (app: Application) => app.env === 'prod'
};
```

see [config/config.default.ts](config/config.default.ts) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

## Test

```shell
npm run test-local
```

## Release Notes:

