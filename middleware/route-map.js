"use strict";

const path = require('path');
const router = require('koa-router')();
const requireAll = require('require-all');
const routerTable = require('../app/router');
// const util = require('../utils/helper.util');
console.log(routerTable)
/**
 * 读取控制器
 */
const controllers = requireAll({
    dirname: path.join(__dirname, '../app/controllers'),
    filter: /(.+)\.js$/
});

// console.log(controllers,'0000')
/**
 * 递归绑定控制器
 * @param	{Object}	Router  JSON
 */
(function loop(routes, route) {
    route = route || '';
    Object
        .keys(routes)
        .map(key => {

            if (routes[key] instanceof Object && !(routes[key] instanceof Array)) {
                loop(routes[key], route + key);
            } else {
                let tpm, controller, action = null;
                if (routes[key] instanceof Array) {
                    // 权限数组 [10000, 20000]
                    let power = routes[key].filter(num => /^[1-9]+[0-9]*]*$/.test(num));
                    // // 获取权限
                    // if (power instanceof Array) {
                    //     router[key](route, controllers.validator(power));
                    // }
                }

                let arg = (typeof routes[key] === 'string')
                ? routes[key].split('.')
                : routes[key].filter(str => typeof str == 'string')[0].split('.');

                if (arg.length === 3) {
                    tpm = arg[0];
                    controller = arg[1];
                    action = arg[2];
                } else {
                    controller = arg[0];
                    action = arg[1];
                }

                router[key.toLowerCase()](route, async (ctx, next) => {
                    if (tpm) {
                        new controllers[tpm][controller](ctx, next)[action]();  // 实例化控制器
                    } else {
                        new controllers[controller](ctx, next)[action]();
                    }
                });
            }
        });
})(routerTable)

module.exports = router;
