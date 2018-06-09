'use strict';

const config = require('../config')
    , request = require('superagent');

module.exports = function () {

    let DOMAIN = '',
        http = {},
        arg = arguments[0] || 'plex',
        reURL = /^(https?|ftp|file):\/\/.+$/;

    // 设置域名
    DOMAIN = config['domain'][arg].domain;

    // 遍历 GET POST PUT DELETE http 方法
    ['get', 'post', 'put', 'delete'].map(key => {
        http[key] = new Proxy(request[key], {
            apply(target, ctx, args) {
                let url = reURL.test(args[0]) ? args[0] : DOMAIN + (args[0] || '');
                //console.log(url)
                return target(url);
            }
        });
    })
    return http;
}
