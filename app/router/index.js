"use strict";
module.exports = {
    '/': {
        GET: 'hello.fn_hello'
    },

    '/list': {
        GET: 'catch.index.list'
    },

    //'/index': {
    //    GET: ['catch.index.fn_sigin', 3000, 2000]
    //}
}
