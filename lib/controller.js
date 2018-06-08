const request = require('./request');
class BaseClass {
    constructor () {
        if (new.target === BaseClass) throw new Error('Not New');
        this.ctx = arguments[0]
        this.next = arguments[1]
        this.request = request()
    }
}

module.exports = BaseClass;
