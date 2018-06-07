"use strict";
module.exports = {
    '/hello/:name': { GET: 'hello.fn_hello' },
    '/': { GET: 'catch.index.fn_index' },
    '/index': { GET: ['catch.index.fn_sigin', 3000, 2000] }
}
