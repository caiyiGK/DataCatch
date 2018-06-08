"use strict";
module.exports = {
    '/': {
        GET: 'hello.fn_hello'
    },

    '/hello/:name': {
        GET: 'catch.index.fn_index'
    },

    '/index': {
        GET: ['catch.index.fn_sigin', 3000, 2000]
    }
}
